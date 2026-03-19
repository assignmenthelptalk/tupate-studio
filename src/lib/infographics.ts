import fs from 'node:fs';
import path from 'node:path';
import { articles } from '../data/articles';

export interface Infographic {
  articleSlug: string;
  articleTitle: string;
  articlePath: string;
  imageSrc: string;
  imageName: string;
  graphicSlug: string;
  title: string;
  sharePath: string;
}

const articlesDir = path.resolve('src/content/articles');

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function decodeEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function getInfographicsForArticle(articleSlug: string): Infographic[] {
  const article = articles.find((entry) => entry.slug === articleSlug);
  if (!article) return [];

  const filePath = path.join(articlesDir, `${articleSlug}.astro`);
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf8');
  const figureRegex = /<figure>([\s\S]*?)<\/figure>/g;
  const items: Infographic[] = [];
  let match: RegExpExecArray | null;

  while ((match = figureRegex.exec(content)) !== null) {
    const figure = match[1];
    const imgMatch = figure.match(/<img[^>]*src="([^"]+\.svg)"[^>]*alt="([^"]*)"[^>]*>/i);
    if (!imgMatch) continue;

    const [, imageSrc, alt] = imgMatch;
    const figcaptionMatch = figure.match(/<figcaption>([\s\S]*?)<\/figcaption>/i);
    const title = decodeEntities((figcaptionMatch?.[1] ?? alt).trim());
    const imageName = imageSrc.replace(/^\//, '');
    const graphicSlug = slugify(imageName);

    items.push({
      articleSlug,
      articleTitle: article.title,
      articlePath: `/articles/${articleSlug}`,
      imageSrc,
      imageName,
      graphicSlug,
      title,
      sharePath: `/infographics/${articleSlug}/${graphicSlug}`,
    });
  }

  return items;
}

export function getAllInfographics(): Infographic[] {
  return articles.flatMap((article) => getInfographicsForArticle(article.slug));
}

export interface ArticleHeading {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

export function getHeadingsForArticle(articleSlug: string): ArticleHeading[] {
  const filePath = path.join(articlesDir, `${articleSlug}.astro`);
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf8');
  const headingRegex = /<(h2|h3)>([\s\S]*?)<\/\1>/gi;
  const slugCounts = new Map<string, number>();
  const headings: ArticleHeading[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].toLowerCase() as 'h2' | 'h3';
    const rawText = match[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!rawText) continue;

    const baseId = slugify(decodeEntities(rawText));
    const count = slugCounts.get(baseId) ?? 0;
    slugCounts.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

    headings.push({
      id,
      text: decodeEntities(rawText),
      level,
    });
  }

  return headings;
}
