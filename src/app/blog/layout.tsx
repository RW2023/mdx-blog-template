import { FC } from "react";

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background dark:bg-dark-background">
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
        </div>
    );
};

export default BlogLayout;
