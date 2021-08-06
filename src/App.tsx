/** @format */

import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { useEffect } from "react";
import { me } from "./api/auth";
import { useDispatch } from "react-redux";
import { meFetchAction, uiSideBarToggle, useAppSelector } from "./store";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
interface Props {}

const App: FC<Props> = () => {
     const user = useAppSelector((state) => state.me);

     const dispatch = useDispatch();

     const token = localStorage.getItem(LS_AUTH_TOKEN);

     useEffect(() => {
          if (!token) {
               return;
          }

          me().then((u) => dispatch(meFetchAction(u)));
     }, []); //eslint-disable-line react-hooks/exhaustive-deps

     useEffect(() => {
          setTimeout(() => {
               console.log("uiSideBarToggle dispatched");
               dispatch(uiSideBarToggle(false));
          }, 8000);
     }, []); //eslint-disable-line react-hooks/exhaustive-deps

     if (!user && token) {
          return <div>Loading...</div>;
     }

     return (
          <>
               <Suspense
                    fallback={<div className="text-red-500">Loading...</div>}>
                    <BrowserRouter>
                         <Switch>
                              <Route path="/" exact>
                                   {user ? (
                                        <Redirect to="/dashboard" />
                                   ) : (
                                        <Redirect to="/login" />
                                   )}
                              </Route>
                              <Route path={["/login", "/signup"]} exact>
                                   {user ? (
                                        <Redirect to="/dashboard" />
                                   ) : (
                                        <AuthLazy />
                                   )}
                              </Route>
                              <Route
                                   path={[
                                        "/dashboard",
                                        "/recordings",
                                        "/batch/:batchNumber/lecture/:lectureNumber",
                                   ]}
                                   exact>
                                   {user ? (
                                        <AppContainerLazy />
                                   ) : (
                                        <Redirect to="/login" />
                                   )}
                              </Route>
                              <Route>
                                   <NotFoundPage />
                              </Route>
                         </Switch>
                    </BrowserRouter>
               </Suspense>
          </>
     );
};

export default App;
