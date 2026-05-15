import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ContentData {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export function getContentSlugs(category: string) {
  const categoryDir = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export function getContentBySlug(category: string, slug: string): ContentData | null {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      slug,
      category,
      title: matterResult.data.title || 'Untitled',
      description: matterResult.data.description || '',
      date: matterResult.data.date || '',
      content: matterResult.content,
    };
  } catch (err) {
    console.error(`Error reading content for ${category}/${slug}:`, err);
    return null;
  }
}

export function getAllContent(category: string): Omit<ContentData, 'content'>[] {
  const categoryDir = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryDir);
  const allContent = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(categoryDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      category,
      title: matterResult.data.title || 'Untitled',
      description: matterResult.data.description || '',
      date: matterResult.data.date || '',
    };
  });

  return allContent.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
