import React, { useState } from 'react';
import imgLoading from '../images/imageLoading64.png';
import imgNotFound from '../images/imageNotFound64.png';

interface LazyImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    placeholder?: string;
    errorPlaceholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    width = 200,
    height = 200,
    placeholder = imgLoading,
    errorPlaceholder = imgNotFound,
}) => {
    const [imageSrc, setImageSrc] = useState<string>(placeholder);
    const [isError, setIsError] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageSrc(src);
    };

    const handleImageError = () => {
        setIsError(true);
        setImageSrc(errorPlaceholder);
    };

    return (
        <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="object-cover"
        />
    );
};

export default LazyImage;