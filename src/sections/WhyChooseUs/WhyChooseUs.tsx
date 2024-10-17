import './WhyChooseUs.sass';
import { FC } from 'react';

const WhyChooseUs: FC = () => {
    return (
        <div className='why-choose-us__container'>
            <div className='why-choose-us__title'>
                ¿Por qué elegirnos?
            </div>
            <div className='bars__container'>
                <div className='bar__container orange first-margin'>
                    <div className='bar__top'/>
                    <div className='bar__information--container orange'>
                        <picture>
                            <source src="images/logo.svg" type="image/svg"/>
                            <img
                                className="bar__information--image"
                                src="images/logo.svg"
                                alt="logo"
                                loading="eager"
                                title="logo"
                            />
                        </picture>
                        <div className='bar__information--label'>
                            Metodologías
                            activas e
                            innovadoras
                        </div>
                    </div>
                </div>
                <div className='bar__container green second-margin'>
                    <div className='bar__top'/>
                    <div className='bar__information--container green'>
                        <picture>
                            <source src="images/logo.svg" type="image/svg"/>
                            <img
                                className="bar__information--image"
                                src="images/logo.svg"
                                alt="logo"
                                loading="eager"
                                title="logo"
                            />
                        </picture>
                        <div className='bar__information--label'>
                            Trabajamos con
                            transparencia,
                            responsabilidad,
                            amor y
                            pensando en su
                            empresa.
                        </div>
                    </div>
                </div>
                <div className='bar__container blue third-margin'>
                    <div className='bar__top'/>
                    <div className='bar__information--container blue'>
                        <picture>
                            <source src="images/logo.svg" type="image/svg"/>
                            <img
                                className="bar__information--image"
                                src="images/logo.svg"
                                alt="logo"
                                loading="eager"
                                title="logo"
                            />
                        </picture>
                        <div className='bar__information--label'>
                            Contamos con
                            un staff de
                            profesionales
                            calificados.
                        </div>
                    </div>
                </div>
                <div className='bar__container magenta'>
                    <div className='bar__top'/>
                    <div className='bar__information--container magenta'>
                        <picture>
                            <source src="images/logo.svg" type="image/svg"/>
                            <img
                                className="bar__information--image"
                                src="images/logo.svg"
                                alt="logo"
                                loading="eager"
                                title="logo"
                            />
                        </picture>
                        <div className='bar__information--label text-white'>
                            Su empresa,
                            emprendimiento,
                            negocio o
                            proyecto son
                            importantes para
                            nosotros.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WhyChooseUs;