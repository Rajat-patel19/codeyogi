/** @format */

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth.page";
import AppContainerPage from "./pages/AppContainer.page";
import NotFoundPage from "./pages/NotFound.page";
import { LS_LOGIN_TOKEN } from "./api";

function App() {
     const token = localStorage.getItem(LS_LOGIN_TOKEN);
     return (
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
                         <AuthPage />
                    </Route>
                    <Route
                         path={[
                              "/dashboard",
                              "/recordings",
                              "/batch/:batchNumber/lecture/:lectureNumber",
                         ]}
                         exact>
                         <AppContainerPage />
                    </Route>
                    <Route path="/not-found">
                         <NotFoundPage />
                    </Route>
               </Switch>
          </BrowserRouter>
     );
}

export default App;
