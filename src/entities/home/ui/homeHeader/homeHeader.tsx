import cls from "./home.module.sass"

import logo from "shared/assets/logo/nttLogo.svg"
import earth from "shared/assets/icons/language.png"
import {Button} from "shared/ui/button/button";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {useNavigate} from "react-router";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getHomeHeaderItem} from "entities/home/model/selector/homeSelector";
import {fetchHomeHeaderItem} from "entities/home/model/thunk/homeThunk";
import {HeaderItem} from "entities/home/model/schema/homeSchema";

const menuList = [
    {name: "/", label: "Home"},
    {name: "/onlineTest", label: "Online Test"}
];


export const HomeHeader = ({setItem} : {setItem: (item: HeaderItem) => void}) => {


    const [activeMenu, setActiveMenu] = useState(menuList[0].name)
    const [activeSubMenu, setActiveSubMenu] = useState(false)




    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchHomeHeaderItem())
    }, [])
    const data = useSelector(getHomeHeaderItem)
    const renderMenu = () => {
        return menuList.map(item => (
            <li
                onClick={() => {
                    setActiveMenu(item.name)
                    setActiveSubMenu(false)

                    navigate(item.name)
                }}
                className={classNames({
                    [activeSubMenu ? cls.activeSubmenu : cls.active]: activeMenu === item.name
                })}
            >{item.label}</li>
        ))
    }

    return (
        <div className={cls.header}>
            <div onClick={() => setActiveSubMenu(!activeSubMenu)} className={cls.header__hamburger}>
                <i className={activeSubMenu ? "fa fa-times" : "fa fa-bars"}/>
            </div>

            <div className={cls.header__logo}>
                <img src={logo} alt=""/>
            </div>


            <ul className={cls.header__menu}>
                {renderMenu()}
                {data?.map(item => <li
                    onClick={() => {
                        setActiveMenu(item.name)
                        setActiveSubMenu(false)
                        navigate(`/${item.name}`)
                        setItem(item)
                    }}
                    className={classNames({
                        [activeSubMenu ? cls.activeSubmenu : cls.active]: activeMenu === item.name
                    })}>{item.name}</li>)}
            </ul>

            <div className={`${cls.header__subMenu} ${activeSubMenu ? cls.header__activeMenu : ""}`}>
                <ul>
                    {renderMenu()}
                </ul>
            </div>


            <div className={cls.header__end}>
                <div className={cls.header__end_language}>
                    <div className={cls.header__end_language_img}>
                        <img src={earth} alt=""/>
                    </div>
                    <div className={cls.header__end_language_text}>
                        O'zbek
                        <i className={"fa fa-caret-down"}/>
                    </div>
                </div>
                <Button onClick={() => navigate("/login")} extraClass={cls.header__end_btn}>Login</Button>
                <Button onClick={() => navigate("/register")} extraClass={cls.header__end_btn}>Register</Button>
            </div>

        </div>
    );
};

