import cls from "./homePage.module.sass"
import checkIcon from "shared/assets/icons/iconCheck.svg"
import userImg1 from "shared/assets/icons/Ellipse 883.svg"
import userImg2 from "shared/assets/icons/Ellipse 884.svg"
import userImg3 from "shared/assets/icons/Ellipse 885.svg"
import userImg4 from "shared/assets/icons/Ellipse 886.svg"
import homeImg from "shared/assets/images/homeImg.svg"
import univerLogo from "shared/assets/logo/logo.png"
import supportImg from "shared/assets/icons/support.png"
import telegramImg from "shared/assets/icons/logos_telegram.png"
import {Button} from "shared/ui/button/button";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getHomeItem} from "entities/home/model/selector/homeSelector";
import {fetchHomeItem, fetchSearchOrganizations} from "entities/home/model/thunk/homeThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {SearchInput} from "shared/ui/searchInput";
import {Loader} from "shared/ui/loader";


export const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1114);
    const [open, setOpen] = useState<boolean>(false);

    // const homeItem = useSelector(getHomeItem)

    // const dispatch = useAppDispatch()
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1114);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // useEffect(() => {
    //     dispatch(fetchHomeItem())
    // }, [])

    const handleClick = () => {
        setOpen(!open);
    }




    // const renderItem = () => {
    //     if (!isMobile) {
    //         return homeItem?.map(item => (
    //             <div className={cls.main__footer_box}>
    //                 <div className={cls.main__footer_box_logo}>
    //                     <img src={univerLogo} alt=""/>
    //                     <div className={cls.main__footer_box_logo_text}>
    //                         <h1>{item.name}</h1>
    //                         <h2>{item.region}</h2>
    //                     </div>
    //                 </div>
    //                 <div className={cls.main__footer_box_descr}>
    //                     {item.desc}
    //                 </div>
    //                 <div className={cls.main__footer_box_contact}>
    //                     <h2>{item.direction}</h2>
    //                     <h3>Batafsil <i className={"fa fa-arrow-right"}/></h3>
    //                 </div>
    //             </div>
    //         ))
    //     } else {
    //         return (
    //             <div className={cls.main__footer_box}>
    //                 <div className={cls.main__footer_box_logo}>
    //                     <img src={univerLogo} alt=""/>
    //                     <div className={cls.main__footer_box_logo_text}>
    //                         <h1>Buxgalteriya hisobi va moliya</h1>
    //                         <h2>Toshkent Viloyati</h2>
    //                     </div>
    //                 </div>
    //                 <div className={cls.main__footer_box_descr}>
    //                     Oliy ta’lim muassasasi bo‘lib, talabalar ilmiy va kasbiy bilimlarni chuqurlashtirishadi. ta’lim
    //                     beradi.
    //                 </div>
    //                 <div className={cls.main__footer_box_contact}>
    //                     <h2>18 ta yo’nalish bor</h2>
    //                     <h3>Batafsil <i className={"fa fa-arrow-right"}/></h3>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    return (
        <div className={cls.main}>
            <div className={cls.main__container}>
                <div className={cls.main__container_infos}>
                    <div className={cls.main__container_infos_title}>
                        <h2>Nodavlat Ta’lim</h2>
                        <h1>O‘zingizga mos bilim{!isMobile ? <br/> : ""} maskanini tanlang.</h1>
                    </div>

                    <ul className={cls.main__container_infos_list}>
                        <li><img src={checkIcon} alt=""/>Xususiy taʼlim — bu sifatli taʼlimni tanlaydiganlar uchun yagona makon</li>
                        <li><img src={checkIcon} alt=""/>Xususiy taʼlim — bu maktab, litsey, OTM va o‘quv markazlarining yagona jamlanmasi..</li>
                    </ul>
                    <div className={cls.main__container_infos_contact}>
                        <Button onClick={handleClick} extraClass={cls.main__container_infos_contact_btn}><i
                            className="fa-solid fa-phone"/> Biz bilan bog'laning</Button>
                        {
                            open && (
                                <div className={cls.dropdown}>
                                   <div className={cls.dropDownItem}>
                                       <img src={supportImg} alt=""/>
                                       <div className={cls.dropDownItem__box}>
                                           <h1>Aloqa markazi</h1>
                                           <h2>+998 78 255 77 77</h2>
                                       </div>
                                   </div>
                                    <div className={cls.dropDownItem}>
                                       <img src={telegramImg} alt=""/>
                                       <div className={cls.dropDownItem__box}>
                                           <h1>Telegram bot</h1>
                                           <h2>Nodavlat ta’lim tashkiloti</h2>
                                       </div>
                                   </div>
                                </div>
                            )
                        }
                        <div className={cls.main__container_infos_contact_text}>
                            <SearchInput/>
                        </div>
                    </div>
                    <div className={cls.main__container_infos_users}>
                        <div className={cls.main__container_infos_users_img}>
                            <img src={userImg1} alt=""/>
                            <img src={userImg2} alt=""/>
                            <img src={userImg3} alt=""/>
                            <img src={userImg4} alt=""/>
                        </div>
                        <div className={cls.main__container_infos_users_text}>
                            +50,000 Talabalar tanlovi
                        </div>

                    </div>
                </div>
                <div className={cls.main__container_aside}>
                    <img src={homeImg} alt=""/>
                </div>
            </div>

            <div className={cls.main__footer}>

                {/*{renderItem()}*/}
            </div>

        </div>
    );
};

