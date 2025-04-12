import React, {useEffect, useState} from 'react';

import {
    StudyHeader,
    StudyMttList,
    StudyOtmList,
    StudySchoolList,
    StudyDirectionList, studyReducer
} from "entities/study";
import {
    filterReducer,
    MttFilter,
    MttFilterModal,
    OtmFilter,
    OtmFilterModal,
    OtmSecondFilter,
    OtmSecondFilterModal,
    SchoolFilter,
    SchoolFilterModal
} from "features/filter";

import cls from "./studyPage.module.sass";
import {Outlet, Route, Routes} from "react-router";
import {SchoolAdvantage, SchoolGallery, SchoolGrant} from "entities/school";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchOrganizationTypesData} from "entities/oftenUsed";

const reducers: ReducersList = {
    studySlice: studyReducer,
    filterSlice: filterReducer
}

export const StudyPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOrganizationTypesData())
    }, [])

    const [isSchoolFilter, setIsSchoolFilter] = useState<boolean>(false)

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.study}>
                <StudyHeader/>
                <div className={cls.study__content}>
                    <StudySchoolList active={isSchoolFilter} setActive={setIsSchoolFilter}/>
                    <SchoolFilterModal active={isSchoolFilter} setActive={setIsSchoolFilter}/>
                </div>
            </div>
        </DynamicModuleLoader>
    );
}

// organization-degrees/organization-degree/get/list/${id}/
// users/user/get/${id}/ ??
// users/user/crud/${dataUser.id}/ ??
// users/user/crud/${id}/ "PATCH" ??
// users/user/crud/ "POST" ??
// users/user/get/ "GET" ??
// students/student_requests/student_request2/${id}/ ??
// token/


// organizations/organization/get/home/desc/${id}/
// organizations/organization/get/home/advantages/${id}/
// organizations/organization/get/home/degree/${id}/
// organizations/organization/get/home/landing/${id}/
