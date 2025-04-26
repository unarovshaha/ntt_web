import {TakeTestBody, TakeTestHeader} from "entities/takeTest";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {takeTestReducer} from "features/onlineTestEnter/model/takeTest/takeTestSlice";
import {useSelector} from "react-redux";
import {getTakeTestItem} from "features/onlineTestEnter/model/takeTest/takeTestSelector";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchTestItem} from "features/onlineTestEnter/model/takeTest/takeTestThunk";
import {useParams} from "react-router";

const reducer = {
    takeTestSlice: takeTestReducer
}

export const TakeTest = () => {
    const {id} = useParams()
    const token = sessionStorage.getItem("token")
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchTestItem(id))
    } ,[])
    return (
       <DynamicModuleLoader reducers={reducer}>
           <div style={{padding: token ? 0 : '10rem 0 0 0 '}}>
               <TakeTestHeader/>
               <TakeTestBody/>
           </div>
       </DynamicModuleLoader>
    );
};

