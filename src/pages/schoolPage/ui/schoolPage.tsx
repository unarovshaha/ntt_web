import React from 'react';

import {SchoolList} from "entities/school";

import cls from "./schoolPage.module.sass";

export const SchoolPage = () => {
    return (
        <div className={cls.school}>
            <div></div>
            <div className={cls.school__content}>
                <SchoolList/>
            </div>
        </div>
    );
}
