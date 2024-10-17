import './Home.sass';
import { FC } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel.tsx';
import Descriptions from '../../sections/Descriptions/Descriptions.tsx';
import AboutUsSection from '../../sections/AboutUsSection/AboutUsSection.tsx';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs.tsx';
import ContactUs from '../../sections/ContactUs/ContactUs.tsx';

const Home: FC = () => {
    return (
        <>
            <Carrousel/>
            <Descriptions/>
            <AboutUsSection/>
            <WhyChooseUs/>
            <ContactUs/>
        </>
    );
};
export default Home;