import React from 'react';
import Header from '../Header/Header.tsx';
import './Layout.sass';
import Footer from '../Footer/Footer.tsx';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout__container">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;