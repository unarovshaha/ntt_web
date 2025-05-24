import cls from "entities/takeTest/ui/takeTestHeader/takeTestHeader.module.sass"
import {Subject , Test} from "features/onlineTestEnter/model/takeTest/takeTestSchema";
import {useSelector} from "react-redux";
import {getTakeTestItem} from "features/onlineTestEnter/model/takeTest/takeTestSelector";

// const data = [
//     {name: "Ona tili va adabiyot", count: 30},
//     {name: "Ona tili", count: 30},
//     // {name: "Ona tili", count: 30},
//     // {name: "Ona tili", count: 30},
// ]
const data2 = [
    {name: "Matematika", count: 30},
    {name: "Ona tili", count: 30},
    // {name: "Ona tili", count: 30},
    {name: "O’zbekiston tarixi", count: 30},
]

export const TakeTestHeader = () => {
    const data = useSelector(getTakeTestItem)


    return (
        <div className={cls.header}>

            <div className={cls.header__container}>
                <div className={cls.header__container_optional}>
                    <div className={cls.header__container_optional_title}>
                        IXTIYORIY:
                    </div>
                    <div className={cls.header__container_optional_option}>
                        {data?.questions.optional.map(item => (
                            <div className={cls.header__container_optional_option_item}>{item.name} <span>{item.question_count} ta savol </span></div>
                        ))}
                    </div>
                </div>
                <div className={cls.header__container_mandatory}>
                    <div className={cls.header__container_mandatory_title}>
                        Majburiy:
                    </div>
                    <div className={cls.header__container_mandatory_option}>
                        {data?.questions.mandatory.map(item => (
                            <div className={cls.header__container_mandatory_option_item}>{item.name} <span>{item.question_count} ta savol </span></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

