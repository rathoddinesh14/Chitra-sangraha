export interface ImageCardProps {
    image: {
        src: string;
        alt: string;
        title: string;
        description: string;
    };
    onClick?: () => void;
}