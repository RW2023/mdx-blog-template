//src/app/blog/%5Bslug%5D/page.tsx
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogPostLayout from '@/components/BlogPostLayout';
import MDXImage, { MDXImageProps } from '@/components/MDXImage';

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();

    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { frontMatter, content } = await getPostData(params.slug);

    // Map MDXImage to the MDX context with typed props
    const components = {
        img: (props: MDXImageProps) => <MDXImage {...props} />,
    };

    return (
        <BlogPostLayout
            title={frontMatter.title}
            date={frontMatter.date}
            author={frontMatter.author}  // Ensure the author is passed here
            featuredImage={frontMatter.featuredImage}
        >
            <MDXRemote source={content} components={components} />
        </BlogPostLayout>
    );
}
