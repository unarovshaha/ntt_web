import React, {useState, useMemo, useEffect} from "react";
import cls from "./takeTestBody.module.sass";
import { useSelector } from "react-redux";
import { getTakeTestItem } from "features/onlineTestEnter/model/takeTest/takeTestSelector";
import { QuestionItem } from "features/onlineTestEnter/model/takeTest/takeTestSchema";
import {API_URL, API_URL_DOC, useHttp} from "shared/api/base";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

export const TakeTestBody = () => {
    const data = useSelector(getTakeTestItem);

    const [selectedSubjectId, setSelectedSubjectId] = useState<number | undefined | any>(data?.questions.optional[0].id);
    const [answers, setAnswers] = useState<Record<number, Record<number, number>>>({});

    const {request} = useHttp()


    const navigate  = useNavigate()
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
                const updated = { ...current };
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
                console.log(res)
                navigate(`../onlineTest/answer/${res.id}`)
            })


    }
    return (
        <div className={cls.main}>
            <div className={cls.content}>
                <div className={cls.testPanel}>

                        <h2 className={cls.subjectTitle}>
                            {data?.questions.optional.find((s) => s.id === selectedSubjectId)?.name?.toUpperCase()}
                            {data?.questions.mandatory.find((s) => s.id === selectedSubjectId)?.name?.toUpperCase()}
                        </h2>

                        {filteredQuestionsOptional?.map((question, qIndex) => (
                            <div key={question.id} className={cls.questionBlock}>
                                {question.blocks.map((block , i) => (
                                    <div key={block.id} className={cls.block}>
                                        <p className={cls.question}>
                                            {i + 1}. {block.text ? block.text : <img style={{width: "30rem" , height: "10rem" , objectFit: "cover"}} src={API_URL_DOC+block.image} alt=""/>}
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
                                                        {option.answer} {option.image && <img style={{width: '10rem' , height: "6rem" , objectFit: "cover"}} src={API_URL_DOC+option.image} alt=""/> }
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
                                {question.blocks.map((block , i) => (
                                    <div key={block.id} className={cls.block}>
                                        <p className={cls.question}>
                                            {i+ 1 }. {block.text ?? "Savol matni yo‘q"}
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
                                                        {option.answer} {option.image && <img style={{width: '10rem' , height: "6rem" , objectFit: "cover"}} src={API_URL_DOC+option.image} alt=""/> }

                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}


                    <div className={cls.footer}>
                        <button onClick={onPostAnswer} className={cls.endBtn}>Tugatish</button>
                    </div>
                </div>

                <div className={cls.sidebar}>
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
                </div>
            </div>
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
