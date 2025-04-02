import cls from "./home.module.sass";
import logo from "shared/assets/logo/nttLogo.svg";
import earth from "shared/assets/icons/language.png";
import { Button } from "shared/ui/button/button";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getHomeHeaderItem } from "entities/home/model/selector/homeSelector";
import { fetchHomeHeaderItem } from "entities/home/model/thunk/homeThunk";
import { HeaderItem } from "entities/home/model/schema/homeSchema";

const menuList = [
    { name: "/", label: "Home" },
];

const menuList1 = [
    { name: "/onlineTest", label: "Online Test" }
];

export const HomeHeader = ({ setItem }: { setItem: (item: HeaderItem) => void }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const initialMenu = localStorage.getItem("activeMenu") || menuList[0].name;
    const [activeMenu, setActiveMenu] = useState(initialMenu);
    const [activeSubMenu, setActiveSubMenu] = useState(false);

    useEffect(() => {
        dispatch(fetchHomeHeaderItem());
    }, [dispatch]);

    const data = useSelector(getHomeHeaderItem);

    useEffect(() => {
        localStorage.setItem("activeMenu", activeMenu);
    }, [activeMenu]);

    useEffect(() => {
        if (data && data.length > 0) {
            const foundItem = data.find((item) => `/${item.name}` === activeMenu);
            if (foundItem) {
                setItem(foundItem);
            }
        }
    }, [data, activeMenu, setItem]);


    const handleMenuClick = (name: string) => {
        setActiveMenu(name);
        setActiveSubMenu(false);
        navigate(name);
    };

    const renderMenu = (menuArray: { name: string; label: string }[]) => {
        return menuArray.map((item) => (
            <li
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={classNames({
                    [activeSubMenu ? cls.activeSubmenu : cls.active]: activeMenu === item.name,
                })}
            >
                {item.label}
            </li>
        ));
    };

    return (
        <div className={cls.header}>
            <div onClick={() => setActiveSubMenu(!activeSubMenu)} className={cls.header__hamburger}>
                <i className={activeSubMenu ? "fa fa-times" : "fa fa-bars"} />
            </div>

            <div className={cls.header__logo}>
                <img src={logo} alt="" />
            </div>

            <ul className={cls.header__menu}>
                {renderMenu(menuList)}
                {data?.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => {
                            handleMenuClick(`/${item.name}`);
                            setItem(item);
                        }}
                        className={classNames({
                            [activeSubMenu ? cls.activeSubmenu : cls.active]: activeMenu === `/${item.name}`,
                        })}
                    >
                        {item.name}
                    </li>
                ))}
                {renderMenu(menuList1)}
            </ul>

            <div className={`${cls.header__subMenu} ${activeSubMenu ? cls.header__activeMenu : ""}`}>
                <ul>
                    {renderMenu(menuList)}
                    {data?.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => {
                                handleMenuClick(`/${item.name}`);
                                setItem(item);
                            }}
                            className={classNames({
                                [activeSubMenu ? cls.activeSubmenu : cls.active]: activeMenu === `/${item.name}`,
                            })}
                        >
                            {item.name}
                        </li>
                    ))}
                    {renderMenu(menuList1)}
                </ul>
            </div>

            <div className={cls.header__end}>
                {/*<div className={cls.header__end_language}>*/}
                {/*    <div className={cls.header__end_language_img}>*/}
                {/*        <img src={earth} alt="" />*/}
                {/*    </div>*/}
                {/*    <div className={cls.header__end_language_text}>*/}
                {/*        O'zbek <i className={"fa fa-caret-down"} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Button onClick={() => navigate("/login")} extraClass={cls.header__end_btn}>
                    Login
                </Button>
                <Button onClick={() => navigate("/register")} extraClass={cls.header__end_btn}>
                    Register
                </Button>
            </div>
        </div>
    );
};
