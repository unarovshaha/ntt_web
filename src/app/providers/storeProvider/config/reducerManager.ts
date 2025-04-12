import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import {
    MountedReducers,
    ReducerManager,
    StateSchema,
    StateSchemaKey,
} from './stateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers: ReducersMapObject<StateSchema> = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateSchemaKey[] = [];
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => ({ ...reducers }),
        getMountedReducers: () => ({ ...mountedReducers }),
        reduce: (state: StateSchema | undefined, action: AnyAction) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    if (state && Object.prototype.hasOwnProperty.call(state, key)) {
                        delete (state as Partial<StateSchema>)[key];
                    }
                });
                keysToRemove = [];
            }
            // @ts-ignore
            return combinedReducer(state ?? {}, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete (reducers as Partial<ReducersMapObject<StateSchema>>)[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
