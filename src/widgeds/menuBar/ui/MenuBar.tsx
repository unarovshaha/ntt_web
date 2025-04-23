import React, {useCallback, useState} from 'react';
import classNames from "classnames";
import {NavLink, useNavigate} from "react-router-dom";
import {createPortal} from "react-dom";

import {menuConfig} from "../model/config/menuConfig";
import {Button} from "shared/ui/button";

import cls from "./MenuBar.module.sass"

export const MenuBar = () => {

    const navigate = useNavigate()
    const [activeMultiLink, setActiveMultiLink] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)

    const renderMenuList = useCallback(() => {
        return menuConfig?.map(item => {


            return (
                <NavLink
                    onClick={() => setActiveMultiLink(false)}
                    key={item.to}
                    className={
                        ({isActive}) =>
                            isActive ? classNames(cls.options__item, cls.active) : cls.options__item
                    }
                    to={item.to}
                >
                    {item.icon ? item.icon : <img src={item.img} alt=""/>}
                    <p>{item.label}</p>

                </NavLink>
            )
        })
    }, [activeMultiLink, menuConfig])


    const renderMobileMenu = useCallback(() => {
        return menuConfig.map(item => {
            return (
                <NavLink
                    to={item.to}
                    className={
                        ({isActive}) =>
                            isActive ? classNames(cls.item, {[cls.active]: true}) : cls.item
                    }
                >
                    {item.label}
                </NavLink>
            )
        })
    }, [activeMultiLink, menuConfig])

    const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        if (!target.closest(".content") && !target.closest(".fa-solid")) setActiveMenu(false)
    }

    return (
        <>
            {
                window.innerWidth <= 430 ?
                    createPortal(
                        <div
                            className={classNames(cls.bars, {
                                [cls.active]: activeMenu
                            })}
                            onClick={(e) => onClose(e)}
                        >
                            <i
                                className={classNames(
                                    `fa-solid ${activeMenu ? "fa-xmark" : "fa-bars"}`,
                                    cls.bars__icon
                                )}
                                onClick={() => setActiveMenu(!activeMenu)}
                            />
                            <div
                                className={classNames(
                                    cls.bars__container,
                                    {[cls.active]: activeMenu},
                                    "content"
                                )}
                            >
                                {renderMobileMenu()}
                            </div>
                        </div>,
                        document.body
                    )
                    :
                    <div className={cls.menubar}>
                        <div className={cls.profile}>
                            <h2>Menu</h2>
                        </div>
                        <div className={cls.menubar__wrapper}>
                            <div className={cls.options}>
                                {renderMenuList()}
                            </div>
                            <Button
                                extraClass={cls.btn}
                                onClick={() => {
                                    navigate("/login")
                                    localStorage.clear()
                                    sessionStorage.clear()
                                }}
                            >
                                <i className="fa-solid fa-right-from-bracket"/>
                                Chiqish
                            </Button>
                        </div>
                    </div>
            }
            {/*<div className={cls.menubar}>*/}
            {/*    <div className={cls.profile}>*/}
            {/*        <h2>Menu</h2>*/}
            {/*    </div>*/}
            {/*    <div className={cls.options}>*/}
            {/*        {renderMenuList()}*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

