import React from 'react';

import {Card} from "shared/lib/components/card/card";

import cls from "./otmList.module.sass";

export const OtmList = () => {

    const renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
                <Card key={index}/>
            )
        })
    }

    return (
        <div className={cls.schoolList}>
            {renderList()}
        </div>
    );
}
