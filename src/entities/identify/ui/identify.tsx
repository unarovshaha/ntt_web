import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import cls from './identify.module.sass';
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Form } from "shared/ui/form";
import {useWindowSize} from "@react-hook/window-size";
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useHttp} from "shared/api/base";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {userProfileUpdateThunk} from "entities/profile/model/userProfile/userProfileThunk";

interface IdentificationRegProps {
    index?: number | any;
    setIndex?: React.Dispatch<React.SetStateAction<number>> | any;
    totalSteps?: number | any;
}

export interface IdentifyProps {
    name: string,
    surname: string,
    passport_seria: string,
    sex: string,
    born_date: string,
    born_address: string,
    indefikatsiya_pin: string,
    phone_extra: string,
    email: string,
}


const data = {
    id: 1,
    title: "Ism-familiya",
    name: "Shaha Unarov",
    passport_num: "AD 1231313",
    passport_jr: "50505050505050",
    sex: "Erke",
    birth: "05.06.2005",
    birth_loc: "Chirchiq",
    email: "",
    phone: "+998942021090"
};

export const Identify = (props: IdentificationRegProps) => {
    const {index, totalSteps, setIndex} = props
    const {register, handleSubmit} = useForm<IdentifyProps>()
    const navigate = useNavigate()
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(data.email);
    const [layout, setLayout] = useState<boolean>(false)
    const size = useWindowSize()
    const dispatch = useAppDispatch()
    const userId: any = localStorage.getItem("user_id")

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout]);

    const isEmailEmpty = email.trim() === "";

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const nextStep: SubmitHandler<IdentifyProps> = async (data) => {
        console.log(data)
        dispatch(userProfileUpdateThunk({id: userId, data: data}))
        navigate("/platform/profile")

    };

    const variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    };


    const handleSubmits = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with email:", email);
    };

    return (
        <div className={cls.main}>
            {
                layout ?
                    <div className={cls.arounder}>
                    <h1>SHaxsiy ma'lumotlar</h1>
                    <Form extraClass={cls.arounder__box}>
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={() => {}}
                            title={data.title}
                        />
                        <Input
                            type="text"
                            name="passport_num"
                            value={data.passport_num}
                            onChange={() => {}}
                            title="Passport Number"
                        />
                        <Input
                            type="text"
                            name="passport_jr"
                            value={data.passport_jr}
                            onChange={() => {}}
                            title="Passport Jr."
                        />
                        <Input
                            type="text"
                            name="sex"
                            value={data.sex}
                            onChange={() => {}}
                            title="Sex"
                        />
                        <Input
                            type="text"
                            name="birth"
                            value={data.birth}
                            onChange={() => {}}
                            title="Birth Date"
                        />
                        <Input
                            type="text"
                            name="birth_loc"
                            value={data.birth_loc}
                            onChange={() => {}}
                            title="Birth Location"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            title="Email"
                        />
                        <Input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={() => {}}
                            title="Phone"
                        />

                        <Button
                            onClick={nextStep}
                            disabled={isEmailEmpty}
                        >
                            Bajarildi
                        </Button>

                    </Form>
                    </div> :
                    <div className={cls.identify}>
                        <div className={cls.identify__handler}>
                            <div className={cls.identify__handler__navigation}>
                                {[1, 2].map((dotIndex) => (
                                    <div
                                        key={dotIndex}
                                        style={{
                                            width: "60px",
                                            height: "5px",
                                            borderRadius: "20px",
                                            backgroundColor: step === dotIndex ? "blue" : "#D5E2F5",
                                            transition: "background-color 1s"
                                        }}
                                    ></div>
                                ))}
                            </div>
                            <h1>Shaxsiy ma’lumotlar 👤</h1>

                            <AnimatePresence mode="wait">
                                <Form onSubmit={handleSubmit(nextStep)}>
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={variants}
                                            className={cls.identify__handler__container}
                                        >
                                            <Input
                                                type="text"
                                                name="name"
                                                register={register}
                                                // onChange={() => {}}
                                                title={data.title}
                                            />
                                            <Input
                                                type="text"
                                                name="passport_seria"
                                                register={register}
                                                // onChange={() => {}}
                                                title="Passport Number"
                                            />
                                            <Input
                                                type="text"
                                                name="indefikatsiya_pin"
                                                register={register}
                                                // value={data.passport_jr}
                                                // onChange={() => {}}
                                                title="Passport Jr."
                                            />
                                            <Input
                                                type="text"
                                                name="sex"
                                                register={register}
                                                // value={data.sex}
                                                // onChange={() => {}}
                                                title="Sex"
                                            />
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={variants}
                                            className={cls.identify__handler__container}
                                        >
                                            <Input
                                                name="born_date"
                                                register={register}
                                                type={"date"}
                                                // value={data.birth}
                                                // onChange={() => {}}
                                                title="Birth Date"
                                            />
                                            <Input
                                                type="text"
                                                name="born_address"
                                                register={register}
                                                // value={data.birth_loc}
                                                // onChange={() => {}}
                                                title="Birth Location"
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                value={email}
                                                register={register}
                                                onChange={handleEmailChange} // emailni yangilash
                                                title="Email"
                                            />
                                            <Input
                                                type="text"
                                                name="phone_extra"
                                                register={register}
                                                // value={data.phone}
                                                // onChange={() => {}}
                                                title="Phone"
                                            />
                                        </motion.div>
                                    )}
                                    <div className={cls.identify__handler__btnBox}>
                                        {step < 2 && (
                                            <Button onClick={() => setStep(step + 1)}>Keyingisi</Button>
                                        )}
                                        {step > 1 && (
                                            <Button

                                                disabled={isEmailEmpty}
                                            >
                                                Bajarildi
                                            </Button>
                                        )}
                                    </div>
                                </Form>
                            </AnimatePresence>
                        </div>

                    </div>
            }

        </div>

    );
};
