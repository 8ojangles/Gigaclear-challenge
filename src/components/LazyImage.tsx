import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgLoading from '../images/imageLoading64.png';
import { useState } from 'react';
import imgNotFound from '../images/imageNotFound64.png';

type Props = {
    imgUrl: string;
    imgAlt: string;
    scrollPosition: any;
}

const LazyImage: React.FC<Props> = (props: Props) => {
    
    const { imgUrl, imgAlt, scrollPosition } = props;

    const [ imgLoadError, setImgLoadError ] = useState<boolean>(false);
    const [ defaultVisibility, setDefaultVisibility ] = useState<boolean>(false);

    const handleImageLoadSuccess = () => {
        setDefaultVisibility(true);
    }

    const handleImgLoadError = () => {
        setImgLoadError(true);
    }

    return (
        <div className="mr-4">
            {imgLoadError === false ? (
               <LazyLoadImage
                    threshold={250}
                    effect="opacity"
                    alt={`National Flag for ${imgAlt}`}
                    height={64}
                    src={`https://flagsapi.com/${imgUrl}/flat/64.png`} // use normal <img> attributes as props
                    width={64}
                    placeholderSrc={imgLoading}
                    scrollPosition={scrollPosition}
                    onError={handleImgLoadError}
                    onLoad={handleImageLoadSuccess}
                    visibleByDefault={defaultVisibility}
                />
            ) : (
                <img width={64} height={64} src={imgNotFound} />
            )}
        </div>
    );
};

export default LazyImage;