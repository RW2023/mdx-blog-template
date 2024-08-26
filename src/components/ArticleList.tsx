'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Post {
    slug: string;
    frontMatter: {
        title: string;
        date: string;
        featuredImage?: string; // Allow it to be optional
    };
}

interface ArticleListProps {
    posts: Post[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.03 },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <motion.div
                    key={post.slug}
                    className="p-4 bg-background dark:bg-[#2e3c45] rounded-lg shadow-lg dark:shadow-lg border dark:border-dark-stroke"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                >
                    {post.frontMatter.featuredImage && (
                        <Link href={`/blog/${post.slug}`}>
                            <Image
                                src={post.frontMatter.featuredImage}
                                alt={post.frontMatter.title}
                                width={400}
                                height={250}
                                className="object-cover w-full h-48 rounded-t-lg"
                            />
                        </Link>
                    )}
                    <div className="p-4">
                        <Link href={`/blog/${post.slug}`}>
                            <h3 className="text-2xl font-bold text-headline dark:text-dark-headline">
                                {post.frontMatter.title}
                            </h3>
                        </Link>
                        <p className="text-paragraph dark:text-dark-paragraph">
                            {post.frontMatter.date}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ArticleList;
