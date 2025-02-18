import {EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {IOftenUsedSchema} from "entities/oftenUsed";

export interface StateSchema {

    oftenUsedSlice: IOftenUsedSchema;

}

export type StateSchemaKey = keyof StateSchema;

type CustomCombinedState<T> = {
    [K in keyof T]: Exclude<T[K], undefined>;  // Remove `undefined` from each slice's types
};

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;  // Retrieves the map of reducers
    reduce: (state: StateSchema, action: any) => CustomCombinedState<StateSchema>;  // Reducer function
    add: (key: StateSchemaKey, reducer: Reducer) => void;  // Adds a reducer
    remove: (key: StateSchemaKey) => void;  // Removes a reducer
    getMountedReducers: () => MountedReducers;  // Gets the mounted reducers
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
