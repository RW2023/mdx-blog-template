import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

interface Post {
    slug: string;
    frontMatter: {
        title: string;
        date: string;
    };
}

export default function BlogGrid() {
    const posts: Post[] = getAllPosts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <a className="block p-4 bg-background dark:bg-dark-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-xl font-bold text-headline dark:text-dark-headline mb-2">
                            {post.frontMatter.title}
                        </h2>
                        <p className="text-sm text-paragraph dark:text-dark-paragraph">
                            {post.frontMatter.date}
                        </p>
                    </a>
                </Link>
            ))}
        </div>
    );
}
