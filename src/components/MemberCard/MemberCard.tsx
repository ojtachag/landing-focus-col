import './MemberCard.sass';
import { FC } from 'react';

interface MemberCardProps {
    photo: string;
    name: string;
    role: string;
    description: string;
}

const MemberCard: FC<MemberCardProps> = ({photo, name, role, description}: MemberCardProps) => {
    return (
        <div className='member-card__container'>
            <div className='member-card__image--container'>
                <picture className='member-card__picture--container'>
                    <source src={photo} type="image/png"/>
                    <img
                        className="member-card__image"
                        src={photo}
                        alt="Acerca de nosotros"
                        loading="eager"
                        title="Acerca de nosotros"
                    />
                </picture>
            </div>
            <div className='member-card__title'>
                {name}
            </div>
            <div className='member-card__subtitle'>
                {role}
            </div>
            <div className='member-card__description'>
                {description}
            </div>
        </div>
    );
};
export default MemberCard;