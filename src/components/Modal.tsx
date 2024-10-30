import { useState } from 'react';
import { Country } from './../types/country';
import InfoItem from './InfoItem';

interface ModalProps {
    selectedCountry: Country | null;
    onClose: () => void;
}
  
const Modal: React.FC<ModalProps> = ({ selectedCountry, onClose }) => {
    if (!selectedCountry) return null;

    const { name, code, continent, capital, currency, languages, emoji } = selectedCountry;

    const [imageError, setImageError] = useState<boolean>(false);

    const onImageError = (): void => {
        setImageError(true);
    }

    return (
        <div className="fixed z-40 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className={`bg-white px-6 pb-6 pt-10 rounded shadow z-20 w-1/2 max-w-lg mx-auto relative`}>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Close
                    </button>
                    <header className="flex items-end border-b border-gray-500">
                        {!imageError ? (
                            <img onError={onImageError} className="mr-4" width={64} height={64} src={`https://flagsapi.com/${code}/flat/64.png`} alt={`Flag for ${name}`}/>
                        ) : null}
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    </header>
                    <article className="bg-gray-100 pt-4 px-4">
                        <InfoItem label="Continent" text={continent.name} />
                        <InfoItem label="Capital" text={capital} />
                        <InfoItem label="Currency" text={currency} />
                        <InfoItem label="Languages" text={languages.map((lang: any) => lang.name).join(', ')} />
                        <InfoItem label="Emoji" text={emoji} last={true}/>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Modal;
