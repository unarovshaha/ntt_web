import {useDispatch, useSelector} from "react-redux";
import cls from "./studyComments.module.sass"
import avatar from "shared/assets/icons/avatar.svg"
import {Button} from "shared/ui/button/button";
import {Modal} from "shared/ui/modal";
import {useState} from "react";
import {Form} from "shared/ui/form";

import { useForm} from "react-hook-form";

import {useHttp} from "shared/api/base";


import {useParams} from "react-router";
import {IComment} from "entities/home/model/schema/homeSchema";
import {Input} from "shared/ui/input";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import {studyProfileActions} from "entities/studyProfile";
import {getStudyProfileComment} from "entities/studyProfile/model/studyProfileSelector";



export const StudyComments = () => {



    const [active, setActive] = useState(false)

    const data = useSelector(getStudyProfileComment)

    const renderData = () => {
        return data?.map(item => (
            <div className={cls.comment__box}>
                <div className={cls.comment__box_header}>
                    <div style={{ display: 'flex', gap: '4px' , alignItems: "center" }}>
                        {/*<img src={avatar} alt=""/>*/}
                        <h3>{item.name}</h3>
                        <h3>{item.surname}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    fontSize: '20px',
                                    // @ts-ignore

                                    color: index < item.rating ? 'gold' : '#e0e0e0',
                                }}
                            >
          ★
        </span>
                        ))}
                    </div>
                </div>
                <div className={cls.comment__box_text}>
                    {item.comment}
                </div>
                {/*<div className={cls.comment__box_date}>*/}
                {/*    {item.date}*/}
                {/*</div>*/}
            </div>
        ))
    }
    return (
        <div className={cls.comment}>

                    {renderData()}

                <Button onClick={() => setActive(true)} extraClass={cls.comment__add}>Izoh kiritish</Button>
            <AddComment  setActive={setActive} active={active}/>
        </div>
    );
};

const AddComment = ({active, setActive } : {active : boolean , setActive : (arg : boolean) => void}) => {

    const {register, handleSubmit , setValue} = useForm()


    const dispatch = useAppDispatch()
    const [rating, setRating] = useState(0);
    const handleStarClick = (index: number) => {
        setRating(index + 1);
    };


    const {request} = useHttp()

    const {id} = useParams()

    const userId = localStorage.getItem('user_id')
    const onAdd = (data : IComment) => {
        const res = {
            ...data,
            rating: rating,
            organization: id,
            user: userId
        }



        request({
            url: `comments/create/`,
            method: "POST",
            body: JSON.stringify(res),
            // headers: headers()
        })

            .then(res =>{
                dispatch(studyProfileActions.onAddComment(res.comment))
                setActive(false)
                setRating(0)
                setValue("name",  "")
                setValue("surname",  "")
                setValue("comment",  "")
            })

    }

    return (
        <Modal title={"Komment"} extraClass={cls.modal} active={active} setActive={setActive}>


            <Form extraClass={cls.form}>
                <textarea {...register("comment")} name={"comment"} placeholder={"Text"}/>

                <div className={cls.modal__star}>
                    <h2>Reyting</h2>
                    <div>
                        {Array.from({length: 5}).map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleStarClick(index)}
                                style={{
                                    fontSize: '30px',
                                    cursor: 'pointer',
                                    color: index < rating ? 'gold' : 'white',
                                    transition: 'color 0.2s',
                                }}
                            >
          ★
        </span>
                        ))}
                    </div>
                </div>
                {/*// @ts-ignore*/}

                <Button extraClass={cls.comment__add} onClick={handleSubmit(onAdd)}>Qushmoq</Button>
            </Form>
        </Modal>
    )
}
