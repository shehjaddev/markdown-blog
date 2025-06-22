import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMeta, BlogData } from '../types/blog';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export function getSortedBlogsData(): (BlogMeta & { slug: string })[] {
  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as BlogMeta),
    };
  });

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getBlogData(slug: string): Promise<BlogData> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as BlogMeta),
  };
}
