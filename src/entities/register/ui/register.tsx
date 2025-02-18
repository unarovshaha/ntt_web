import React from 'react';
import cls from "./register.module.sass";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const navigate = useNavigate()

    const onHandle = () => {
        navigate('/identification')
    }

    return (
        <div className={cls.container}>
            <div className={cls.container__content}>
                <div className={cls.container__content__login}>
                    <h2>Ro'yxatdan o'tish</h2>
                    <p>Ro’yhatdan o’tish uchun ma’lumotlaringizni kiriting</p>
                    <Form extraClass={cls.container__content__login__form}>
                        <Input
                            extraType={"phone"}
                            extraClass={cls.container__content__login__form__input}
                            title={"Telefon raqami"}
                            name={"email"}

                        />
                        <Input extraClass={cls.container__content__login__form__input} title={"Parol"} placeholder={"Parol"} name={"password"} type={"password"}/>
                        <Button onClick={onHandle} extraClass={cls.container__content__login__form__button} children={"Kirish"}/>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export const IdentificationReg = () => {
    return(
        <div className={cls.container}>
            <div className={cls.container__content}>
                <div className={cls.container__content__login}>
                    <h2>Identifikatsiya</h2>
                    <p>Barcha ma’lumotlar ONE-ID oraqali olinadi
                    </p>
                    <Form extraClass={cls.container__content__login__form}>
                        <Input
                            extraClass={cls.container__content__login__form__input}
                            title={"Passport yoki ID karta seriya raqami"}
                            name={"passport"}

                        />
                        <Input type={"date"} extraClass={cls.container__content__login__form__input} title={"Tug’ulgan kun"} name={"date"}/>
                        <Button extraClass={cls.container__content__login__form__button} children={"Davom etish"}/>
                    </Form>
                </div>
            </div>

        </div>
    )
}

