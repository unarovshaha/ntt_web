import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import cls from './multiSelect.module.sass'
const animatedComponents = makeAnimated();

interface MultiSelect {
    options?: any[],
    onChange: (rag: any) => void,
    value?: any,
    extraClass?: string,
    fontSize?: number | string,
    placeholder?: string
    title?: string
}

export const MultiSelect: React.FC<MultiSelect> = React.memo((props) => {

    const {
        options,
        onChange,
        value,
        extraClass,
        fontSize,
        placeholder,
        title
    } = props

    const handleChange = (selectedOptions: any) => {
        if (onChange) {
            onChange(selectedOptions);
        }
    };

    return (
        <div className={cls.multi}>

        <label htmlFor="flavor-select">{title}</label>
        <Select

            className={extraClass}
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: fontSize ? `${fontSize}px` : '16px',
                }),
                option: (provided) => ({
                    ...provided,
                    fontSize: fontSize ? `${fontSize}px` : '16px',
                    display: 'block',
                    whiteSpace: 'normal',
                }),
                singleValue: (provided) => ({
                    ...provided,
                    fontSize: fontSize ? `${fontSize}px` : '16px',
                }),
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            inputId="flavor-select"
            options={options}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        />
        </div>
    );
});
