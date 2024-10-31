interface InfoItemProps {
    label: string;
    text: string;
    last?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = (props: InfoItemProps) => {
    const { label, text, last } = props;
    return (
        <div className={`flex items-center justify-between pb-2 mb-2${!last ? ' border-b border-gray-300' : ''}`}>
            <p className="test-info-item-label text-md sm:text-lg">{`${label}: `}</p><p className="test-info-item-value text-md sm:text-lg font-bold text-gray-500">{text}</p>
        </div>
    );
}

export default InfoItem;