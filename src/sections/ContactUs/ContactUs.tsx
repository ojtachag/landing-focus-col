import { FC } from 'react';
import './ContactUs.sass';
import ContactCard from '../../components/ContactCard/ContactCard.tsx';
const ContactUs: FC = () => {
    return (
        <div className='contact-us__container'>
            <div className='contact-us__title'>
                CONTACTANOS
            </div>
            <ContactCard/>
        </div>
    );
};
export default ContactUs;