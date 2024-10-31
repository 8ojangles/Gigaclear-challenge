import { useState } from 'react';
import { Country } from './../types/country';
import InfoItem from './InfoItem';
import MapComponent from './MapComponent';
import ButtonComponent from './ButtonComponent';
import CrossIconSVG from './CrossIconSVG';

interface ModalProps {
    selectedCountry: Country | null;
    onClose: () => void;
}
  
const Modal: React.FC<ModalProps> = ({ selectedCountry, onClose }) => {
    if (!selectedCountry) return null;

    const { name, code, continent, capital, currency, languages, emoji } = selectedCountry;

    const [imageError, setImageError] = useState<boolean>(false);
    const [mapError, setMapError] = useState<boolean>(false);

    const onMapError = (): void => {
        setMapError(true);
    }

    const onImageError = (): void => {
        setImageError(true);
    }

    return (
        <div className="fixed z-40 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className={`bg-gray-200 px-4 sm:px-6 pb-6 pt-12 rounded shadow z-20 w-11/12 sm:w-4/5 md:w-2/3 max-w-lg mx-auto relative`}>
                    <ButtonComponent
                        borderRounded='full'
                        title="Close Modal"
                        btnType='ghost'
                        onClick={onClose}
                        icon={<CrossIconSVG size={8}/>}
                        customClasses='absolute top-2 right-1 font-medium text-sm p3 me-2 mb-2'
                    />
                    <header className="flex items-center border-b border-gray-500 py-4 px-2 sm:px-4">
                        {!imageError ? (
                            <img onError={onImageError} className="mr-4" width={64} height={64} src={`https://flagsapi.com/${code}/flat/64.png`} alt={`Flag for ${name}`}/>
                        ) : null}
                        <h2 className="text-2xl font-bold">{name}</h2>
                    </header>
                    <article className="bg-gray-100 pt-4 px-2 sm:px-4 rounded-b-sm">
                        <InfoItem label="Capital" text={capital} />
                        <InfoItem label="Currency" text={currency} />
                        <InfoItem label="Languages" text={languages.map((lang: any) => lang.name).join(', ')} />
                        <InfoItem label="Continent" text={continent.name} />
                        <InfoItem label="Emoji" text={emoji} last={true}/>
                    </article>
                    <div className="mt-4">
                        <MapComponent mapError={mapError} setMapError={onMapError} countryName={name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
