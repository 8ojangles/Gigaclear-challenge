import { InfoItem } from './../InfoItem/InfoItem';
import { InfoItemType } from './../../types/types';

/**
 * @interface InfoListProps
 * @param {array} items - Array of InfoItemType objects
 */
interface InfoListProps {
    items: InfoItemType[];
}

/**
 * InfoList.tsx
 * @description InfoList component - renders array of InfoItem components from array of items prop
 * @arg {InfoListProps} props
 * @return {JSX.Element} - Array of InfoItem components rendered from items prop, wrapped in an article element
 * @example <InfoList items={[{label: 'label', text: 'text'}]} />
 */
const InfoList: React.FC<InfoListProps> = (props: InfoListProps) => {

    const { items } = props;
    return (
        <article className="bg-gray-100 pt-4 px-2 sm:px-4 rounded-b-sm">
            {items.map((item: InfoItemType) => (
                <InfoItem key={item.label} label={item.label} text={item.text} />
            ))}
        </article>
    );
}

export { InfoList };