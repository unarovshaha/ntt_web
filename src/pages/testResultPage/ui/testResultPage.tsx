import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {getUserId} from "entities/user";
import {getTestResultLoading, TestResultList, testResultReducer, fetchTestResults} from "entities/testResult";
import {Loader} from "shared/ui/loader";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import cls from "./testResultPage.module.sass";

const reducers: ReducersList = {
    testResultSlice: testResultReducer
}

export const TestResultPage = () => {

    const dispatch = useAppDispatch()
    const loading = useSelector(getTestResultLoading)
    const userId = useSelector(getUserId)

    useEffect(() => {
        if (userId) dispatch(fetchTestResults({id: userId}))
    }, [userId])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.testResult}>
                <h1 className={cls.testResult__title}>Natijalar tarixi</h1>
                {loading ? <Loader/> : <TestResultList/>}
            </div>
        </DynamicModuleLoader>
    );
}
