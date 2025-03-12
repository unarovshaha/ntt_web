import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {routerConfigProfiles} from "../config/routerConfigProfiles";
import {Layout} from "app/layout";
import {LoginPage} from "pages/loginPage";
import {Onboarding} from "entities/login";
import {RegisterPage} from "pages/registerPage";
import {IdentificationReg} from "entities/register";
import {IdentifyPage} from "pages/identifyPage";
import {RequireAuth} from "app/routers/ui/RequireAuth";

export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"login"}
                    element={<LoginPage/>}
                />
                <Route
                    path={"onboard"}
                    element={<Onboarding/>}
                />
                <Route
                    path={"register"}
                    element={<RegisterPage/>}
                />
                <Route
                    path={"identification"}
                    element={<IdentificationReg/>}
                />
                <Route
                    path={"identify"}
                    element={<IdentifyPage/>}
                    />
                <Route element={<RequireAuth/>}>
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


                </Route>


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
