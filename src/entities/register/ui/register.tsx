import React, {useEffect, useState} from 'react';
import cls from "./register.module.sass";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router-dom";
import {StepProgress} from "shared/ui/stepProgress";
import {useWindowSize} from "@react-hook/window-size";
import {AnimatePresence, motion} from "framer-motion";
import {Box} from "shared/ui/box";
import registerImg from 'shared/assets/images/register.png'
import blueLogo from 'shared/assets/logo/blue_logo.png'
import IDImg from 'shared/assets/images/id.png'
import {Identify} from "../../identify";
import {
    DynamicModuleLoader,
    ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {registerReducer} from "../model/registerSlice";
import {registerThunk} from "../model/registerThunk";
import {SubmitHandler, useForm} from "react-hook-form";
import {IRegister} from "entities/register/model/registerSchema";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchLocationsData, getLocationsData} from "entities/oftenUsed";
import {useSelector} from "react-redux";
import {Select} from "shared/ui/select";
import {useHttp} from "shared/api/base";
import {Alert, alertAction} from "entities/alert";

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

const reducers: ReducersList = {
    registerSlice: registerReducer
}

export const Register = () => {

    const regions = useSelector(getLocationsData)
    const [region, setRegion] = useState()

    const landing = localStorage.getItem("landingId")
    const {register, handleSubmit, control} = useForm<IRegister>()
    const navigate = useNavigate();
    const size = useWindowSize();
    const [layout, setLayout] = useState<boolean>(false);
    const [index, setIndex] = useState(1);
    const totalSteps = 2;
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLocationsData())
    }, [])

    const pages = [
        {
            id: 4,
            name: <PCRegister/> // prosta yozilgan bu )
        },
        {
            id: 1,
            name: <PCRegister index={index} setIndex={setIndex} totalSteps={totalSteps}/>
        },
        // {
        //     id: 2,
        //     name: <IdentificationReg index={index} setIndex={setIndex} totalSteps={totalSteps} layout={layout} setLayout={setLayout}/>
        // },
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

    const onHandle: SubmitHandler<IRegister> = (data) => {


        const res = {
            region,
            ...data,
            landing: landing ? landing : " "
        }
        dispatch(registerThunk(res))
        navigate('/login');
    };


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.main}>
                {
                    layout ? (
                        <div className={cls.pcContainer}>
                            <div className={cls.pcContainer__section}>
                                <StepProgress currentStep={index} totalSteps={totalSteps}/>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={pages[index].id}
                                        variants={slideVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        style={{
                                            marginTop: "5%",
                                            width: "100%",
                                            maxWidth: "100rem",
                                            display: 'flex',
                                            alignItems: 'start'
                                        }}
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
                                    <Form onSubmit={handleSubmit(onHandle)}
                                          extraClass={cls.container__content__login__form}>
                                        <Input
                                            extraType={"phone"}
                                            extraClass={cls.container__content__login__form__input}
                                            title={"Telefon raqami"}
                                            name={"phone"}
                                            control={control}
                                        />
                                        <Select
                                            selectOption={region}
                                            title={"Region"}
                                            optionsData={regions}
                                            setSelectOption={setRegion}
                                        />
                                        <Input register={register}
                                               extraClass={cls.container__content__login__form__input} title={"Parol"}
                                               placeholder={"Parol"} name={"password"} type={"password"}/>
                                        <Button extraClass={cls.container__content__login__form__button}>
                                            Ro'yxatdan o'tish
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </DynamicModuleLoader>
    );
};

const PCRegister = (props: IdentificationRegProps) => {
    const {register, handleSubmit, control} = useForm<IRegister>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {index, totalSteps, setIndex} = props

    const regions = useSelector(getLocationsData)
    const orgId = localStorage.getItem("organizationID")
    const landing = localStorage.getItem("landingId")

    const {request} = useHttp()

    const [region, setRegion] = useState()

    const onHandle: SubmitHandler<IRegister> = (data) => {
        const res = {
            region,
            ...data,
            organizationID: orgId ? orgId : " ",
            landing: landing ? landing : " "
        }
        // dispatch(registerThunk(res))
        request({
            url: `users/user/crud/`,
            method: "POST",
            body: JSON.stringify(res),
        })
            .then(res => {
                navigate('/login');

            })
            .catch(err => {

                dispatch(alertAction.onAddAlertOptions({
                    type: "error",
                    status: true,
                    msg: "Bu telefon raqamga ega foydalanuvchilar allaqachon mavjud"
                }))
            })
        // dispatch(registerThunk(data))
        // if (index < totalSteps) setIndex(index + 1);
        // navigate('/login');
    };

    return (
        <div className={cls.register}>
            <Alert/>
            <div className={cls.register__img}>
                <img src={registerImg} alt=""/>
            </div>
            <div className={cls.register__arounder}>
                <img src={blueLogo} alt=""/>
                <h1>Ro'yxatdan o'tish </h1>
                <Form onSubmit={handleSubmit(onHandle)} extraClass={cls.register__arounder__form}>
                    <Input
                        extraType={"phone"}
                        extraClass={cls.container__content__login__form__input}
                        title={"Telefon raqami"}
                        name={"phone"}
                        control={control}
                    />
                    <Select
                        selectOption={region}
                        title={"Region"}
                        optionsData={regions}
                        setSelectOption={setRegion}
                    />
                    <Input register={register} extraClass={cls.register__arounder__form__input} title={"Parol"}
                           placeholder={"Parol"} name={"password"} type={"password"}/>
                    <Button extraClass={cls.register__arounder__form__button}>
                        Ro'yxatdan o'tish
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
                                    <Input type={"date"} extraClass={cls.container__content__login__form__input}
                                           title={"Tug’ulgan kun"} name={"date"}/>
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
