import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {routerConfigProfiles} from "../config/routerConfigProfiles";
import {Layout} from "app/layout";
import {Button} from "shared/ui/button";
import {LoginPage} from "pages/loginPage";

export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"login"}
                    element={<LoginPage/>}
                />
                {/*<Route element={<RequireAuth/>}>*/}
                    <Route element={<Layout/>} path={"platform"}>

                        {
                            routerConfigProfiles.map(item => {
                                return (
                                    <Route
                                        id={item.name}
                                        path={item.path}
                                        element={item.element}
                                    />
                                )
                            })
                        }
                    </Route>


                {/*</Route>*/}


                <Route
                    index
                    element={<Navigate to={"platform"}/>}
                />
            </>
        )
    );

    return (
        <Suspense>
            <RouterProvider router={router}/>
        </Suspense>
    );
};
