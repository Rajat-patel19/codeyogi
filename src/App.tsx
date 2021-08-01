/** @format */

import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { useState } from "react";
import { User } from "./models/User";
import { useEffect } from "react";
import { me } from "./api/auth";

interface Props {}

const App: FC<Props> = () => {
     const [user, setUser] = useState<User>();

     const token = localStorage.getItem(LS_AUTH_TOKEN);

     useEffect(() => {
          if (!token) {
               return;
          }

          me().then((u) => setUser(u));
     }, []);

     if (!user && token) {
          return <div>Loading...</div>;
     }

     return (
          <Suspense fallback={<div className="text-red-500">Loading...</div>}>
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
                                   <AuthLazy onLogin={setUser} />
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
                                   <AppContainerLazy user={user!} />
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
     );
};

export default App;
