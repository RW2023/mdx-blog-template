import Image from 'next/image';

// Define the props interface for MDXImage
export interface MDXImageProps {
    src?: string;  // Allow src to be optional (string | undefined)
    alt?: string;
    float?: 'left' | 'right'; // Optional prop to control image float
}

const MDXImage: React.FC<MDXImageProps> = ({ src, alt = '', float }) => {
    const floatClass = float === 'left' ? 'float-left mr-4 mb-4' : float === 'right' ? 'float-right ml-4 mb-4' : '';

    // Ensure src is defined before rendering the image
    if (!src) return null;

    return (
        <Image
            src={src}
            alt={alt}
            width={600}  // Adjust the width based on your needs
            height={400}  // Adjust the height based on your needs
            className={`rounded-lg ${floatClass}`}
            priority
        />
    );
};

export default MDXImage;
