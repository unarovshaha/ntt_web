import cls from "./homeNews.module.sass";
import { useSelector } from "react-redux";
import {getHomeNews, HomeNewsList, homeNewsReducer} from "entities/home";
import { useEffect } from "react";
import { fetchNews } from "entities/home/model/thunk/newsThunk";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
    homeNewsSlice: homeNewsReducer
}

export const HomeNews = () => {
    const homeNewsData = useSelector(getHomeNews);
    console.log(homeNewsData, 'efef')
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        document.title = "So’ngi yangiliklar % Trendlar";

        const metaTags = [
            { name: "charset", content: "UTF-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { property: "og:title", content: "So’ngi yangiliklar % Trendlar" },
            { property: "og:description", content: "Eng so‘nggi yangiliklarni kuzatib boring!" },
            { property: "og:image", content: "https://talimxabarlari.uz/wp-content/uploads/gimnastika.png" },
            { name: "author", content: "Rayhona To‘xtayeva" }
        ];

        metaTags.forEach(({ name, property, content }) => {
            let meta = document.querySelector(`meta[${name ? `name="${name}"` : `property="${property}"`}]`);
            if (!meta) {
                meta = document.createElement("meta");
                if (name) meta.setAttribute("name", name);
                if (property) meta.setAttribute("property", property);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
        });

        return () => {
            document.title = "Default Title";
        };
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers}>

            <div className={cls.news}>
                <div className={cls.news__header}>
                    <h1>So’ngi yangiliklar % Trendlar</h1>
                    <h3>Hamasini ko’rish</h3>
                </div>
                <div className={cls.news__list}>
                    <HomeNewsList item={homeNewsData} />
                </div>
            </div>
        </DynamicModuleLoader>

    );
};
