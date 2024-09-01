import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';  // Ensure this is the correct path to your Button component

interface BlogPostLayoutProps {
    title: string;
    date: string;
    author: string; // Add the author field
    featuredImage?: string;
    children: ReactNode;
}

const BlogPostLayout: FC<BlogPostLayoutProps> = ({ title, date, author, featuredImage, children }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {featuredImage && (
                <div className="mb-6">
                    <Image
                        src={featuredImage}
                        alt={title}
                        width={1200}
                        height={400}
                        className="object-cover w-full h-96 rounded-lg"
                        priority
                    />
                </div>
            )}
            <header className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-headline dark:text-dark-headline mb-2">
                    {title}
                </h1>
                <p className="text-lg text-paragraph dark:text-dark-paragraph">
                    {date} - By {author}
                </p>
            </header>
            <article className="prose prose-lg dark:prose-invert max-w-none">
                {children}
            </article>
            <div className="mt-8">
                <Link href="/blog">
                    <Button>Back to Blog</Button>
                </Link>
            </div>
        </div>
    );
};

export default BlogPostLayout;
