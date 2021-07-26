/** @format */

import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AuthPage from "./pages/Auth.page";
import AppContainerPage from "./pages/AppContainer.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
     return (
          <BrowserRouter>
               <switch>
                    <Route path="/" exact>
                         <Redirect to="/login"> </Redirect>
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
               </switch>
          </BrowserRouter>
     );
}

export default App;
