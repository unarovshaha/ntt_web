import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";

import {UserApplications} from "entities/profile";
import {
    fetchApplication,
    fetchApplicationTypes,
    getApplicationData,
    getApplicationTypesData
} from "entities/application";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserId, getUserStudentId} from "entities/user";

export const ApplicationList = () => {

    const dispatch = useAppDispatch()
    const types = useSelector(getApplicationTypesData)
    const applications = useSelector(getApplicationData)
    const userId = useSelector(getUserStudentId)

    const getActiveType = (data: string) => {
        if (userId) {
            dispatch(fetchApplication({student_id: userId, status: data}))
        }
    }

    // useEffect(() => {
    //     dispatch(fetchApplicationTypes())
    // }, [])

    return (
        <div>
            <UserApplications
                // types={types}
                setActiveType={getActiveType}
                list={applications}
            />
        </div>
    );
}
