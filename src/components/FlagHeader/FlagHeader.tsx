import { Country } from '../../types/country';
import ReactCountriesFlags from "react-countries-flags";

const textVariant = {
    xl: 'text-xl',
    xxl: 'text-2xl',
}

interface FlagHeaderProps {
    country: Country;
    textSize?: 'xl' | 'xxl';
    showDetail?: string;
}

const FlagHeader: React.FC<FlagHeaderProps> = (props: FlagHeaderProps) => {
    const { country, textSize = 'xl', showDetail } = props;
    const { code, name } = country;

    return (
        <>
            <ReactCountriesFlags isoCode={code} width={80} height={55}/>
            <div className='ms-4'>
                <h2 className={`${textVariant[textSize]} font-bold`}>{name}</h2>
                {showDetail && <p>{showDetail}</p>}
            </div>
        </>
    );
}

export { FlagHeader };