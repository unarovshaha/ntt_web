import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router";

import {fetchRefresh} from "entities/user";

import {} from "entities/user";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserError, getUserLoading} from "entities/user/model/userSelector";



export const RequireAuth = () => {
    // const auth = useSelector(getUserAuthData)


    const refresh_token = sessionStorage.getItem("refreshToken")

    const refreshLoading = useSelector(getUserLoading)
    const error = useSelector(getUserError)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchRefresh({refresh: refresh_token}))
    }, [])




    if (refreshLoading) {
        return null
    } else if (error) {
        return <Navigate to={"/login"}/>
    } else return <Outlet/>
};