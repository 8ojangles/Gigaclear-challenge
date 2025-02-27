import React from 'react';
import {
    btnColorVariants,
    BtnColorVariantType,
    BtnHTMLTypeVariantType
} from './ButtonConfig';
import { roundedVariants, RoundedVariantType } from '../../utilities/tailwindStylingUtils';

/**
 * @interface ButtonProps
 * @param {BtnColorVariantType} [colorTheme = 'primary'] - color variant for button
 * @param {RoundedVariantType} [borderRounded = 'none'] - border-radius variant for button
 * @param {string} [BtnHTMLTypeVariantType] - Optional HTML type attribute for button - default 'button'
 * @param {string} [label] - Optional Label text
 * @param {string} [screenReaderText] - Optional screen reder text for accessibility
 * @param {string} [title] - Optional title text
 * @param {React.ReactNode} [icon] - Optional icon graphic (preferable SVG) for button
 * @param {function} onClick - onClick function for button interactivity
 */
interface ButtonProps {
    colorTheme?: BtnColorVariantType;
    borderRounded?: RoundedVariantType;
    type?: BtnHTMLTypeVariantType;
    label?: string;
    screenReaderText?: string;
    title?: string;
    icon?: React.ReactNode;
    onClick: () => void;
}

/**
 * @component ButtonComponent
 * @description Button component - Button component with color and border-radius variants
 * @arg {ButtonProps} props
 * @return {JSX.Element} - Return Button component
 * @example <Button onClick={() => console.log('Button Clicked')} colorTheme="skeleton" borderRounded="sm" label="button" title="main button" screenReaderText="click to activate" icon={<MySVG />} />
 */
const ButtonComponent: React.FC<ButtonProps> = (props: ButtonProps) => {
    
    const {
        colorTheme = 'primary',
        borderRounded = 'none',
        type = 'button',
        screenReaderText = 'Button',
        title = 'Button',
        label,
        icon,
        onClick,
    } = props;

    return (
        <button
            type={type}
            title={title}
            onClick={onClick}
            className={`btn-base ${btnColorVariants[colorTheme]} ${roundedVariants[borderRounded]}`}
        >
            <span className="sr-only">{screenReaderText}</span>
            {label && <span>{label}</span>}
            {icon && icon}
        </button>
    );
};

export { ButtonComponent };