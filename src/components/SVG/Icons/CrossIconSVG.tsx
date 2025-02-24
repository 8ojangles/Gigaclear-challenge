import React from 'react';

interface CrossIconSVGProps {
    size?: number; // Tailwind sizing (rems)
    primaryColor?: string; // Tailwind color class
    primaryColorDark?: string; // Tailwind color class
}

const CrossIconSVG: React.FC<CrossIconSVGProps> = (props: CrossIconSVGProps) => {

    const {
        size = 6,
        primaryColor = "text-gray-500",
        primaryColorDark = "dark:text-gray-400",
    } = props;

    return (
        <svg className={`h-${size} w-${size} ${primaryColor} dark:${primaryColorDark}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export { CrossIconSVG };