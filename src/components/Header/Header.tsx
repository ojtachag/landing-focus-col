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
        navigate('/cv');
    };
    const outServicesEventHandler = ()=>{
        navigate('/services');
    };
    return (
        <div className="header__container--light">
            <div className="header__logotype">
                <picture>
                    <source src="logo.png" type="image/png"/>
                    <img
                        className="header__logotype"
                        src="logo.png"
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
                <div className="menu__item" onClick={cvEventHandler}>CV</div>
            </div>
        </div>
    );
};
export default Header;