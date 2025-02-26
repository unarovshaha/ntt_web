import React, {useEffect, useState} from 'react';
import cls from "./register.module.sass";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router-dom";
import {StepProgress} from "../../../shared/ui/stepProgress";
import {useWindowSize} from "@react-hook/window-size";
import {AnimatePresence, motion} from "framer-motion";
import {Box} from "../../../shared/ui/box";
import registerImg from 'shared/assets/images/register.png'
import blueLogo from 'shared/assets/logo/blue_logo.png'
import IDImg from 'shared/assets/images/id.png'
import {Identify} from "../../identify";

interface IdentificationRegProps {
    index?: number | any;
    setIndex?: React.Dispatch<React.SetStateAction<number>> | any;
    totalSteps?: number | any;
    layout?: boolean | any,
    setLayout?: React.Dispatch<React.SetStateAction<boolean>> | any
}

const slideVariants = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0, transition: {duration: 0.5}},
    exit: {opacity: 0, x: -100, transition: {duration: 0.5}}
};

export const Register = () => {


    const navigate = useNavigate();
    const size = useWindowSize();
    const [layout, setLayout] = useState<boolean>(false);
    const [index, setIndex] = useState(1);
    const totalSteps = 3;

    const pages = [
        {
            id:4,
            name: <PCRegister/> // prosta yozilgan bu )
        },
        {
          id: 1,
          name: <PCRegister index={index} setIndex={setIndex} totalSteps={totalSteps}/>
        },
        {
            id: 2,
            name: <IdentificationReg index={index} setIndex={setIndex} totalSteps={totalSteps} layout={layout} setLayout={setLayout}/>
        },
        {
            id: 3,
            name: <Identify index={index} setIndex={setIndex} totalSteps={totalSteps}/>
        }
    ];

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout]);

    const onHandle = () => {
        navigate('/identification');
    };


    return (
        <div className={cls.main}>
            {
                layout ? (
                    <div className={cls.pcContainer}>
                        <div className={cls.pcContainer__section}>
                            <StepProgress currentStep={index} totalSteps={totalSteps} />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={pages[index].id}
                                    variants={slideVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    style={{marginTop: "5%", width: "100%", maxWidth: "100rem", display: 'flex', alignItems: 'start'}}
                                >
                                    <Box extraClass={cls.pcContainer__section__box}>{pages[index].name}</Box>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
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
                                    <Input extraClass={cls.container__content__login__form__input} title={"Parol"} placeholder={"Parol"} name={"password"} type={"password"} />
                                    <Button onClick={onHandle} extraClass={cls.container__content__login__form__button}>
                                        Kirish
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

const PCRegister = (props: IdentificationRegProps) => {
    const {index, totalSteps, setIndex} = props

    const nextStep = (e: React.FormEvent) => {
        e.preventDefault()
        if (index < totalSteps) setIndex(index + 1);
    };

    return(
        <div className={cls.register}>
            <div className={cls.register__img}>
                <img src={registerImg} alt=""/>
            </div>
            <div className={cls.register__arounder}>
                <img src={blueLogo} alt=""/>
                <h1>Ro'yxatdan o'tish</h1>
                <Form extraClass={cls.register__arounder__form}>
                    <Input
                        extraType={"phone"}
                        extraClass={cls.register__arounder__form__input}
                        title={"Telefon raqami"}
                        name={"email"}
                    />
                    <Input extraClass={cls.register__arounder__form__input} title={"Parol"} placeholder={"Parol"} name={"password"} type={"password"} />
                    <Button onClick={nextStep} extraClass={cls.register__arounder__form__button}>
                        Kirish
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export const IdentificationReg = (props: IdentificationRegProps) => {
    const {index, totalSteps, setIndex, setLayout, layout} = props

    const size = useWindowSize();

    const nextStep = (e: React.FormEvent) => {
        e.preventDefault()
        if (index < totalSteps) setIndex(index + 1);
    };

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout]);

    return (
        <div className={cls.main}>
            {
                layout ? <div className={cls.register}>
                        <div className={cls.register__img}>
                            <img src={IDImg} alt=""/>
                        </div>
                        <div className={cls.register__arounder}>
                            <img src={blueLogo} alt=""/>
                            <h1>Identifikatsiya</h1>
                            <Form extraClass={cls.register__arounder__form}>
                                <Input
                                    extraClass={cls.register__arounder__form__input}
                                    title={"Passport yoki ID karta seriya raqami"}
                                    name={"email"}
                                />
                                <Input
                                    extraClass={cls.register__arounder__form__input}
                                    title={"Tug’ilgan kun"}
                                    name={"date"}
                                    type={"date"}

                                />
                                <Button onClick={nextStep} extraClass={cls.register__arounder__form__button}>
                                    Davom etish
                                </Button>
                            </Form>
                        </div>
                    </div> :
                    <div className={cls.container}>
                        <div className={cls.container__content}>
                            <div className={cls.container__content__login}>
                                <h2>Identifikatsiya</h2>
                                <p>Barcha ma’lumotlar ONE-ID oraqali olinadi</p>
                                <Form extraClass={cls.container__content__login__form}>
                                    <Input
                                        extraClass={cls.container__content__login__form__input}
                                        title={"Passport yoki ID karta seriya raqami"}
                                        name={"passport"}
                                    />
                                    <Input type={"date"} extraClass={cls.container__content__login__form__input} title={"Tug’ulgan kun"} name={"date"} />
                                    <Button onClick={nextStep} extraClass={cls.container__content__login__form__button}>
                                        Davom etish
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
            }

        </div>

    );
};
