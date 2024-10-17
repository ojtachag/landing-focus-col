import { FC } from 'react';
import './ContactCard.sass';

const ContactCard: FC = () => {
    return (
        <div className="contact-card__container">
            <div className="contact-card__qr">
                <picture>
                    <source src="images/whatsapp_qr.svg" type="image/svg"/>
                    <img
                        className="contact-card__image"
                        src="images/whatsapp_qr.svg"
                        alt="whatsapp_qr1"
                        loading="eager"
                        title="whatsapp_qr1"
                    />
                </picture>
            </div>
            <div className="information__container">
                <div className="information__title">
                    Angie Lizeth Aguayo Hernandez
                </div>
                <div className="link__container">
                    <a className='link' href="tel:+573186906817">
                        <picture>
                            <source src="images/calllogo.png" type="image/png"/>
                            <img
                                className="contact-card__logo"
                                src="images/calllogo.png"
                                alt="whatsapp_logo"
                                loading="eager"
                                title="whatsapp_logo"
                            />
                        </picture>
                        +57 318 690 6817
                    </a>
                </div>
                <div className="link__container">
                    <a className='link'
                       href="https://api.whatsapp.com/send?phone=+573186906817&text=Hola+Quiero+obtener+mas+informaci%C3%B3n+%F0%9F%8E%AF">
                        <picture>
                            <source src="images/wpplogo.png" type="image/png"/>
                            <img
                                className="contact-card__logo"
                                src="images/wpplogo.png"
                                alt="whatsapp_logo"
                                loading="eager"
                                title="whatsapp_logo"
                            />
                        </picture>
                        Whatsapp
                    </a>
                </div>
                <div className="link__container">
                    <a className='link' href="mailto:focusbienestar@gmail.com">
                        <picture>
                            <source src="images/emaillogo.png" type="image/png"/>
                            <img
                                className="contact-card__logo"
                                src="images/emaillogo.png"
                                alt="whatsapp_logo"
                                loading="eager"
                                title="whatsapp_logo"
                            />
                        </picture>
                        focusbienestar@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;