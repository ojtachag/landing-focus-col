import './AboutUsSection.sass';
import { FC } from 'react';
import backgroundImage from '../../assets/background.webp';
const AboutUsSection: FC = () => {
    return (
        <div className='about-us-section__image' style={{backgroundImage:`url(${backgroundImage})` }}>
            <div className='about-us-section__container'>
                <div className='about-us-section__title'>
                    SOBRE NOSOTROS
                </div>
                <div className='about-us-section__description'>
                    Somos una especializada en
                    empresa
                    capacitaciones que promueven el
                    bienestar mental, físico y emocional,
                    empoderando a las personas para
                    desarrollar su máximo potencial,
                    brindando así labores más estables,
                    saludables y productivas.
                </div>
                <div className='about-us-section__description'>
                    Brindamos talleres prácticos, cursos y
                    programas especializados en los temas
                    de: liderazgo, comunicación asertiva,
                    gestión emocional, gimnasia activa
                    (rumba terapias e hidroterapias),
                    manejo del estrés, salud física,
                    nutrición, educación financiera,
                    sentido de pertenencia.
                </div>
                <button className='about-us-section__button'>Más información</button>
            </div>
        </div>
    );
};
export default AboutUsSection;