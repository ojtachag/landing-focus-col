import { FC } from 'react';
import './Pillar.sass';

interface PillarProps {
    title: string;
    description: string;
    backgroundColor: string;
}

const Pillar: FC<PillarProps> = ({title, description, backgroundColor}: PillarProps) => {
    return (
        <div className={`pillar__container ${backgroundColor}`}>
            <div className='pillar__title'>
                {title}
            </div>
            <div className='pillar__description'>
                {description}
            </div>
        </div>
    );
};
export default Pillar;