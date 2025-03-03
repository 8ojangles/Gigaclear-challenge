import React from 'react';

type SearchIconSVGProps = {
    size?: number; // Tailwind sizing (rems)
    primaryColor?: string; // Tailwind color class
    primaryColorDark?: string; // Tailwind color class
}

const SearchIconSVG: React.FC<SearchIconSVGProps> = (props: SearchIconSVGProps) => {

    const {
        size = 4,
        primaryColor = "text-gray-500",
        primaryColorDark = "dark:text-gray-400",
    } = props;

    return (
        <svg className={`w-${size} h-${size} ${primaryColor} dark:${primaryColorDark}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    );
};

export { SearchIconSVG };