import React, {useState} from 'react';
import cls from "./studyProfileGallery.module.sass";
interface IUrl {
    url: string;
    id: number;
    type: string;
}
interface ImageItem {
    id: number;
    file: IUrl;
}

interface GalleryCarouselProps {
    images: ImageItem[];

}

export const StudyProfileGallery = ({ images }: GalleryCarouselProps) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };



    return (

        <div className={cls.carousel}>
            <button onClick={prevSlide} className={cls.arrow}>‹</button>

            <div className={cls.imageWrapper}>
                {images.map((img, index) => (
                    <img
                        key={img.id}
                        src={`${img.file?.url}`}
                        alt={`image-${img.id}`}
                        className={`${cls.image} ${index === current ? cls.active : ''}`}
                    />
                ))}
            </div>

            <button onClick={nextSlide} className={cls.arrow}>›</button>
        </div>
    );
}
