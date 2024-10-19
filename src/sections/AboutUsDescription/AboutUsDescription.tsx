import { FC } from 'react';
import './AboutUsDescription.sass';
const AboutUsDescription: FC = () => {
    return (
        <div className='about-us-description__container'>
            <div className='about-us-description__text'>
                Somos una especializada en
                empresa
                capacitaciones que promueven el
                bienestar mental, físico y emocional,
                empoderando a las personas para
                desarrollar su máximo potencial,
                brindando así labores más estables,
                saludables y productivas.
                Brindamos talleres prácticos, cursos y
                programas especializados en los temas
                de: liderazgo, comunicación asertiva,
                gestión emocional, gimnasia activa
                (rumba terapias e hidroterapias),
                manejo del estrés, salud física,
                nutrición, educación financiera,
                sentido de pertenencia.
            </div>
            <div className='about-us-description__image--container'>
                <picture>
                    <source src="images/aboutUsImage.jpeg" type="image/jpeg"/>
                    <img
                        className="about-us-description__image"
                        src="images/aboutUsImage.jpeg"
                        alt="Acerca de nosotros"
                        loading="eager"
                        title="Acerca de nosotros"
                    />
                </picture>
            </div>
        </div>
    );
};
export default AboutUsDescription;