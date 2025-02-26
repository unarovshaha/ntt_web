import React, { ChangeEvent, ChangeEventHandler, Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react';
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import classNames from "classnames";
import PhoneInput, {CountryData} from "react-phone-input-2";

import cls from "./input.module.sass";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

export interface ErrorType {
    message: string;
    status: boolean;
}

export interface InputProps extends HTMLInputProps {
    type?: string;
    placeholder?: string;
    extraClass?: string;
    extraLabelClass?: string;
    title?: string;
    onChangeState?: Dispatch<SetStateAction<string | undefined>>;
    value?: string | number;
    onChange?: (value: string) => void;
    name: string;
    register?: UseFormRegister<any>;
    rules?: RegisterOptions;
    required?: boolean;
    error?: ErrorType;
    canChange?: boolean;
    extraType?: string;
    extraTitle?: string;
    checked?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        type = "text",
        placeholder,
        extraClass,
        extraLabelClass,
        title,
        onChange,
        name,
        register,
        rules,
        required,
        error,
        onChangeState,
        value,
        canChange = true,
        extraType,
        extraTitle,
        checked,
        ...restProps
    } = props;

    const textField = register ? register(name, rules) : undefined;

    const [passwordActive, setPasswordActive] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (canChange) {
            const newValue = e.target.value;
            if (onChange) {
                onChange(newValue);
            }
            if (onChangeState) {
                onChangeState(newValue);
            }
        }
        textField?.onChange(e);
    };

    const handlePhoneChange = (
        value: string,
        data: {} | CountryData,
        event: React.ChangeEvent<HTMLInputElement>,
        formattedValue: string
    ) => {
        if (canChange) {
            if (onChange) {
                onChange(value);
            }
            if (onChangeState) {
                onChangeState(value);
            }
        }
        textField?.onChange(event);
    }

    return (
        <label className={classNames(cls.label, extraLabelClass)}>
            {title && <span className={cls.label__title}>{title}</span>}
            {extraType === "phone" ? (
                <PhoneInput
                    inputClass={classNames(cls.label__input, extraClass)}
                    specialLabel={''}
                    country={'uz'}
                    onChange={handlePhoneChange}
                    {...restProps}
                />
            ) : extraType === "checkbox" ? (
                <label className={cls.customCheckbox}>
                    <span className={classNames(cls.label_checked, { [cls.active]: checked === true })}>
                        {extraTitle}
                    </span>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                            if (canChange) {
                                if (onChange) {
                                    onChange(e.target.checked.toString());
                                }
                                if (onChangeState) {
                                    onChangeState(e.target.checked.toString());
                                }
                            }
                            // Для checkbox можно также вызвать textField.onChange, если нужно
                            textField?.onChange(e);
                        }}
                        className={cls.checkboxInput}
                        {...restProps}
                    />
                    <span className={cls.checkMark}></span>
                </label>
            ) : (
                <input
                    {...(textField ? { ...textField } : {})}
                    required={required}
                    id={name}
                    className={classNames(cls.label__input, extraClass)}
                    type={type === "password" && passwordActive ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    {...restProps}
                />
            )}

            {error && (
                <span
                    className={classNames(cls.label__success, {
                        [cls.isError]: error.status,
                    })}
                >
                    {error.message}
                </span>
            )}

            {type === "password" && (
                <i
                    onClick={() => setPasswordActive(!passwordActive)}
                    className={classNames(
                        `fa-solid ${passwordActive ? "fa-eye" : "fa-eye-slash"}`,
                        cls.label__icon,
                        {
                            [cls.title]: title,
                        }
                    )}
                />
            )}
        </label>
    );
};
