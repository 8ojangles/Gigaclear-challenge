import { Country } from '../../types/country';
import { FlagHeader } from '../FlagHeader/FlagHeader';

interface CardProps {
    country: Country;
    onCardClick: Function;
}

const Card: React.FC<CardProps> = (props: CardProps) => {

    const { country, onCardClick } = props;
    return (
        <div
            className='border p-4 min-h-28 sm:min-h-32 rounded shadow cursor-pointer flex items-start bg-slate-200 hover:bg-white'
            onClick={() => onCardClick(country)}
        >   
            <FlagHeader country={country} showDetail={country.continent.name} />
        </div>
    );
}

export { Card };