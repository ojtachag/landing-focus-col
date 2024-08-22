import { FC } from 'react';
import ContactCard from '../../components/ContactCard/ContactCard.tsx';
import './ContactCards.sass';
const ContactCards: FC = () => {
    return (
        <div className="contact-cards__container">
            <ContactCard/>
            <ContactCard/>
        </div>
    );
};
export default ContactCards;