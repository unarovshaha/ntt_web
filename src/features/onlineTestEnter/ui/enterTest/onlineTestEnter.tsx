import cls from "./onlineTestEnter.module.sass"

import img from "shared/assets/images/enterTest.svg"
import {Button} from "shared/ui/button";

import uzFlag from "shared/assets/images/uzFlag.svg"
import ruFlag from "shared/assets/images/ruFlag.svg"
import {Input} from "shared/ui/input";
import {SubmitHandler, useForm} from "react-hook-form";
import {Select} from "shared/ui/select";
import {onlineTestEnterReducer} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useSelector} from "react-redux";
import {
    getOnlineTestList,
    getOnlineTestSecondSubject,
    getOnlineTestSubject
} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterSelector";
import {c} from "framer-motion/dist/types.d-6pKw1mTI";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchFirstSubject,
    fetchRequiredSubject,
    fetchSecondSubject
} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterThunk";
import {useNavigate} from "react-router-dom";
import {useHttp} from "shared/api/base";
import {IOnlineTestSubject} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterSchema";
interface IData  {
    name: string , surname: string
}


const filterSide = [ {name: "Natijalarni kurish"} , {name: "Test Topshirish"}]

const reducer = {
    onlineTestEnterSlice: onlineTestEnterReducer
}

export const OnlineTestEnterFeature = () => {


    const token = sessionStorage.getItem("token")


    const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

    const [active, setActive] = useState(filterSide[0].name)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 950);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={cls.main} style={{padding: token ? 0 : '10rem 0'}}>
                <div className={cls.main__container}>
                    {isMobile && <div className={cls.main__container_filter}>
                        {filterSide.map(item => (
                            <h2 onClick={() => setActive(item.name)} className={classNames({
                                [cls.active]: active === item.name
                            })}> {item.name}</h2>
                        ))}
                    </div>}


                    {isMobile ? active === "Natijalarni kurish" ? <OnlineTestLeft/> :
                        <OnlineTestRight token={token}/> : <> <OnlineTestLeft/> <OnlineTestRight token={token}/></>}

                </div>
            </div>
        </DynamicModuleLoader>
    );
};

const OnlineTestLeft = () => {

    return (
        <div className={cls.main__container_left}>
            <img src={img} alt=""/>
            <div className={cls.main__container_left_title}>
                2022-yil namunaviy testlar
            </div>
            <div className={cls.main__container_left_descr}>
                2022-yilgi Davlat Test Markazi (DTM) imtihonlarida uchragan savollarning murakkablik
                darajasiga
                mos keladigan, bilim va tahlil qilish qobiliyatini chuqur sinovdan o‘tkazuvchi test
                savollari.
            </div>

            <ul className={cls.main__container_left_statistic}>

                <li>36 <span>Ishtirokchilar</span></li>
                <li>11 <span>Fanlar soni</span></li>
                <li>21.7% <span>O'rtacha natija</span></li>
                <li>72.2% <span>Maksimal natija</span></li>
            </ul>
            <Button extraClass={cls.main__container_left_btn}>Natijalarni ko'rish</Button>
        </div>
    )
}



const OnlineTestRight = ({token}: { token: string | null }) => {

    const navigate = useNavigate()


    const subject = useSelector(getOnlineTestSubject)
    const [firstSubjectSelect, setFirstSubjectSelect] = useState<number>()





    const secondSubject = useSelector(getOnlineTestSecondSubject)
    const [secondSubjectSelect, setSecondSubjectSelect] = useState<number>()


    const {request} = useHttp()
    const {register, handleSubmit} = useForm<IData>()
    const requireSub = useSelector(getOnlineTestList)
    const dispatch = useAppDispatch()


    const user_id = localStorage.getItem("student_id")


    useEffect(() => {
        dispatch(fetchFirstSubject())
    }, [])



    useEffect(() => {
        if (subject)
            setFirstSubjectSelect(subject[0]?.id)
    }, [subject])

    useEffect(() => {
        if (secondSubject)
            setSecondSubjectSelect(secondSubject[0]?.id)
    }, [secondSubject])


    useEffect(() => {
        if (firstSubjectSelect)
            dispatch(fetchSecondSubject(firstSubjectSelect))
    }, [firstSubjectSelect])



    useEffect(() => {
        if (firstSubjectSelect && secondSubjectSelect)
            dispatch(fetchRequiredSubject({main_id: firstSubjectSelect , second_id: secondSubjectSelect}))
    }, [firstSubjectSelect && secondSubjectSelect])


    const onPostData  : SubmitHandler<IData>   = (data) => {



        const res = {
            ...data ,
            student: user_id,

            test1: firstSubjectSelect,
            test2: secondSubjectSelect,
        }

        request({
            url: `test/test/crud/student-tests/`,
            method: "POST",
            body: JSON.stringify(res),

        })
            .then(res => [
                navigate(`../onlineTest/takeTest/${res.id}`)
            ])
    }





    return (
        <div className={cls.main__container_right}>
            <div className={cls.main__container_right_title}>
                Diagnostik test
            </div>
            {/*<h1>Test tilini tanlang</h1>*/}
            {/*<div className={cls.main__container_right_lang}>*/}


            {/*    {lang.map(item => (*/}
            {/*        <div className={cls.main__container_right_lang_item}>*/}
            {/*            <img src={item.img} alt=""/>*/}
            {/*            {item.name}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {!token && <div className={cls.main__container_right_form}>
                <Input
                    register={register}
                    extraClass={cls.main__container_right_form_input}
                    name={"name"}
                    placeholder={"Ismingiz"}/>
                <Input
                    register={register}
                    extraClass={cls.main__container_right_form_input}
                    name={"surname"}
                    placeholder={"Familyangiz"}/>
            </div>}

            <div className={cls.main__container_right_subject}>
                <h2 className={cls.main__container_right_subject_title}>Brinchi fanni tanlang</h2>
                <Select
                    optionsData={subject}
                    extraClass={cls.main__container_right_subject_select}
                    setSelectOption={setFirstSubjectSelect}
                />
                <h2 className={cls.main__container_right_subject_title}>Ikkinchi fanni tanlang</h2>
                <Select
                    optionsData={secondSubject}
                    extraClass={cls.main__container_right_subject_select}
                    setSelectOption={setSecondSubjectSelect}
                />
            </div>
            <div className={cls.main__container_right_requireSubject}>
                <h1>Majburiy fanlar</h1>
                <div className={cls.main__container_right_requireSubject_list}>
                    {requireSub?.mandatory_tests.map(item => (
                        <div className={cls.main__container_right_requireSubject_list_item}>
                            <h2>{item.subject}</h2>
                            <h2>{item.question_count} ta savol</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cls.main__container_right_footer}>
                <div className={cls.main__container_right_footer_time}>
                    <h1>Testni umumiy vaqti:</h1>
                    <h1>{requireSub?.total_mandatory_duration}</h1>
                </div>
                {/*<div className={cls.main__container_right_footer_price}>*/}
                {/*    <h1>Narxi:</h1>*/}
                {/*    <h1>19000 UZS</h1>*/}
                {/*</div>*/}
            </div>

            <Button onClick={handleSubmit(onPostData)} extraClass={cls.main__container_right_btn}>Testni
                boshlash</Button>
        </div>
    )
}