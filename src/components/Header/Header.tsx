import { FC, useEffect, useMemo, useRef, useState } from 'react';
import './Header.sass';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: FC = () => {
    const navigate = useNavigate();
    const [activeTabName, setActiveTabName] = useState<any>({ innerText:'Inicio' });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const homeClickEventHandler = ()=>{
        navigate('/');
        setIsMenuOpen(false);
    };
    const toggleMenu = () => {
        console.log('click');
        setIsMenuOpen(!isMenuOpen);
    };
    const aboutUsEventHandler = ()=>{
        navigate('/about-us');
        setIsMenuOpen(false);
    };
    const cvEventHandler = ()=>{
        window.open('/BROCHURE.pdf', '_blank');
        setIsMenuOpen(false);
    };
    const ourServicesEventHandler = ()=>{
        navigate('/services');
        setIsMenuOpen(false);
    };
    const ourPlansEventHandler = ()=>{
        navigate('/plans');
        setIsMenuOpen(false);
    };
    const routes = useMemo(()=> [
        {
            path: '/',
            innerText: 'Inicio'
        },
        {
            path: '/services',
            innerText: 'Nuestros servicios'
        },
        {
            path: '/about-us',
            innerText: 'Acerca de nosotros'
        },
        {
            path: '/plans',
            innerText: 'Planes'
        }
    ], []);
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
        const activeTabName = routes.find((route) => {
            return route.path === location.pathname;
        });
        console.log(activeTabName);
        setActiveTabName(activeTabName);
    }, [location.pathname, routes]);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);
    return (
        <div className="header__container--light">
            <div className="header__logotype">
                <picture>
                    <source src="images/logo.svg" type="image/svg"/>
                    <img
                        className="header__logotype"
                        src="images/logo.svg"
                        alt="logo"
                        loading="eager"
                        title="logo"
                    />
                </picture>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <div  ref={menuRef} className={`menu__container ${isMenuOpen ? 'menu__opened' : ''}`}>
                <div className={`menu__item first ${activeTabName.innerText === 'Inicio' ? 'active' : ''}`}
                     onClick={homeClickEventHandler}>Inicio
                </div>
                <div className={`menu__item ${activeTabName.innerText === 'Nuestros servicios' ? 'active' : ''}`}
                     onClick={ourServicesEventHandler}>Nuestros servicios
                </div>
                <div className={`menu__item ${activeTabName.innerText === 'Planes' ? 'active' : ''}`}
                     onClick={ourPlansEventHandler}>Planes
                </div>
                <div className={`menu__item ${activeTabName.innerText === 'Acerca de nosotros' ? 'active' : ''}`}
                     onClick={aboutUsEventHandler}>Acerca de nosotros
                </div>
                <div className={`menu__item last ${activeTabName.innerText === 'Grupos de usuarios' ? 'active' : ''}`}
                     onClick={cvEventHandler}>Brochure
                </div>
            </div>
        </div>
    );
};
export default Header;