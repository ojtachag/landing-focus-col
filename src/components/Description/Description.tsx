import './Description.sass';
import { FC } from 'react';

interface DescriptionProps {
    title: string;
    description: string;
    buttonText: string;
}

const Description: FC<DescriptionProps> = ({title, description, buttonText}: DescriptionProps) => {
    return (
        <div className='description__container'>
            <div className='description__title'>
                {title}
            </div>
            <div className='description__description'>
                {description}
            </div>
            <button className='description__button'>
                {buttonText}
            </button>
        </div>
    );
};
export default Description;