import { Country } from "../../types/country";
import { mapCountryDetail } from "../../utilities/countryUtils";
import { InfoItem } from "../InfoItem/InfoItem";

/**
 * @interface InfoItemListProps
 * @param {Country} country - Country object
 */
interface InfoItemListProps {
    country: Country;
}

/**
 * InfoItemList.tsx
 * @description InfoItemList component - renders array of InfoItem components from data from Country Item passed as prop
 * @arg {InfoItemListProps} props
 * @return {JSX.Element} - Array of InfoItem components rendered from items prop, wrapped in an article element
 * @example <InfoItemList country={country} />
 */
const InfoItemList: React.FC<InfoItemListProps> = ({ country }) => {
    const countryDetails = mapCountryDetail(country);

    return (
        <>
            {Object.entries(countryDetails).map(([key, value]) => (
                <InfoItem key={key} label={key} text={value} />
            ))}
        </>
    );
};

export { InfoItemList };