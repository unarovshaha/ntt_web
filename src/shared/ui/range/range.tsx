import React, { useState, useEffect } from 'react';
import cls from './range.module.sass';

interface PriceFilterCardProps {
    minPrice?: number;
    maxPrice?: number;
    onPriceChange?: (range: [number, number]) => void;
}

export const Range: React.FC<PriceFilterCardProps> = ({
                                                          minPrice = 0,
                                                          maxPrice = 10000000,
                                                          onPriceChange,
                                                      }) => {
    const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);


    useEffect(() => {
        setPriceRange([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(event.target.value);
        const newMin = Math.min(newMinValue, priceRange[1]);
        const newRange: [number, number] = [newMin, priceRange[1]];

        setPriceRange(newRange);
        if (onPriceChange) {
            onPriceChange(newRange);
        }
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(event.target.value);
        const newMax = Math.max(newMaxValue, priceRange[0]);
        const newRange: [number, number] = [priceRange[0], newMax];

        setPriceRange(newRange);
        if (onPriceChange) {
            onPriceChange(newRange);
        }
    };

    const handleClearFilter = () => {
        setPriceRange([minPrice, maxPrice]);
        if (onPriceChange) {
            onPriceChange([minPrice, maxPrice]);
        }
    };

    return (
        <div className={cls.card}>
            <div className={cls.header}>
                <h3 className={cls.title}>Filter</h3>
                <button className={cls.clearButton} onClick={handleClearFilter}>
                    O'chirish
                </button>
            </div>
            <div className={cls.content}>
                <p className={cls.label}>Ta'lim narxi</p>
                <div className={cls.rangeValues}>
                    <span>{priceRange[0].toLocaleString()} UZS</span>
                    <span>{priceRange[1].toLocaleString()} UZS</span>
                </div>
                <div className={cls.rangeSlider}>
                    <input
                        type="range"
                        name="min"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[0]}
                        onChange={handleMinPriceChange}
                        className={cls.sliders}
                    />
                    <input
                        type="range"
                        name="max"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={handleMaxPriceChange}
                        className={cls.slider}
                    />
                </div>
            </div>
        </div>
    );
};