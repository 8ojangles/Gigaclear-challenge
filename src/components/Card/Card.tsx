import { Country } from '../../types/country';
import ReactCountriesFlags from "react-countries-flags";

type CardProps = {
    country: Country;
    onCardClick: Function;
}

const Card: React.FC<CardProps> = (props: CardProps) => {

    const { country, onCardClick } = props;
    const { code, name, continent } = country;
    return (
        <div
            className='border p-4 min-h-28 sm:min-h-32 rounded shadow cursor-pointer flex items-start bg-slate-200 hover:bg-white'
            onClick={() => onCardClick(country)}
        >   
            <ReactCountriesFlags isoCode={code} width={70} height={50}/>
            <div className='ms-4'>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{continent.name}</p>
            </div>
        </div>
    );
}

export default Card;