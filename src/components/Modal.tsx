import { Country } from './../types/country';


interface InfoItemProps {
    label: string;
    text: string;
}

const InfoItem: React.FC<InfoItemProps> = (props: InfoItemProps) => {
    const { label, text } = props;
    return (
        <p className="text-lg mb-4">{`${label}: `}<span className="text-2xl font-bold text-grey-500">{text}</span></p>
    );
}

interface ModalProps {
    selectedCountry: Country | null;
    onClose: () => void;
}
  
const Modal: React.FC<ModalProps> = ({ selectedCountry, onClose }) => {
    if (!selectedCountry) return null;

    const { name, code, continent, capital, currency, languages, emoji } = selectedCountry;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="bg-white p-6 rounded shadow-lg z-20 w-1/2 max-w-lg mx-auto">
                    <div className="flex items-center justify-between mr-4">
                        <img width={64} height={64} src={`https://flagsapi.com/${code}/flat/64.png`} />
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    </div>
                    <InfoItem label="Continent" text={continent.name} />
                    <InfoItem label="Capital" text={capital} />
                    <InfoItem label="Currency" text={currency} />
                    <InfoItem label="Languages" text={languages.map((lang: any) => lang.name).join(', ')} />
                    <InfoItem label="Emoji" text={emoji} />
                    <button
                        onClick={onClose}
                        className="mt-4 bg-blue-500 text-white p-2 rounded"
                    >
                    Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
