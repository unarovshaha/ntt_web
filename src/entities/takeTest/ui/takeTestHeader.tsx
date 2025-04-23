import cls from "./takeTestHeader.module.sass"

const data = [
    {name: "Ona tili va adabiyot", count: 30},
    {name: "Ona tili", count: 30},
    // {name: "Ona tili", count: 30},
    // {name: "Ona tili", count: 30},
]
const data2 = [
    {name: "Ona tili va adabiyot", count: 30},
    {name: "Ona tili", count: 30},
    // {name: "Ona tili", count: 30},
    {name: "O’zbekiston tarixi", count: 30},
]

export const TakeTestHeader = () => {
    return (
        <div className={cls.header}>

            <div className={cls.header__container}>
                <div className={cls.header__container_optional}>
                    <div className={cls.header__container_optional_title}>
                        IXTIYORIY:
                    </div>
                    <div className={cls.header__container_optional_option}>
                        {data.map(item => (
                            <div className={cls.header__container_optional_option_item}>{item.name} <span>{item.count} ta savol </span></div>
                        ))}
                    </div>
                </div>
                <div className={cls.header__container_mandatory}>
                    <div className={cls.header__container_mandatory_title}>
                        Majburiy:
                    </div>
                    <div className={cls.header__container_mandatory_option}>
                        {data2.map(item => (
                            <div className={cls.header__container_mandatory_option_item}>{item.name} <span>{item.count} ta savol </span></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

