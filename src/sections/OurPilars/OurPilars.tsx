import { FC } from 'react';
import './OurPilars.sass';
import Pillar from '../../components/Pillar/Pillar.tsx';
const OurPilars:FC = () => {
    return (
        <div className='our-pillars__container'>
            <div className='our-pillars__container--row'>
                <Pillar title='Trabajo en equipo'
                        description='Comprometidos a trabajar en equipo para entregar un excelente servicio a nuestros clientes.'
                        backgroundColor='blue-bg'/>
                <Pillar title='Propuesta de valor'
                        description='Creamos e innovamos nuevas experiencias para que el aprendizaje sea rápido, dinámico y práctico.'
                        backgroundColor='white-bg'/>
                <Pillar title='Calidad de enseñanza'
                        description='Comprometidos en el crecimiento, desarrollo y aprendizaje continuo de los empresarios y emprendedores.'
                        backgroundColor='orange-bg'/>
            </div>
            <div className='our-pillars__container--row'>
                <Pillar title='Constancia y adaptabilidad'
                        description='Comprometidos a trabajar en equipo para entregar un excelente servicio a nuestros clientes.'
                        backgroundColor='white-bg'/>
                <Pillar title='Nos adaptamos'
                        description='Creamos e innovamos nuevas experiencias para que el aprendizaje sea rápido, dinámico y práctico.'
                        backgroundColor='lightblue-bg'/>
                <Pillar title='Somos Empáticos'
                        description='Comprometidos en el crecimiento, desarrollo y aprendizaje continuo de los empresarios y emprendedores.'
                        backgroundColor='white-bg'/>
            </div>
        </div>
    );
};
export default OurPilars;