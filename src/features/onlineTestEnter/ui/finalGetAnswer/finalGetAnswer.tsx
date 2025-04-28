import cls from "./getFinalAnswer.module.sass"
import cn from 'classnames'
import {useSelector} from "react-redux";
import {getFinalAnswer} from "features/onlineTestEnter/model/getFinalAnswer/getFinalAnswerSelector";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchFinalAnswer} from "features/onlineTestEnter/model/getFinalAnswer/getFinalAnswerThunk";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {finalAnswerReducer} from "features/onlineTestEnter/model/getFinalAnswer/getFinalAnswerSlice";
import {API_URL_DOC} from "shared/api/base";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";

const reducer = {
    finalAnswerSlice:finalAnswerReducer
}

export const FinalGetAnswer = () => {

    const navigate=  useNavigate()

    const {id} = useParams()
    const dispatch = useAppDispatch()


    const token = sessionStorage.getItem("token")
    useEffect(() => {
        dispatch(fetchFinalAnswer(id))

    } , [])

    const data = useSelector(getFinalAnswer)



    const [activeSubjectIndex, setActiveSubjectIndex] = useState(0);
    const activeSubject = data?.subjects[activeSubjectIndex];





    return (
        <DynamicModuleLoader reducers={reducer}>
            <div  className={cls.wrapper} style={{padding: !token? "10rem 0 0 0" : 0}}>
                {/* Yon panel */}

                {/* Asosiy panel */}
                <div className={cls.content}>
                    <h2 className={cls.title}>{activeSubject?.name}</h2>

                    <div className={cls.content__box}>
                        {activeSubject?.questions.map((question, qIndex) => (
                            <div key={question.id} className={cls.questionBlock}>
                                <h3 className={cls.questionText}>
                                    {qIndex + 1}. {question.text ? question.text : <img style={{width: "30rem" , height: "10rem" , objectFit: "cover"}} src={API_URL_DOC+question.image} alt=""/>}


                                </h3>

                                {question.answer_options.map((option) => {
                                    const isCorrect = option.is_true;
                                    const isSelected = option.is_selected;

                                    const optionClass = cn(cls.option, {
                                        [cls.correct]: isCorrect && isSelected,
                                        [cls.incorrect]: !isCorrect && isSelected,
                                        [cls.correctUnselected]: isCorrect && !isSelected,
                                    });

                                    return (
                                        <div key={option.id} className={optionClass}>
                                            {option.answer} {option.image &&  <img style={{width: "30rem" , height: "10rem" , objectFit: "cover"}} src={API_URL_DOC+option.image} alt=""/> }
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
               <div className={cls.container}>
                   <div className={classNames(cls.sidebar , cls.btns)}>
                       {data?.subjects.map((subject, index) => (
                           <button
                               key={index}
                               onClick={() => setActiveSubjectIndex(index)}
                               className={cn(cls.subjectButton, {
                                   [cls.active]: index === activeSubjectIndex,
                               })}
                           >
                               {subject.name}
                           </button>
                       ))}
                   </div>
                   <div className={cls.sidebar}>
                       <h2>Total: {data?.info.total_score}</h2>
                       {Object.values(data?.info.optional || {}).map((subjectInfo, index) => (
                           <div className={cls.sidebar__score} key={index}>
                               <span>{subjectInfo.subject}</span> <span>{subjectInfo.score} ball</span>

                           </div>
                       ))}

                       <div className={cls.sidebar__mandatory}>
                           Majburiy fanlar
                       </div>

                       {Object.values(data?.info.mandatory || {}).map((subjectInfo, index) => (
                           <div className={cls.sidebar__score} key={index}>
                               <span>{subjectInfo.subject}</span> <span>{subjectInfo.score} ball</span>
                           </div>
                       ))}
                       <Button onClick={() => navigate("../onlineTest/onlineTestEnter")} extraClass={cls.sidebar__btn}>Qayta test topshirish</Button>


                   </div>
               </div>

            </div>

        </DynamicModuleLoader>
    );
}

