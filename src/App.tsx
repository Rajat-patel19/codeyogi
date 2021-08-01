/** @format */

import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";

interface Props {}

const App: FC<Props> = () => {
     const token = localStorage.getItem(LS_AUTH_TOKEN);
     return (
          <Suspense fallback={<div className="text-red-500">Loading...</div>}>
               <BrowserRouter>
                    <Switch>
                         <Route path="/" exact>
                              {token ? (
                                   <Redirect to="/dashboard" />
                              ) : (
                                   <Redirect to="/login" />
                              )}
                         </Route>
                         <Route path={["/login", "/signup"]} exact>
                              {token ? (
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
                              <AppContainerLazy />
                         </Route>
                         <Route path="/not-found">
                              <NotFoundPage />
                         </Route>
                    </Switch>
               </BrowserRouter>
          </Suspense>
     );
};

export default App;
