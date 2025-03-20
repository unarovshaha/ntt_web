import React from 'react';

import cls from "./newProfileGrant.module.sass";
import image from "shared/assets/images/Rectangle 640.png";

export const NewProfileGrant = () => {
    return (
        <div className={cls.grant}>
            <div className={cls.info}>
                <div
                    className={cls.info__header}
                >
                    <img
                        className={cls.info__ava}
                        src={image}
                        alt=""
                    />
                    <div className={cls.info__user}>
                        <h2>Sevinch Kasimxodjayeva</h2>
                        <p>+998901110022</p>
                    </div>
                </div>
                <div className={cls.info__container}>
                    <img className={cls.info__image} src={image} alt=""/>
                    <div className={cls.info__form}>
                        <p className={cls.list}>
                            Name<span>Push Puttichai</span>
                        </p>
                        <p className={cls.list}>
                            Organazition type<span>Push Puttichai</span>
                        </p>
                        <p className={cls.list}>
                            Region<span>Amerika</span>
                        </p>
                        <p className={cls.list}>
                            Location<span>Street 21-45</span>
                        </p>
                        <p className={cls.list}>
                            Describe<span>Lorem Ipsum</span>
                        </p>
                        <p className={cls.list}>
                            INN<span>1234567891011121314</span>
                        </p>
                        <iframe
                            className={cls.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191677.46103859658!2d69.33381119999999!3d41.353215999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9cdd04953d%3A0xf8109d550917a88e!2z0JHQsNC30LDRgCDQrdCh0JrQmCDQltGD0LLQsA!5e0!3m2!1sru!2s!4v1742402606439!5m2!1sru!2s"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>
            <div className={cls.grant__container}>
                <img className={cls.image} src={image} alt=""/>
                <p className={cls.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
    );
}
