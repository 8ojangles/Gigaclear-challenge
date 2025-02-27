import React from 'react';
import { GigaclearLogoSVG } from '../SVG/images/GigaclearLogo';

/**
 * @interface HeaderProps
 * @param {string} title - Text for <H1> heading component
 * @param {React.ReactNode | React.ReactNode[]} children
 */
interface HeaderProps {
    title: string;
    children?: React.ReactNode | React.ReactNode[]
}

/**
 * Header.tsx
 * @description Header component - Renders full width fixed header including logo component, title and child elements/components. Contents are full width on mobile sizes and constrained and centered on larger screens
 * @arg {HeaderProps} props
 * @return {JSX.Element} - Return Header component
 * @example <Header title="No Child Example" />
 * @example <Header title="Title"><p>Child element</p></Header>
 */
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const {
        title,
        children
    } = props;

    return (
        <header className="bg-slate-200 border-b border-slate-400 py-4 shadow-md z-30 fixed top-0 w-full">
            <div className="container-constrained px-4 my-2 flex items-center">
                <div className="w-36 md:w-56 h-8 md:h-12">
                    <GigaclearLogoSVG />
                </div>
                <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h1>
            </div>
            {children && children}
        </header>
    );
};

export { Header };