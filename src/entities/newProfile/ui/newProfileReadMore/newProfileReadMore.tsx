import React, {useEffect} from 'react';
import cls from './newProfileReadMore.module.sass'
import {EducationRecord} from "entities/home/model/schema/homeSchema";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router-dom";
import {headers, useHttp} from "shared/api/base";
import {alertAction} from "entities/alert";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getUserId} from "entities/user";
import {useLocation, useParams} from "react-router";

interface IProps {
    item?: EducationRecord
}

export const NewProfileReadMore = ({item}: IProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {request} = useHttp()
    const userId = useSelector(getUserId)
    const location = useLocation(); // Bu hook URL haqidagi info beradi

    useEffect(() => {
        if (location.pathname.startsWith("/platform")) {
            console.log("platform");
        } else {
            console.log("boshqa");
        }
    }, [location.pathname]);

    const onCreate = (id: number) => {
        request({
            url: `students/student_requests/create/`,
            method: "POST",
            body: JSON.stringify({landing: id, user: userId}),
            headers: headers()
        })
            .then(res => {
                dispatch(alertAction.onAddAlertOptions({
                    type: res.detail ? "error" : "success",
                    status: true,
                    msg: res.msg || res.detail
                }))
            })
            .catch(err => {
                dispatch(alertAction.onAddAlertOptions({
                    type: "error",
                    status: true,
                    msg: "Siz allaqachon bu yo'nalishdan ro'yhatdan o'tgansiz!"
                }))
            })
    }
    return (
        <div className={cls.mainBox}>
            <Button extraClass={cls.btn} onClick={() => navigate(-1)} children={"⬅️ Ortga qaytish"}/>
            <div>
                <h1>Ma'lumotlar</h1>

                <h2 dangerouslySetInnerHTML={{__html: item?.desc || ''}}/>

            </div>
            <div>
                <h1>Talablar</h1>

                <h2 dangerouslySetInnerHTML={{__html: item?.requirements || ''}}/>

            </div>
            <Button
                onClick={() => {
                    if (location.pathname.startsWith("/platform")) {
                        //@ts-ignore
                        onCreate(item.id);
                    } else {
                        navigate("/login");
                    }
                }}
                extraClass={cls.profile__btn}
            >
                Hujjat topshirish
            </Button>


        </div>
    );
};

