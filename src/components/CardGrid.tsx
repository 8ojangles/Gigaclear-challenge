import { Country } from '../types/country';
// @ts-ignore
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Card from './Card';

type Props = {
    countries: Country[];
    onCardClick: Function;
    scrollPosition: any;
}

const CardGrid: React.FC<Props> = (props: Props) => {

    const { countries, onCardClick, scrollPosition } = props;

    if (!countries) {
        return null;
    }

    return (
        countries.length === 0 ? (
            <div className="flex items-center justify-center h-64">
                <p className="text-2xl font-bold text-gray-400 text-center">No countries found. Try a different name.</p>
            </div>
        ) : (
            <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {countries.map((country: Country) => (
                    <Card
                        key={country.code}
                        country={country}
                        onCardClick={onCardClick} scrollPosition={scrollPosition}
                    />
                ))}
            </div>
        )
    );

}

export default trackWindowScroll(CardGrid);