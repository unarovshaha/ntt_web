import cls from "./homeNewsProfile.module.sass"
import {getHomeNewsProfileItem, getHomeNews, getHomeNewsLoading} from "entities/home/model/selector/homeNewsSelector";
import {useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router";

import {useEffect} from "react";
import {fetchProfileItem} from "entities/home/model/thunk/newsThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {homeNewsReducer} from "entities/home/model/slice/homeNewsSlice";
import {getHomePosters} from "entities/home/model/selector/homeSelector";
import {homeReducer} from "entities/home/model/slice/homeSlice";
import {JsonContents} from "entities/home/model/schema/homeSchema";
import {fetchNews} from "entities/home/model/thunk/newsThunk";
import {Loader} from "shared/ui/loader";
import {API_URL_DOC} from "shared/api/base";

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
    const navigate = useNavigate();
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const homeNewsData = useSelector(getHomeNews);
    const isLoading = useSelector(getHomeNewsLoading)

    useEffect(() => {
            dispatch(fetchProfileItem({id}))
            dispatch(fetchNews());

    }, [id])

    const renderData = () => {
        return homeNewsData?.map((item) => (
                <div onClick={() => navigate(`/news/${item.id}`)} className={cls.listsBox}>
                    <img className={cls.listsBox__img} src={item?.img} alt=""/>
                    <div className={cls.listsBox__box}>
                        <h1 className={cls.listsBox__box__title}>{item?.title}</h1>
                        <p className={cls.listsBox__box__date}>
                            <i className="fa-solid fa-calendar-days"></i>
                            {item?.date}
                        </p>
                    </div>

                </div>
            ))
    };


    const renderBlocks = () => {
        if (!data?.blocks) return
        return data.blocks.map((item) => (
            <div className={cls.block}>
                {
                    item.type_block === "text" ?
                        <div className={cls.block__inner} dangerouslySetInnerHTML={{__html: item.desc_json.text}}>

                        </div>
                        :
                        <img src={API_URL_DOC+ item.img_url} alt="img_url"/>

                }
            </div>
        ))
    };
    return (
        // <DynamicModuleLoader reducers={reducers}>
            <div className={cls.profile}>
                {
                    isLoading ? <Loader/> :
                        (
                            <>
                                <div className={cls.profile__container}>
                                    <div className={cls.date}>
                                        <p>
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <span>{data?.date}</span>
                                        </p>
                                        <p>
                                            <i className={"fa fa-eye"}/>
                                            <span>{data?.views_display}</span>
                                        </p>
                                    </div>
                                    <h1 className={cls.title}>{data?.title}</h1>
                                    <img className={cls.newsImg} src={data?.img} alt=""/>
                                    <div className={cls.blocks}>
                                        {renderBlocks()}
                                    </div>
                                </div>
                                <div className={cls.profile__listBox}>
                                    <h1 className={cls.profile__listBox__title}>So'nggi yangiliklar</h1>
                                    <div className={cls.profile__listBox__arounder}>
                                        {
                                            renderData()
                                        }
                                    </div>

                                </div>
                            </>
                        )
                }

            </div>
        // </DynamicModuleLoader>



    );
};

