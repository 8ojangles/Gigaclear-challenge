import { Country } from './../../types/country';
import { ButtonComponent } from '../Button/Button';
import { CrossIconSVG } from './../SVG/Icons/CrossIconSVG';
import { InfoItemList } from "../InfoItemList/InfoItemList";
import { FlagHeader } from "../FlagHeader/FlagHeader";

interface ModalProps {
    selected: Country | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {

    const { selected, onClose } = props;

    if (!selected) return null;

    return (
        <div className="fixed z-40 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <section className="bg-gray-200 px-4 sm:px-6 pb-6 pt-12 rounded shadow z-20 w-11/12 sm:w-4/5 md:w-2/3 max-w-lg mx-auto relative">
                    <div className="absolute top-2 right-1 font-medium text-sm p3 me-2 mb-2">
                        <ButtonComponent
                            borderRounded='full'
                            title="Close Modal"
                            colorTheme='ghost'
                            onClick={onClose}
                            icon={<CrossIconSVG size={8}/>}
                        />
                    </div>
                    <header className="flex items-center border-b border-gray-500 py-4 px-2 sm:px-4">
                        <FlagHeader country={selected} textSize={"xl2"} />
                    </header>
                    <article className="bg-gray-100 pt-4 px-2 sm:px-4 rounded-b-sm">
                        <InfoItemList country={selected} />
                    </article>
                </section>
            </div>
        </div>
    );
};

export { Modal };
