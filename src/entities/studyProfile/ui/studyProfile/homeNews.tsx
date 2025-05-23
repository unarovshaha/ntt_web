
import cls from "entities/newProfile/ui/newProfileAbout/newProfileAbout.module.sass";
// import cls from "./homeNews.module.sass"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getHomeNews} from "entities/home/model/selector/homeNewsSelector";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchNews} from "entities/home/model/thunk/newsThunk";
import {useEffect} from "react";
export const HomeNews = () => {
    const navigate = useNavigate();
    const homeNewsData = useSelector(getHomeNews);


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchNews());

    }, [])
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


    return (
        <div>
            <div className={cls.profile__listBox}>
                <h1 className={cls.profile__listBox__title}>So'nggi yangiliklar</h1>
                <div className={cls.profile__listBox__arounder}>
                    {
                        renderData()
                    }
                </div>
            </div>
        </div>
    );
};

