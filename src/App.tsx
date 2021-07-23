import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import Dashboard from "./pages/Dashboard.page";
import Recordings from "./pages/Recordings.page";

function App() {
     return (
          <BrowserRouter>
               <switch>
                    <Route path="/" exact>
                         <Redirect to="/login"> </Redirect>
                    </Route>
                    <Route path="/login">
                         <LoginPage></LoginPage>
                    </Route>
                    <Route path="/signup">
                         <SignupPage></SignupPage>
                    </Route>
                    <Route path="/dashboard">
                         <Dashboard></Dashboard>
                    </Route>
                    <Route path="/recordings">
                         <Recordings></Recordings>
                    </Route>
               </switch>
          </BrowserRouter>
     );
}

export default App;
