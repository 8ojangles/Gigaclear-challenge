import { Country } from '../../types/country';
import ReactCountriesFlags from "react-countries-flags";
import { textVariant, textVariantType } from '../../utilities/tailwindStylingUtils';

/**
 * @interface FlagHeaderProps
 * @param {Country} country - Country object
 * @param {textVariantType} textSize - Text size variant
 * @param {string} [showDetail] - Optional detail to show
 */
interface FlagHeaderProps {
    country: Country;
    textSize?: textVariantType;
    showDetail?: string;
}

/**
 * @component FlagHeader
 * @arg {FlagHeaderProps} props
 * @return {JSX.Element} - Return FlagHeader component
 * @example <FlagHeader country={country} textSize="xl" showDetail="detail" />
 * @description FlagHeader component - Renders country flag and name with optional detail as subtitle
 */
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