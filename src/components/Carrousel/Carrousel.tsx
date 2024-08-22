import { FC, useState } from 'react';
import './Carrousel.sass';

const Carrousel: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
    const images = [
        '1.png',
        '2.png',
        '3.png',
    ];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };
    return (
        <div className="carrousel__container">
            <div
                className="slides__container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide__container">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="slide__image"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={goToPreviousSlide}
                className="button__left"
            >
                ❮
            </button>
            <button
                onClick={goToNextSlide}
                className="button__right"
            >
                ❯
            </button>
        </div>
    );
};
export default Carrousel;