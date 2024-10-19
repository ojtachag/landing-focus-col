import { FC } from 'react';
import './OurTeam.sass';
import MemberCard from '../../components/MemberCard/MemberCard.tsx';
const OurTeam: FC = () => {
    return (
        <div className='our-team__container'>
            <div className='our-team__row'>
                <MemberCard photo='images/member1.jpeg' name='Angie Lizeth Aguayo Hernandez' role='Fundadora y directora' description='Description' />
                <MemberCard photo='images/member2.png' name='Oscar Junior Tacha Gutierrez' role='Especialista TI' description='Ingeniero de sistemas ' />
            </div>
        </div>
    );
};
export default OurTeam;