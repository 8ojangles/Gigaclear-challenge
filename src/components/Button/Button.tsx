import React from 'react';
import { btnColorVariants, btnRoundedVariants } from './ButtonConfig';


interface ButtonProps {
    btnType?: 'skeleton' | 'ghost' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'default';
    borderRounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    label?: string;
    screenReaderText?: string;
    title?: string;
    icon?: React.ReactNode;
    onClick: () => void;
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
    } = props;

    return (
        <button
            type="button"
            title={title}
            onClick={onClick}
            className={`${btnColorVariants[btnType]} ${btnRoundedVariants[borderRounded]} p-1 sm:p-2 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500`}
        >
            <span className="sr-only">{screenReaderText}</span>
            {label && <span>{label}</span>}
            {icon && icon}
        </button>
    );
};

export { ButtonComponent };