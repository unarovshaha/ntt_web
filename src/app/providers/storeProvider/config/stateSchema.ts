import {EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {IOftenUsedSchema} from "entities/oftenUsed";
import {IRegisterSchema} from "entities/register/model/registerSchema";
import {IUserProfileSchema} from "entities/profile/model/userProfile/userProfileSchema";
import {UserSchema} from "entities/user/model/userSlice";
import {IStudySchema} from "entities/study";
import {IFilterSchema} from "features/filter";
import {IStudyProfileSchema} from "entities/studyProfile";
import {IApplicationSchema} from "entities/application";
import {INotificationSchema} from "entities/notification";
import {IAlertState} from "features/alert/model/slice/alertSlice";

export interface StateSchema {

    oftenUsedSlice: IOftenUsedSchema;
    registerSlice: IRegisterSchema;
    userProfileSlice: IUserProfileSchema;
    user: UserSchema;
    studySlice?: IStudySchema;
    filterSlice?: IFilterSchema;
    studyProfileSlice?: IStudyProfileSchema;
    applicationSlice?: IApplicationSchema;
    notificationSlice?: INotificationSchema;
    AlertSlice?: IAlertState
}

export type StateSchemaKey = keyof StateSchema;

type CustomCombinedState<T> = {
    [K in keyof T]: Exclude<T[K], undefined>;
};

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: any) => CustomCombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: any;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: any;
    state: StateSchema;
}
