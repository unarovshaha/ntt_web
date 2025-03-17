import React, {useState} from 'react';

import {
    NotificationList,
    notificationReducer
} from "entities/notification";
import {
    DynamicModuleLoader,
    ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import cls from "./notificationPage.module.sass";
import {Pagination} from "features/pagination";

const reducers: ReducersList = {
    notificationSlice: notificationReducer
}

export const NotificationPage = () => {

    const [currentPage, setCurrentPage] = useState(1)

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.notification}>
                <NotificationList/>
                <Pagination
                    totalCount={10}
                    onPageChange={setCurrentPage}
                    currentPage={currentPage}
                    pageSize={10}
                />
            </div>
        </DynamicModuleLoader>
    );
}
