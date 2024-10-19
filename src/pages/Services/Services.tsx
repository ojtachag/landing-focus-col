import { FC } from 'react';
import './Services.sass';
import ServicesDescription from '../../sections/ServicesDescription/ServicesDescription.tsx';

const Services: FC = () => {
    const itemsService: string[] = [
        'Comunicacion asertiva',
        'Gestion emocional',
        'Gimnasia activa (Rumbaterapias e hidroterapias)',
        'Manejo del estres',
        'Salud fisica',
        'Nutricion',
        'Educacion financiera',
        'Sentido de pertenencia',
    ];
    return (
        <div className='services__container'>
            <div className='services__title'>
                Nuestros servicios
            </div>
            <div className='services__description'>
                <ServicesDescription photo='images/service1.jpeg' title='Experiencia Bienestar Laboral'
                                     items={itemsService} price={300000} buttonText='Lo Quiero!'/>
                <ServicesDescription photo='images/service1.jpeg' title='Experiencia Bienestar Laboral'
                                     items={itemsService} price={300000} buttonText='Lo Quiero!'/>
            </div>

        </div>
    );
};
export default Services;