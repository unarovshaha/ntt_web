import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import cls from './identify.module.sass';
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Form } from "shared/ui/form";

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

export const Identify = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(data.email); // faqat emailni boshqarish

    const isEmailEmpty = email.trim() === "";

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with email:", email);
    };

    return (
        <div className={cls.identify}>
            <div className={cls.identify__navigation}>
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
                <Form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                            className={cls.identify__container}
                        >
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
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                            className={cls.identify__container}
                        >
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
                                onChange={handleEmailChange} // emailni yangilash
                                title="Email"
                            />
                            <Input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={() => {}}
                                title="Phone"
                            />
                        </motion.div>
                    )}
                    <div className={cls.identify__btnBox}>
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
    );
};
