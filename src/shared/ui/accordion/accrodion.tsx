import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';

import cls from './accordion.module.sass';

interface AccordionItem {
    id: number
    name: string
}

interface AccordionProps {
    title: string;
    items: AccordionItem[];
    onClick: (arg: number[]) => void;
    defaultChecked?: number[];
    extraClass?: string;
    onDisActive?: (arg: number) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
                                                        title,
                                                        items,
                                                        onClick,
                                                        defaultChecked,
                                                        extraClass,
                                                        onDisActive
                                                    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (defaultChecked) {
            setSelectedItems(defaultChecked)
        }
    }, [defaultChecked])

    useEffect(() => {
        onClick(selectedItems)
    }, [selectedItems])

    const onHandleItem = (id: number) => {
        setSelectedItems(prevState =>
            prevState.includes(id)
                ? onDelete(prevState, id)
                : [...prevState, id]
        )
    }

    const onDelete = (arr: number[], number: number) => {
        if (onDisActive)
            onDisActive(number)
        return arr.filter(item => item !== number)
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(cls.accordion, extraClass)}>
            <div className={cls.header} onClick={toggleOpen}>
                <h4 className={cls.title}>{title}</h4>
                <span className={classNames(cls.arrow, {[cls.open]: isOpen})}>
                    ▼
                </span>
            </div>

            <div
                className={cls.content}
                style={{
                    maxHeight: isOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : '0px',
                }}
                ref={contentRef}
            >
                <div className={cls.grid}>
                    {items?.map((item, index) => (
                        <span
                            onClick={() => onHandleItem(item.id)}
                            key={index}
                            className={classNames(cls.tag, {
                                [cls.active]: selectedItems.includes(item.id)
                            })}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
