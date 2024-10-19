import { FC } from 'react';
import './ServicesDescription.sass';
interface IServicesDescriptionProps {
    photo: string;
    title: string;
    items: string[];
    price: number;
    buttonText: string;
}
const ServicesDescription: FC<IServicesDescriptionProps> = ({ photo, title,items,price,buttonText }:IServicesDescriptionProps) => {
    const currencyFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
    }).format(price);
    return (
        <div className='services-description__container'>
            <div className='services-description__image--container'>
                <picture className='services-description__picture--container'>
                    <source src={photo} type="image/png"/>
                    <img
                        className="services-description__image"
                        src={photo}
                        alt="Acerca de nosotros"
                        loading="eager"
                        title="Acerca de nosotros"
                    />
                </picture>
            </div>
            <div className='services-description__description--container'>
                <div className='services-description__description--title'>
                    {title}
                </div>
                <div className='services-description__description--items
                '>
                    <ul>
                        {items.map((value, index)=> (<li key={index}>{value}</li>))}
                    </ul>
                </div>
                <div className='services-description__description--price'>
                    {`Precio: ${currencyFormat} COP`}
                </div>
                <button className='services-description__description--button'>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
export default ServicesDescription;