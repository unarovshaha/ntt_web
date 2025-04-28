import cls from "./homeNewsProfile.module.sass"
import {getHomeNewsProfileItem} from "entities/home/model/selector/homeNewsSelector";
import {useSelector} from "react-redux";
import profileImg from "shared/assets/images/profileImg.svg"
import {Button} from "shared/ui/button/button";
import {useNavigate, useParams} from "react-router";
import univerImg from "shared/assets/images/Ellipse 118.png"
import {useEffect, useState} from "react";
import {fetchProfileItem} from "entities/home/model/thunk/newsThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {homeNewsReducer} from "entities/home/model/slice/homeNewsSlice";
import {fetchOrganizationsPosters} from "entities/home/model/thunk/homeThunk";
import {getHomePosters} from "entities/home/model/selector/homeSelector";
import {homeReducer} from "entities/home/model/slice/homeSlice";
import {JsonContents} from "entities/home/model/schema/homeSchema";

const reducers: ReducersList = {
    homeNewsSlice: homeNewsReducer,
    homeSlice: homeReducer
}

const extractTextFromJsonContent = (descJson: JsonContents | undefined): string => {
    if (!descJson || !descJson.root || !descJson.root.children) {
        return '';
    }

    return descJson.root.children
        .map(paragraph =>
            paragraph.children.map(textNode => textNode.text).join(' ')
        )
        .join('\n');
};

export const HomeNewsProfile = () => {
    const data = useSelector(getHomeNewsProfileItem)
    const list = useSelector(getHomePosters)

    const {id} = useParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()


    useEffect(() => {
            dispatch(fetchProfileItem({id}))
            dispatch(fetchOrganizationsPosters(id))

    }, [id])
    const renderData = () => {

           //@ts-ignore
        return list?.map((item) => (
                <div className={cls.profile__footer_container_box} key={item.id}>
                    <div className={cls.profile__footer_container_box_header}>
                        <img src={univerImg} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                    <ul>
                        <li>Ta'lim tili <span>{item?.education_language}</span></li>
                        <li>Ta’lim shakli <span>{item?.shift}</span></li>
                        <li>Talablar <span>ee</span></li>
                        <li>Kontrakt to’lovi <span>{item.price}</span></li>
                    </ul>
                    <div className={cls.profile__footer_container_box_footer}>
                        <h2>Yo'nalish haqida</h2>
                        {/*<p dangerouslySetInnerHTML={{ __html: item.desc_json || '' }}></p>*/}
                    </div>
                </div>
            ))
    };
    return (
        // <DynamicModuleLoader reducers={reducers}>
            <div className={cls.profile}>
                <Button onClick={() => navigate(-1)}>Back</Button>
                <div className={cls.profile__container}>
                    {/*<div className={cls.profile__container_left}>*/}
                    {/*    <div className={cls.profile__container_left_img}>*/}
                    {/*        <img src={profileImg} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className={cls.profile__container_left_info}>*/}
                    {/*        O’zbekistonda Oliy Ta’limni 3 tilda olish mumkin.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={cls.profile__container_right}>
                        {/*<div className={cls.profile__container_right_header}>*/}
                        {/*    Ma’lumotlar*/}
                        {/*</div>*/}
                        <div
                            className={cls.profile__container_right_info}
                            dangerouslySetInnerHTML={{__html: data ? data?.desc_json?.text : ""}}
                        >

                        </div>
                    </div>
                </div>

                <div className={cls.profile__footer}>

                    {/*<div className={cls.profile__footer_title}>*/}
                    {/*    E’lonlar*/}
                    {/*</div>*/}
                    {/*<div className={cls.profile__footer_container}>*/}
                    {/*    {renderData()}*/}
                    {/*    /!*<h2>vihurhufhuf</h2>*!/*/}
                    {/*</div>*/}

                </div>
            </div>
        // </DynamicModuleLoader>



    );
};

