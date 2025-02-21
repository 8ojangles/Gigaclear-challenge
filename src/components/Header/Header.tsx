import React from 'react';
import GigaclearLogo from '../SVG/images/GigaclearLogo';

type HeaderProps = {
    title: string;
    children?: React.ReactNode | React.ReactNode[]
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const {
        title,
        children
    } = props;

    return (
        <header className="bg-slate-200 border-b border-slate-400 py-4 shadow-md z-30 fixed top-0 w-full">
            <div className="container mx-auto max-w-screen-xl px-4 my-2 flex items-center">
                <div className="w-36 md:w-56 h-8 md:h-12">
                    <GigaclearLogo />
                </div>
                <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h1>
            </div>
            {children && children}
        </header>
    );
};

export { Header };