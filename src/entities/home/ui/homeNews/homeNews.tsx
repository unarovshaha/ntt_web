import cls from "./homeNews.module.sass"
import itemImg from "shared/assets/images/Rectangle 1001.svg"
import {useNavigate} from "react-router";
import {useState} from "react";
import {IHomeNews} from "entities/home/model/schema/homeNewsSchema";


interface IHomeNewsListProps {
    item?: IHomeNews[]
}

export const HomeNewsList = ({item}: IHomeNewsListProps) => {

    const navigate = useNavigate()

    const [activeItem, setActiveItem] = useState(null)


    const [activeModal, setActiveModal] = useState(false)

    const renderData = () => {

        return item?.map(item => (
            <div
                onClick={() => navigate(`news/${item.id}`)}
                className={cls.box}
            >

                <div className={cls.box__img}>
                    <img src={item.img ? item.img : itemImg} alt=""/>
                </div>

                <div className={cls.box__info}>
                    <div className={cls.box__info_header}>
                        <h1>{item.date}</h1>
                        <div className={cls.box__info_header_views}>
                            <i className={"fa fa-eye"}/>
                            {item.views_display}
                        </div>
                    </div>
                    <div className={cls.box__info_title}>
                        {item.title}
                    </div>
                    {/*<div*/}
                    {/*    dangerouslySetInnerHTML={{__html: item.desc_json?.text}}*/}
                    {/*    className={cls.box__info_text}*/}
                    {/*/>*/}
                </div>
            </div>
        ))
    }
    return (
        <>

            {renderData()}

        </>
    );
};

