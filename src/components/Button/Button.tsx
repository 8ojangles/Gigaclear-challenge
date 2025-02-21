import React from 'react';

const skeletonClasses = 'bg-white border border-gray-400  text-gray-400 hover:text-gray-500 hover:bg-gray-100';

const ghostClasses = 'bg-transparent text-gray-400 hover:text-gray-500 hover:bg-gray-100';

function getButtonTypeClasses(btnType: string): string {
    switch(btnType) {
        case 'skeleton':
            return skeletonClasses;
        case 'ghost':
            return ghostClasses;
        case 'primary':
            return 'bg-indigo-600 text-white hover:bg-indigo-700';
        case 'secondary':
            return 'bg-gray-600 text-white hover:bg-gray-700';
        case 'tertiary':
            return 'bg-white text-gray-600 hover:text-gray-700';
        case 'danger':
            return 'bg-red-600 text-white hover:bg-red-700';
        default:
            return 'bg-indigo-600 text-white hover:bg-indigo-700';
    }
}

type ButtonProps = {
    btnType?: 'skeleton' | 'ghost' | 'primary' | 'secondary' | 'tertiary' | 'danger';
    borderRounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    label?: string;
    screenReaderText?: string;
    title?: string;
    icon?: React.ReactNode;
    onClick: () => void;
    customClasses?: string;
}

const ButtonComponent: React.FC<ButtonProps> = (props: ButtonProps) => {
    
    const {
        btnType = 'primary',
        screenReaderText = 'Button',
        title = 'Button',
        label,
        borderRounded = 'none',
        icon,
        onClick,
        customClasses = '',
    } = props;

    const buttonClasses = `${getButtonTypeClasses(btnType)} rounded-${borderRounded} ${customClasses}`;

    return (
        <button
            type="button"
            title={title}
            onClick={onClick}
            className={`${buttonClasses} p-1 sm:p-2 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500`}
        >
            <span className="sr-only">{screenReaderText}</span>
            {label && <span>{label}</span>}
            {icon && icon}
        </button>
    );
};

export { ButtonComponent };