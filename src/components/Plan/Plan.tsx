import './Plan.sass';
import { FC } from 'react';

interface PlanProps {
    name: string;
    photo: string;
    description: string;
    price: number;
    backgroundClass: string;
}

const Plan: FC<PlanProps> = ({ name, price, photo, description, backgroundClass }: PlanProps) => {
    const currencyFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
    }).format(price);
    return (
        <div className='plan__container'>
            <picture>
                <source src={photo} type='image/png'/>
                <img
                    className="plan__image"
                    src={photo}
                    alt="planType"
                    loading="eager"
                    title="planType"
                />
            </picture>
            <div className={`plan__title ${backgroundClass}`}>
                {name}
            </div>
            <div className='plan__description'>
                {description}
            </div>
            <div className='plan__price'>
                {currencyFormat} COP
            </div>
            <button className='plan__button'>
                Elegir
            </button>
        </div>
    );
};
export default Plan;