import { Country } from './../types/country';
// @ts-ignore
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgLoading from '../images/imageLoading64.png';
import { useState } from 'react';
import imgNotFound from '../images/imageNotFound64.png';

type LazyImageComponentProps = {
    imgUrl: string;
    imgAlt: string;
    scrollPosition: any;
}

const LazyImageWrapper: React.FC<LazyImageComponentProps> = (props: LazyImageComponentProps) => {
    
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

type Props = {
    countries: Country[];
    onCardClick: Function;
    scrollPosition: any;
}

const Gallery: React.FC<Props> = (props: Props) => {

    const { countries, onCardClick, scrollPosition } = props;

    if (!countries || countries.length === 0) {
        return null;
    }

    return (
        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {countries.map((country: Country) => (
                <div
                    key={country.code}
                    className='border p-4 min-h-32 rounded shadow cursor-pointer flex items-start bg-slate-50 hover:bg-white'
                    onClick={() => onCardClick(country)}
                >   
                    <LazyImageWrapper imgUrl={country.code} imgAlt={country.name} scrollPosition={scrollPosition} />
                    <div>
                        <h2 className="text-xl font-bold">{country.name}</h2>
                        <p>{country.continent.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default trackWindowScroll(Gallery);