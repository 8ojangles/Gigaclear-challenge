import ReactCountriesFlags from "react-countries-flags";
import { Country } from './../../types/country';
import InfoItem from './../InfoItem/InfoItem';
import { ButtonComponent } from '../Button/Button';
import CrossIconSVG from './../SVG/Icons/CrossIconSVG';

interface ModalProps {
    selected: Country | null;
    onClose: () => void;
}
  
const Modal: React.FC<ModalProps> = (props: ModalProps) => {

    const { selected, onClose } = props;

    if (!selected) return null;

    const { name, code, continent, capital, currency, languages, emoji } = selected;

    return (
        <div className="fixed z-40 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <section className={`bg-gray-200 px-4 sm:px-6 pb-6 pt-12 rounded shadow z-20 w-11/12 sm:w-4/5 md:w-2/3 max-w-lg mx-auto relative`}>
                    <ButtonComponent
                        borderRounded='full'
                        title="Close Modal"
                        btnType='ghost'
                        onClick={onClose}
                        icon={<CrossIconSVG size={8}/>}
                        customClasses='absolute top-2 right-1 font-medium text-sm p3 me-2 mb-2'
                    />
                    <header className="flex items-center border-b border-gray-500 py-4 px-2 sm:px-4">
                        <ReactCountriesFlags isoCode={code} width={70} height={50}/>
                        <h2 className="text-2xl font-bold ms-4">{name}</h2>
                    </header>
                    <article className="bg-gray-100 pt-4 px-2 sm:px-4 rounded-b-sm">
                        <InfoItem label="Capital" text={capital} />
                        <InfoItem label="Currency" text={currency} />
                        <InfoItem label="Languages" text={languages.map((lang: any) => lang.name).join(', ')} />
                        <InfoItem label="Continent" text={continent.name} />
                        <InfoItem label="Emoji" text={emoji} last={true} />
                    </article>
                </section>
            </div>
        </div>
    );
};

export { Modal };
