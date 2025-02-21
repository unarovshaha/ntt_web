import React, {CSSProperties, JSX, SetStateAction} from "react";
import cls from "./box.module.sass"


interface boxProps {
    children: JSX.Element|JSX.Element[],
    extraClass?: string,
    style?: CSSProperties,
    onClick?: SetStateAction<any> | React.MouseEventHandler<HTMLButtonElement>
}

export const Box = (props: boxProps) => {

    const {
        children,
        extraClass,
        onClick,
        style
    } = props
    return (
        <div style={style} onClick={onClick} className={`${cls.box} ${extraClass}`}>
            {children}
        </div>
    );
};

