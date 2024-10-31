import { Country } from '../types/country';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyImage from './LazyImage';

type Props = {
    country: Country;
    onCardClick: Function;
    scrollPosition: any;
}

const Card: React.FC<Props> = (props: Props) => {

    const { country, onCardClick, scrollPosition } = props;
    const { code, name, continent } = country;
    return (
        <div
            className='border p-4 min-h-28 sm:min-h-32 rounded shadow cursor-pointer flex items-start bg-slate-50 hover:bg-white'
            onClick={() => onCardClick(country)}
        >   
            <LazyImage imgUrl={code} imgAlt={name} scrollPosition={scrollPosition} />
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{continent.name}</p>
            </div>
        </div>
    );
}

export default Card;