import React, { useState, useRef, useEffect } from "react";
import cls from "./dropdown.module.sass";

interface Props {
    title?: string;
    subtitle?: string;
    html: string;
}

export const DropDown = ({ title = "", subtitle = "", html }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("6rem");

    useEffect(() => {
        if (expanded && contentRef.current) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("6rem");
        }
    }, [expanded]);

    return (
        <div className={cls.wrapper}>
            {title && <h3 className={cls.title}>{title} haqida</h3>}
            {/*{subtitle && <strong className={cls.subtitle}>📌 {subtitle}</strong>}*/}
            <div
                className={cls.content}
                style={{ maxHeight: height }}
                ref={contentRef}
            >
                <div
                    className={cls.text}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <button className={cls.button} onClick={() => setExpanded(prev => !prev)}>
                {expanded ? "Yopish" : "Batafsil →"}
            </button>
        </div>
    );
};
