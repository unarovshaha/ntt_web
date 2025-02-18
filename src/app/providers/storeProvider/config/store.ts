import {configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';

import {oftenUsedReducer} from "entities/oftenUsed";
import {useHttp} from "shared/api/base";
import { StateSchema, ThunkExtraArg } from './stateSchema';
import { createReducerManager } from './reducerManager';



type CustomCombinedState<T> = {
    [K in keyof T]: T[K];
};


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        oftenUsedSlice: oftenUsedReducer,


        // workTable:
    };

    const reducerManager = createReducerManager(rootReducers);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {request} = useHttp()



    const extraArg: ThunkExtraArg = {
        api: request,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CustomCombinedState<StateSchema>>,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
