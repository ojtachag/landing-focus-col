import './Footer.sass';
import { FC } from 'react';
import ContactUs from '../../sections/ContactUs/ContactUs.tsx';

const Footer: FC = () => {
    const date = new Date();
    const currentYear = date.getFullYear()
    return (<>
            <ContactUs/>
            <div className='footer__container'>
                <div className='footer-contact__container'>
                    <div className='footer-contact__title'>
                        Focus S.A.S.
                    </div>
                    <div className='footer-contact__info'>
                        Direccion de la Oficina
                    </div>
                    <div className='footer-contact__info'>
                        Neiva, Colombia
                    </div>
                    <div className='footer-contact__info'>
                        Mail: focusbienestar@gmail.com
                    </div>
                    <div className='footer-contact__info'>
                        Celular: +57 318 690 3817
                    </div>
                </div>
                <div className='footer-menu__container'>
                    <div className='footer-menu__title'>
                        MENU
                    </div>
                    <div className='footer-menu__info'>
                        Inicio
                    </div>
                    <div className='footer-menu__info'>
                        Nuestros Servicios
                    </div>
                    <div className='footer-menu__info'>
                        Acerca de nosotros
                    </div>
                    <div className='footer-menu__info'>
                        Brochure
                    </div>
                </div>
                <div className='footer-etc__container'>
                    <div className='footer-etc__title'>
                        REDES
                    </div>
                    <div className='footer-etc__social-media'>
                        <div className='social-media__container'>
                            <picture>
                                <source src="images/instagramlogo.png" type="image/png"/>
                                <img
                                    className="footer__social-media"
                                    src="images/instagramlogo.png"
                                    alt="logo"
                                    loading="eager"
                                    title="logo"
                                />
                            </picture>
                        </div>
                        <div className='social-media__container'>
                            <picture>
                                <source src="images/facebooklogo.png" type="image/png"/>
                                <img
                                    className="footer__social-media"
                                    src="images/facebooklogo.png"
                                    alt="logo"
                                    loading="eager"
                                    title="logo"
                                />
                            </picture>
                        </div>
                    </div>
                    © {currentYear} Creado por Oscar Tacha con React
                </div>
            </div>
        </>

    );
};
export default Footer;