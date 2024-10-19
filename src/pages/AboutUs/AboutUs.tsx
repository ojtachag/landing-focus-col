import './AboutUs.sass';
import { FC } from 'react';
import AboutUsDescription from '../../sections/AboutUsDescription/AboutUsDescription.tsx';
import OurTeam from '../../sections/OurTeam/OurTeam.tsx';
import OurPilars from '../../sections/OurPilars/OurPilars.tsx';

const AboutUs: FC = () => {
    return (
        <div className='about-us__container'>
            <div className='about-us__title'>
                Acerca de nosotros
            </div>
            <div className='about-us__description--container'>
                <AboutUsDescription/>
            </div>
            <div className='about-us__titles'>
                Nuestro Equipo
            </div>
            <div className='about-us__description--container'>
                <OurTeam/>
            </div>
            <div className='about-us__titles bg-orange'>
                Propuesta de valor
            </div>
            <div className='about-us__description--container bg-orange'>
                <div className='value-proposition__container'>
                    En optimizamos el crecimiento FOCUS
                    personal, la pasión y el bienestar
                    integral de sus colaboradores, pues
                    sabemos que estos son los motores
                    que impulsan al ser humano a realizar
                    cualquier tarea con amor.
                    Además, Contamos con
                    profesionales especializados con
                    experiencia, buena metodología de
                    enseñanza y con conocimiento de la
                    realidad actual de las empresas.
                </div>
            </div>
            <div className='about-us__titles bg-lightblue'>
                Nuestros pilares
            </div>
            <div className='about-us__description--container'>
                <OurPilars/>
            </div>
        </div>
    );
};
export default AboutUs;