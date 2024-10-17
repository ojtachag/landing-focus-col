import { FC } from 'react';
import './Header.sass';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
    const navigate = useNavigate();
    const homeClickEventHandler = ()=>{
        navigate('/');
    };
    const aboutUsEventHandler = ()=>{
        navigate('/about-us');
    };
    const cvEventHandler = ()=>{
        window.open('/BROCHURE.pdf', '_blank');
    };
    const outServicesEventHandler = ()=>{
        navigate('/services');
    };
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
            <div className="menu__container">
                <div className="menu__item" onClick={homeClickEventHandler}>Inicio</div>
                <div className="menu__item" onClick={outServicesEventHandler}>Nuestros servicios</div>
                <div className="menu__item" onClick={aboutUsEventHandler} onMouseEnter={()=>console.log('mouse in')} onMouseLeave={()=>console.log('mouse out')}>Acerca de nosotros</div>
                <div className="menu__item" onClick={cvEventHandler}>Brochure</div>
            </div>
        </div>
    );
};
export default Header;