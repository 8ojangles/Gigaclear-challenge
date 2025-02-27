/**
 * @interface InfoItemProps
 * @param {string} InfoItemProps.label - label
 * @param {string} InfoItemProps.text - text
 */
interface InfoItemProps {
    label: string;
    text: string;
}

/**
 * InfoItem.tsx
 * @description InfoItem component - Single line item with label and text laid out left and right
 * @arg {InfoItemProps} props
 * @return {JSX.Element} - Return InfoItem component
 * @example <InfoItem label="label" text="text" />
 */
const InfoItem: React.FC<InfoItemProps> = (props: InfoItemProps) => {
    const { label, text } = props;
    
    return (
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-300 last-of-type:border-b-0">
            <p className="test-info-item-label text-md sm:text-lg">{`${label}: `}</p>
            <p className="test-info-item-value text-md sm:text-lg font-bold text-gray-500">{text}</p>
        </div>
    );
}

export { InfoItem};