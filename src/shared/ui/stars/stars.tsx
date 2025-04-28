import React from 'react';
import classNames from "classnames";

import cls from "./stars.module.sass";

interface IStarRating {
    rating: number,
    maxRating?: number,
    extraClass?: string,
}

export const StarRating = ({rating, maxRating = 5, extraClass}: IStarRating) => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        if (rating >= i) {
            stars.push(<span key={i}>★</span>);
        } else if (rating >= i - 0.5) {
            stars.push(<span key={i}>⯪</span>);
        } else {
            stars.push(<span key={i}>☆</span>);
        }
    }

    return (
        <div className={classNames(cls.stars, extraClass)}>
            {stars}
        </div>
    );
}
