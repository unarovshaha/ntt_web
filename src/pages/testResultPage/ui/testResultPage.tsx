import React from 'react';
import {useSelector} from "react-redux";

import {Loader} from "shared/ui/loader";
import {getTestResultLoading, TestResultList, testResultReducer} from "entities/testResult";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import cls from "./testResultPage.module.sass";

const reducers: ReducersList = {
    testResultSlice: testResultReducer
}

export const TestResultPage = () => {

    const loading = useSelector(getTestResultLoading)

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.testResult}>
                <h1 className={cls.testResult__title}>Natijalar tarixi</h1>
                {loading ? <Loader/> : <TestResultList/>}
            </div>
        </DynamicModuleLoader>
    );
}
