import { getAllPosts } from '@/lib/posts';
import ArticleList from '@/components/ArticleList';
import Link from 'next/link';

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
    // Get the current page from URL query, default to 1
    const currentPage = parseInt(searchParams.page || '1');
    const postsPerPage = 6;

    // Fetch all posts
    const allPosts = getAllPosts();

    // Calculate total pages
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    // Get posts for the current page
    const paginatedPosts = allPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-extrabold text-headline dark:text-dark-headline mb-6">
               Blog
            </h1>

            {/* Render the paginated posts */}
            <ArticleList posts={paginatedPosts} />

            {/* Pagination Controls */}
            <div className="flex justify-between mt-8">
                {currentPage > 1 && (
                    <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="text-black dark:text-white text-xl"
                    >
                        Newer Posts
                    </Link>
                )}
                {currentPage < totalPages && (
                    <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="text-black dark:text-white text-xl"
                    >
                        Older Posts
                    </Link>
                )}

            </div>
        </div>
    );
}
