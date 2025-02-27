import { Country } from '../../types/country';
import { FlagHeader } from '../FlagHeader/FlagHeader';

/**
 * @interface CardProps
 * @param {Country} country - country object
 * @param {Function} onCardClick - onClick function for card interactivity
 */
interface CardProps {
    country: Country;
    onCardClick: Function;
}

/**
 * @component Card
 * @description Card component - Single country card with flag and continent
 * @arg {CardProps} props
 * @return {JSX.Element} - Return Card component
 * @example <Card country={country} onCardClick={() => console.log('Card Clicked')} /> 
 */
const Card: React.FC<CardProps> = (props: CardProps) => {

    const { country, onCardClick } = props;
    return (
        <div
            className='border p-4 min-h-28 sm:min-h-32 rounded shadow-md cursor-pointer flex items-start bg-slate-200 hover:bg-white'
            onClick={() => onCardClick(country)}
        >   
            <FlagHeader country={country} showDetail={country.continent.name} />
        </div>
    );
}

export { Card };