import { FC } from 'react';
import './Plans.sass'
import Plan from '../../components/Plan/Plan.tsx';
const Plans: FC = () => {
    return (
        <div className='plans__container'>
            <Plan name='Oro'
                  description='8 talleres (temas de su elección) Dos profesionales especializados'
                  price={2100000}
                  photo='images/gold.png'
                  backgroundClass='gold'
            />
            <Plan name='Plata'
                  description='5 talleres (temas de su elección) Dos profesionales especializados'
                  price={1300000}
                  photo='images/silver.png'
                  backgroundClass='silver'
            />
            <Plan name='Bronce'
                  description='3 talleres (temas de su elección) Dos profesionales especializados'
                  price={700000}
                  photo='images/bronze.png'
                  backgroundClass='bronze'
            />

        </div>
    );

};
export default Plans;