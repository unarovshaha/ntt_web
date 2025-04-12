import React from 'react';
import {UserApplications} from "entities/profile";
import {ApplicationList} from "features/application";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {applicationReducer} from "entities/application";

const reducers: ReducersList = {
    applicationSlice: applicationReducer
}

export const UserApplicationsPage = () => {


    return (
        <DynamicModuleLoader reducers={reducers}>
            <ApplicationList/>
        </DynamicModuleLoader>
    );
};

