import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";
import cls from './login.module.sass'
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {useWindowSize} from "@react-hook/window-size";
import logo from "shared/assets/logo/blue_logo.png"
import loginImg from "shared/assets/images/login.png"
import bg from 'shared/assets/icons/bg.png'
import {SubmitHandler, useForm} from "react-hook-form";
import {ILogin} from "entities/login/model/loginSchema";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {loginThunk} from "entities/login/model/loginThunk";


const slides = [
    {
        id: 1,
        title: "Nodavlat ta’lim tashkilot",
        description: "We Provide Classes Online Classes and Pre Recorded Lectures.!"
    },
    {id: 2, title: "Interaktiv Darslar", description: "Eng yaxshi o'qituvchilar bilan ta'lim oling."},
    {id: 3, title: "Sertifikat Oling", description: "Kurslarni tugatib, sertifikatga ega bo'ling."}
];


const slideVariants = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0, transition: {duration: 0.5}},
    exit: {opacity: 0, x: -100, transition: {duration: 0.5}}
};


export const Onboarding = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const nextSlide = () => {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        } else {
            navigate("/login");
        }
    };


    return (
        <div className={cls.container}>
            <div className={cls.container__content}>
                <div className={cls.container__content__box}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[index].id}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={{position: "absolute", width: "100%", maxWidth: "400px"}}
                        >
                            <h2>{slides[index].title}</h2>
                            <p>{slides[index].description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <div className={cls.container__content__box__handlerBox}>
                        <div className={cls.container__content__box__handlerBox__navigationBox}>
                            {slides.map((_, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: index === i ? "30px" : "10px",
                                        height: "10px",
                                        margin: "0 5px",
                                        borderRadius: index === i ? "20px" : "50%",
                                        backgroundColor: index === i ? "blue" : "#D5E2F5",
                                        transition: "background-color 1s"
                                    }}
                                ></div>
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}>
                            {index < slides.length - 1 ? <i className="fa-solid fa-arrow-right"></i> :
                                <i className="fa-solid fa-check"></i>}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

const pageVariants = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0, transition: {duration: 0.5}},
    exit: {opacity: 0, y: -50, transition: {duration: 0.5}}
};

export const Login = () => {

    const [layout, setLayout] = useState<boolean>(false)
    const navigate = useNavigate()
    const size = useWindowSize()
    const dispatch = useAppDispatch()
    const {register, handleSubmit, control} = useForm<ILogin>()


    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout]);

    const onRedirect: SubmitHandler<ILogin> = async (data) => {
        await dispatch(loginThunk(data))
        navigate("/platform/personal/profile")
    }
    return (
        <div className={cls.main}>
            {
                layout ?
                    <div className={cls.pcContainer}>
                        <div className={cls.pcContainer__img}>
                            <img src={loginImg} alt=""/>
                            <img className={cls.pcContainer__img_posImg} src={bg} alt=""/>
                        </div>

                        <div style={{display: "flex", justifyContent: "center", width: "50%"}}>
                            <div className={cls.pcContainer__content}>
                                <img src={logo} alt=""/>
                                <h1>Tizimga kirish!</h1>
                                <Form>
                                    <Input
                                        extraType={"phone"}
                                        extraClass={cls.container__content__login__form__input}
                                        title={"Telefon raqami"}
                                        name={"phone"}
                                        control={control}
                                        required
                                    />
                                    <Input required style={{width: "50rem"}} extraClass={cls.pcContainer__content__form__input}
                                           title={"Parol"} register={register}
                                           placeholder={"Parol"} name={"password"} type={"password"}/>
                                    <Button onClick={handleSubmit(onRedirect)}>Login</Button>

                                </Form>
                                <h3 onClick={() => navigate("/register")}>Ro'yxatdan o'tish</h3>
                            </div>
                        </div>
                    </div>

                    : <div className={cls.container}>
                        <div className={cls.container__content}>
                            <motion.div
                                className={cls.container__content__login}
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <h2>Ishni boshlash!</h2>
                                <p>Davom etish uchun hisobingizga kiring</p>
                                <Form onSubmit={handleSubmit(onRedirect)} extraClass={cls.container__content__login__form}>
                                    <Input
                                        extraType={"phone"}
                                        extraClass={cls.container__content__login__form__input}
                                        title={"Telefon raqami"}
                                        name={"phone"}
                                        control={control}
                                    />
                                    <Input register={register} extraClass={cls.container__content__login__form__input} title={"Parol"}
                                           placeholder={"Parol"} name={"password"} type={"password"}/>
                                    <Input name={"checkbox"} extraType={"checkbox"} extraTitle={"Remember Me"}/>
                                    <Button extraClass={cls.container__content__login__form__button}
                                            children={"Tizimga kirish"}/>
                                </Form>
                                <h3 onClick={() => navigate("/register")}>Ro'yxatdan o'tish</h3>
                            </motion.div>
                        </div>

                    </div>
            }

        </div>


    );
};




