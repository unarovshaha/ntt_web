import React from "react";

import cls from "./radio.module.sass";

type RadioProps = {
    label: string;
    name: string;
    value: number;
    checked?: boolean;
    onChange: (arg: number) => void;
};

export const Radio: React.FC<RadioProps> = ({label, name, value, checked, onChange}) => {
    return (
        <label className={cls.radioContainer}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className={cls.radioInput}
            />
            <span className={cls.radioLabel}>{label}</span>
        </label>
    );
}
