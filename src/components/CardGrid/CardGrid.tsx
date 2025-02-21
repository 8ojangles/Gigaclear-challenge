import { Country } from '../../types/country';
import Card from '../Card/Card';

type Props = {
    results: Country[];
    onCardClick: Function;
}

const CardGrid: React.FC<Props> = (props: Props) => {

    const { results, onCardClick } = props;

    if (!results) {
        return null;
    }

    return (
        <div className="container mx-auto max-w-screen-xl pt-56 sm:pt-44 px-4 pb-4">
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