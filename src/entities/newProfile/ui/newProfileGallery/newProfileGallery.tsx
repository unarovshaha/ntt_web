import React, { useState } from 'react';
import cls from './newProfileGallery.module.sass';

interface ImageItem {
    id: number;
    file: string;
}

interface GalleryCarouselProps {
    images: ImageItem[];
    apiUrl: string;
}

export const NewProfileGallery = ({ images, apiUrl }: GalleryCarouselProps) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 2) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 2 + images.length) % images.length);
    };

    // 2 ta rasm olish
    const visibleImages = [
        images[current],
        images[(current + 1) % images.length] // keyingisi bo'lmasa 0-ga o'tadi
    ];

    return (
        <div className={cls.carousel}>
            <button onClick={prevSlide} className={cls.arrow}>‹</button>

            <div className={cls.imageWrapper}>
                {visibleImages.map((img) =>
                    img ? (
                        <img
                            key={img.id}
                            src={`${apiUrl}${img.file}`}
                            alt={`image-${img.id}`}
                            className={cls.image}
                        />
                    ) : null
                )}
            </div>

            <button onClick={nextSlide} className={cls.arrow}>›</button>
        </div>
    );
};
