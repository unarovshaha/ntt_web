import React, {useEffect, useMemo, useState} from 'react';

import {ApplicationList, applicationReducer, fetchApplication} from "entities/application";
import {Pagination} from "features/pagination";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import cls from "./applicationPage.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getUserId} from "entities/user";

const reducers: ReducersList = {
    applicationSlice: applicationReducer
}

export const ApplicationPage = () => {

    const userId = useSelector(getUserId)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId)
            dispatch(fetchApplication({id: userId}))
    }, [userId])

    const pageSize = useMemo(() => 10, [])
    const [currentPage, setCurrentPage] = useState<number>(1)


    const onChangePage = (data: number) => {
        setCurrentPage(data)
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.application}>
                <ApplicationList/>
                {/*<Pagination*/}
                {/*    totalCount={20}*/}
                {/*    onPageChange={onChangePage}*/}
                {/*    currentPage={currentPage}*/}
                {/*    pageSize={pageSize}*/}
                {/*/>*/}
            </div>
        </DynamicModuleLoader>
    );
}
