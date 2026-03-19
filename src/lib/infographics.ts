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
