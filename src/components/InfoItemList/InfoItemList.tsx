import { Country } from "../../types/country";
import { mapCountryDetail } from "../../utilities/countryUtils";
import { InfoItem } from "../InfoItem/InfoItem";

interface InfoItemListProps {
    country: Country;
}

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