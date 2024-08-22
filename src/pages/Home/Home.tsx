import './Home.sass';
import { FC } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel.tsx';
import ContactCards from '../../sections/ContactCards/ContactCards.tsx';

const Home: FC = () => {
    return (
        <>
            <Carrousel/>
            <ContactCards/>
        </>
    );
};
export default Home;