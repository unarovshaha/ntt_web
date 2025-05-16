import React, {useState, useMemo, useEffect} from "react";
import cls from "./takeTestBody.module.sass";
import {useSelector} from "react-redux";
import {getTakeTestItem} from "features/onlineTestEnter/model/takeTest/takeTestSelector";
import {QuestionBlock, QuestionItem} from "features/onlineTestEnter/model/takeTest/takeTestSchema";
import {API_URL, API_URL_DOC, useHttp} from "shared/api/base";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

export const TakeTestBody = () => {
    const data = useSelector(getTakeTestItem);

    const [selectedSubjectId, setSelectedSubjectId] = useState<number | undefined | any>(data?.questions.optional[0].id);
    const [answers, setAnswers] = useState<Record<number, Record<number, number>>>({});

    const [activeModal , setActiveModal] = useState(false)

    const [activeModalItem , setActiveItem] = useState<QuestionBlock>()

    const {request} = useHttp()


    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        if (!selectedSubjectId && data) {
            const firstOptional = data.questions.optional?.[0]?.id;
            const firstMandatory = data.questions.mandatory?.[0]?.id;

            if (firstOptional) {
                setSelectedSubjectId(firstOptional);
            } else if (firstMandatory) {
                setSelectedSubjectId(firstMandatory);
            }
        }
    }, [data, selectedSubjectId]);

    const handleSubjectChange = (id: number) => {
        setSelectedSubjectId(id);
    };

    const handleAnswerSelect = (blockId: number, answerId: number) => {
        setAnswers((prev) => {
            const current = prev[selectedSubjectId] || {};

            if (current[blockId] === answerId) {
                const updated = {...current};
                delete updated[blockId];

                return {
                    ...prev,
                    [selectedSubjectId]: updated,
                };
            }

            return {
                ...prev,
                [selectedSubjectId]: {
                    ...current,
                    [blockId]: answerId,
                },
            };
        });
    };


    const filteredQuestionsOptional = useMemo(
        () => data?.questions.optional.filter((q) => q.id === selectedSubjectId),
        [data, selectedSubjectId]
    );
    const filteredQuestionsMandatory = useMemo(
        () => data?.questions.mandatory.filter((q) => q.id === selectedSubjectId),
        [data, selectedSubjectId]
    );

    const currentAnswers = answers[selectedSubjectId] || {};

    const onPostAnswer = async () => {
        const result = {
            mandatory: [] as {
                subject_id: number;
                answers: { question_block_id: number; answer_id: number }[];
            }[],
            optional: [] as {
                subject_id: number;
                answers: { question_block_id: number; answer_id: number }[];
            }[],
        };

        // Mandatory
        data?.questions.mandatory.forEach((subject) => {
            const subjectAnswers = answers[subject.id];
            if (!subjectAnswers) return;

            const answerList: { question_block_id: number; answer_id: number }[] = [];

            subject.blocks.forEach((block) => {
                const answerId = subjectAnswers[block.id];
                if (answerId !== undefined) {
                    answerList.push({
                        question_block_id: block.id,
                        answer_id: answerId,
                    });
                }
            });

            result.mandatory.push({
                subject_id: subject.id,
                answers: answerList,
            });
        });

        // Optional
        data?.questions.optional.forEach((subject) => {
            const subjectAnswers = answers[subject.id];
            if (!subjectAnswers) return;

            const answerList: { question_block_id: number; answer_id: number }[] = [];

            subject.blocks.forEach((block) => {
                const answerId = subjectAnswers[block.id];
                if (answerId !== undefined) {
                    answerList.push({
                        question_block_id: block.id,
                        answer_id: answerId,
                    });
                }
            });

            result.optional.push({
                subject_id: subject.id,
                answers: answerList,
            });
        });

        const res = {
            ...result,
            id
        }

        request({
            url: `test/test/crud/check/`,
            method: "POST",
            body: JSON.stringify(res)
        })
            .then(res => {
                navigate(`../onlineTest/answer/${res.id}`)
            })
            .catch(err => console.log(err))



    }


    // timer narsalari

    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const totalTime = 180 * 60;

    const [timeLeft, setTimeLeft] = useState(totalTime);

    // useEffect(() => {
    //     if (timeLeft <= 0) {
    //         const result = {
    //             mandatory: [] as {
    //                 subject_id: number;
    //                 answers: { question_block_id: number; answer_id: number }[];
    //             }[],
    //             optional: [] as {
    //                 subject_id: number;
    //                 answers: { question_block_id: number; answer_id: number }[];
    //             }[],
    //         };
    //
    //         // Mandatory
    //         data?.questions.mandatory.forEach((subject) => {
    //             const subjectAnswers = answers[subject.id];
    //             if (!subjectAnswers) return;
    //
    //             const answerList: { question_block_id: number; answer_id: number }[] = [];
    //
    //             subject.blocks.forEach((block) => {
    //                 const answerId = subjectAnswers[block.id];
    //                 if (answerId !== undefined) {
    //                     answerList.push({
    //                         question_block_id: block.id,
    //                         answer_id: answerId,
    //                     });
    //                 }
    //             });
    //
    //             result.mandatory.push({
    //                 subject_id: subject.id,
    //                 answers: answerList,
    //             });
    //         });
    //
    //         // Optional
    //         data?.questions.optional.forEach((subject) => {
    //             const subjectAnswers = answers[subject.id];
    //             if (!subjectAnswers) return;
    //
    //             const answerList: { question_block_id: number; answer_id: number }[] = [];
    //
    //             subject.blocks.forEach((block) => {
    //                 const answerId = subjectAnswers[block.id];
    //                 if (answerId !== undefined) {
    //                     answerList.push({
    //                         question_block_id: block.id,
    //                         answer_id: answerId,
    //                     });
    //                 }
    //             });
    //
    //             result.optional.push({
    //                 subject_id: subject.id,
    //                 answers: answerList,
    //             });
    //         });
    //
    //         const res = {
    //             ...result,
    //             id
    //         }
    //
    //         request({
    //             url: `test/test/crud/check/`,
    //             method: "POST",
    //             body: JSON.stringify(res)
    //         })
    //             .then(res => {
    //                 navigate(`../onlineTest/answer/${res.id}`)
    //             })
    //             .catch(err => console.log(err))
    //
    //
    //     }
    //
    // } , [timeLeft])

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const progress = timeLeft / totalTime; // 1 dan 0 gacha

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };


    return (
        <div className={cls.main}>
            <div className={cls.content}>

                <div className={cls.testPanel}>
                    <div className={cls.main__header}>
                        <div className={cls.main__header_timer}>
                            {formatTime(timeLeft)}
                            <span>Qolgan vaqt</span>
                        </div>

                        <div className={cls.main__header_end}>
                            <Button onClick={onPostAnswer} extraClass={cls.endBtn}>Tugatish</Button>
                        </div>

                    </div>
                    <h2 className={cls.subjectTitle}>
                        {data?.questions.optional.find((s) => s.id === selectedSubjectId)?.name?.toUpperCase()}
                        {data?.questions.mandatory.find((s) => s.id === selectedSubjectId)?.name?.toUpperCase()}
                    </h2>

                    {filteredQuestionsOptional?.map((question, qIndex) => (
                        <div key={question.id} className={cls.questionBlock}>
                            {question.blocks.map((block, i) => (
                                <div key={block.id} className={cls.block}>
                                    <p className={cls.question}>
                                        {i + 1}. {block.text ? block.text :
                                        <img onClick={() => {
                                            setActiveModal(true)
                                            setActiveItem(block)
                                        }} style={{width: "30rem", height: "10rem", objectFit: "cover"}}
                                             src={API_URL_DOC + block.image} alt=""/>}
                                    </p>
                                    <div className={cls.answers}>
                                        {block.questions.map((option, i) => {
                                            const isSelected = currentAnswers[block.id] === option.id;
                                            return (
                                                <div
                                                    key={option.id}
                                                    className={`${cls.answer} ${isSelected ? cls.selected : ""}`}
                                                    onClick={() => handleAnswerSelect(block.id, option.id)}
                                                >
                                                    <strong>{String.fromCharCode(65 + i)})</strong>{" "}
                                                    {option.answer} {option.image &&
                                                    <img style={{width: '10rem', height: "6rem", objectFit: "cover"}}
                                                         src={API_URL_DOC + option.image} alt=""/>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {filteredQuestionsMandatory?.map((question, qIndex) => (
                        <div key={question.id} className={cls.questionBlock}>
                            {question.blocks.map((block, i) => (
                                <div key={block.id} className={cls.block}>
                                    <p className={cls.question}>
                                        {i + 1}. {block.text ? block.text :
                                        <img onClick={() => {
                                            setActiveModal(true)
                                        }} style={{width: "30rem", height: "10rem", objectFit: "cover"}}
                                             src={API_URL_DOC + block.image} alt=""/>}
                                    </p>
                                    <div className={cls.answers}>
                                        {block.questions.map((option, i) => {
                                            const isSelected = currentAnswers[block.id] === option.id;
                                            return (
                                                <div
                                                    key={option.id}
                                                    className={`${cls.answer} ${isSelected ? cls.selected : ""}`}
                                                    onClick={() => handleAnswerSelect(block.id, option.id)}
                                                >
                                                    <strong>{String.fromCharCode(65 + i)})</strong>{" "}
                                                    {option.answer} {option.image &&
                                                    <img style={{width: '10rem', height: "6rem", objectFit: "cover"}}
                                                         src={API_URL_DOC + option.image} alt=""/>}

                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>






                <div className={cls.sidebar}>
                    <div className={cls.sidebar__timer} style={{width: '220px', height: '220px', position: 'relative'}}>
                        <svg width="220" height="220">
                            <circle
                                stroke="#eee"
                                fill="transparent"
                                strokeWidth="10"
                                r={radius}
                                cx="110"
                                cy="110"
                            />
                            <circle
                                stroke="rgba(0, 74, 173, 1)"
                                fill="transparent"
                                strokeWidth="10"
                                strokeLinecap="round"
                                r={radius}
                                cx="110"
                                cy="110"
                                strokeDasharray={circumference}
                                strokeDashoffset={circumference * (1 - progress)}
                                style={{transition: 'stroke-dashoffset 1s linear'}}
                            />
                        </svg>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '24px',
                            fontWeight: 'bold'
                        }}>
                            {formatTime(timeLeft)}
                        </div>
                    </div>

                    {/*<div className={cls.sidebar__timer}>*/}


                    {/*    {formatTime(timeLeft)}*/}
                    {/*</div>*/}
                    {data?.questions.optional.map((subject) => {
                        const subjectAnswers = answers[subject.id] || {};
                        const subjectQuestions = data?.questions.optional.filter(
                            (q) => q.id === subject.id
                        );

                        const answeredCount = answersCountForSubject(subjectQuestions, subjectAnswers);

                        return (
                            <div
                                key={subject.id}
                                className={`${cls.subjectItem} ${
                                    selectedSubjectId === subject.id ? cls.subjectItemActive : ""
                                }`}
                                onClick={() => handleSubjectChange(subject.id)}
                            >
                                <span>{subject.name} </span>
                                <span>{answeredCount} / {subject.question_count}</span>
                            </div>
                        );
                    })}


                    {/*{data?.questions.optional.map((subject) => {*/}
                    {/*    const subjectAnswers = answers[subject.id] || {};*/}
                    {/*    const subjectQuestions = data?.questions.optional.filter(*/}
                    {/*        (q) => q.id === subject.id*/}
                    {/*    );*/}

                    {/*    const answeredCount = answersCountForSubject(subjectQuestions, subjectAnswers);*/}

                    {/*    return (*/}
                    {/*        <div*/}
                    {/*            key={subject.id}*/}
                    {/*            className={`${cls.subjectItem} ${*/}
                    {/*                selectedSubjectId === subject.id ? cls.subjectItemActive : ""*/}
                    {/*            }`}*/}
                    {/*            onClick={() => handleSubjectChange(subject.id)}*/}
                    {/*        >*/}
                    {/*            <span>{subject.name} </span>*/}
                    {/*            <span>{answeredCount} / {subject.question_count}</span>*/}
                    {/*        </div>*/}
                    {/*    );*/}
                    {/*})}*/}
                    {data?.questions.mandatory.map((subject) => {
                        const subjectAnswers = answers[subject.id] || {};
                        const subjectQuestions = data?.questions.mandatory.filter(
                            (q) => q.id === subject.id
                        );

                        const answeredCount = answersCountForSubject(subjectQuestions, subjectAnswers);

                        return (
                            <div
                                key={subject.id}
                                className={`${cls.subjectItem} ${
                                    selectedSubjectId === subject.id ? cls.subjectItemActive : ""
                                }`}
                                onClick={() => handleSubjectChange(subject.id)}
                            >
                                <span>{subject.name} </span>
                                <span>{answeredCount} / {subject.question_count}</span>
                            </div>
                        );
                    })}
                    <div className={cls.footer}>
                        <button onClick={onPostAnswer} className={cls.endBtn}>Tugatish</button>
                    </div>
                </div>
            </div>
            <Modal extraClass={cls.modal} title={"Savol rasmi"} active={activeModal} setActive={setActiveModal}>
                <img className={cls.modal__img}
                     src={API_URL_DOC + activeModalItem?.image} alt=""/>
            </Modal>

        </div>
    );
};

function answersCountForSubject(
    questions: QuestionItem[] | undefined,
    answers: Record<number, number>
): number {
    if (!questions) return 0;
    let count = 0;
    for (const q of questions) {
        for (const b of q.blocks) {
            if (answers[b.id] !== undefined) {
                count++;
            }
        }
    }
    return count;
}
