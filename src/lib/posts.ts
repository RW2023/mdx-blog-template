//src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

interface FrontMatter {
  title: string;
  date: string;
  author: string;
  featuredImage?: string;
  keywords?: string[];  // Added keywords field
}

interface Post {
  slug: string;
  frontMatter: FrontMatter;
}

// Function to get all post slugs
export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Function to get the content and front matter of a single post
export async function getPostData(slug: string): Promise<{ frontMatter: FrontMatter; content: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  const safeFrontMatter = {
    ...frontMatter,
    featuredImage: frontMatter.featuredImage || '',
    date: new Date(frontMatter.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    author: frontMatter.author || 'Unknown',
    keywords: frontMatter.keywords || [],  // Ensure keywords is always an array
  };

  return {
    frontMatter: safeFrontMatter as FrontMatter,
    content,
  };
}

// Function to get all posts with their metadata
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontMatter } = matter(fileContents);

      const safeFrontMatter = {
        ...frontMatter,
        featuredImage: frontMatter.featuredImage || '',
        date: new Date(frontMatter.date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        author: frontMatter.author || 'Unknown',
        keywords: frontMatter.keywords || [],  // Ensure keywords is always an array
      };

      return {
        slug,
        frontMatter: safeFrontMatter as FrontMatter,
      };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
}
