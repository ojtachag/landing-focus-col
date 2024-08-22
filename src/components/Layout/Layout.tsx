import React from 'react';
import Header from '../Header/Header.tsx';
import './Layout.sass';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout__container">
            <Header/>
            {children}
        </div>
    );
};

export default Layout;