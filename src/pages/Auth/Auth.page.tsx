/** @format */

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {
     onLogin: (user: User) => void;
}

const Auth: FC<Props> = (props) => {
     return (
          <div className="flex lg:justify-between justify-center">
               <div className="md:w-1/2 w-full">
                    <Switch>
                         <Route path="/login">
                              <LoginPage onLogin={props.onLogin} />
                         </Route>
                         <Route path="/signup">
                              <SignupPage />
                         </Route>
                    </Switch>
               </div>
               <AuthHero />
          </div>
     );
};

Auth.defaultProps = {};

export default memo(Auth);
