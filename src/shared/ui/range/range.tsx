import React, { useState, useEffect } from 'react';
import cls from './range.module.sass';

interface PriceFilterCardProps {
    minPrice?: number;
    maxPrice?: number;
    onPriceChange?: (range: [number, number]) => void;
}

export const Range: React.FC<PriceFilterCardProps> = ({
                                                          minPrice = 8000000, // Default value
                                                          maxPrice = 10000000, // Default value
                                                          onPriceChange,
                                                      }) => {
    const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

    // Update priceRange if minPrice or maxPrice props change
    useEffect(() => {
        setPriceRange([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    // Handler for the min slider
    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(event.target.value);
        // Ensure the min value doesn't exceed the max value
        const newMin = Math.min(newMinValue, priceRange[1]);
        const newRange: [number, number] = [newMin, priceRange[1]];

        setPriceRange(newRange);
        if (onPriceChange) {
            onPriceChange(newRange);
        }
    };

    // Handler for the max slider
    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(event.target.value);
        // Ensure the max value doesn't go below the min value
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
                        onChange={handleMinPriceChange} // Separate handler for min
                        className={cls.sliders}
                    />
                    <input
                        type="range"
                        name="max"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={handleMaxPriceChange} // Separate handler for max
                        className={cls.slider}
                    />
                </div>
            </div>
        </div>
    );
};