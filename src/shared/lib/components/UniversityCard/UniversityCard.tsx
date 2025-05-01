import React from "react";
import styles from "./UniversityCard.module.sass";
import {StarRating} from "../stars/stars";
import {useNavigate} from "react-router-dom";

type University = {
    name: string;
    id: number;
    rating: number;
    reviews?: number;
    city?: string;
    deadline?: string;
    priceMax?: number;
    priceMin?: number;
    grant: boolean;
    img: string;
    route: string;
};

export const UniversityCard: React.FC<University> = (props) => {

    const {
        name,
        priceMax,
        priceMin,
        grant,
        rating,
        city,
        route,
        id
    } = props

    const navigate = useNavigate()


    return (
        <div
            onClick={() => navigate(`${route}${id}/about`)}
            className={styles.card}
        >
            <div className={styles.card__header}>
                <img className={styles.image} src="" alt=""/>
                <div className={styles.inner}>
                    <h2 className={styles.title}>{name}</h2>
                    <p className={styles.subtitle}>
                        <StarRating rating={rating}/>
                        <span className={styles.subtitle__inner}>{rating.toFixed(1)}</span>
                        <span className={styles.subtitle__inner}>· {city} Toshkent</span>
                        {/*/{" "}*/}
                        {/*Xususiy universitet */}
                    </p>
                </div>
            </div>
            {/*<p className={styles.info}>*/}
            {/*    📅 Qabul muddati: <span className={styles.highlight}>{deadline}</span>*/}
            {/*</p>*/}
            <div className={styles.card__container}>
                <p className={styles.info}>
                    💰 Qabul muddati:{" "}
                    <span className={styles.info__inner}></span>
                </p>
                <p className={styles.info}>
                    🎓 Kontrakt to’lovi:{" "}
                    <span className={styles.info__inner}>{priceMin} - {priceMax} UZS</span>
                    {grant ? <span style={{color: "#4ade80"}} className={styles.info__inner}>Grant Mavjud</span> : null}
                </p>
                <p className={styles.button}>Batafsil →</p>
            </div>
        </div>
    );
}