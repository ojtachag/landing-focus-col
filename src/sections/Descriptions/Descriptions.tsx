import './Descriptions.sass';
import { FC } from 'react';
import Description from '../../components/Description/Description.tsx';

const Descriptions: FC = () => {
    return (
        <div className="descriptions__container">
            <Description title='Servicios' description='Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.' buttonText='Más información'/>
            {/*<Description title='Clientes' description='Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.' buttonText='Más información'/>*/}
        </div>
    );
};
export default Descriptions;