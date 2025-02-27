import { Country } from '../../types/country';
import { Card } from '../Card/Card';

/**
 * @interface CardGridProps
 * @param {Country[]} results - Array of Country objects
 * @param {Function} onCardClick - onClick function for card interactivity
 * @description CardGridProps interface
 */
interface CardGridProps {
    results: Country[];
    onCardClick: Function;
}

/**
 * @component CardGrid
 * @description CardGrid component - Grid layout of Card components
 * @arg {CardGridProps} props
 * @returns {JSX.Element | null} - Return CardGrid component if results exist, a notification if results === 0, or null
 */
const CardGrid: React.FC<CardGridProps> = (props: CardGridProps) => {

    const { results, onCardClick } = props;

    if (!results) {
        return null;
    }

    return (
        <div className="container-constrained pt-56 sm:pt-44 px-4 pb-4">
            {results.length === 0 && (
                <div className="flex items-center justify-center h-64">
                    <p className="text-2xl font-bold text-gray-400 text-center">No results found. Try a different name.</p>
                </div>
            )}
            {results.length > 0 && (
                <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((country: Country) => (
                        <Card
                            key={country.code}
                            country={country}
                            onCardClick={onCardClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );

}

export { CardGrid };