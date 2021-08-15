/** @format */

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "../Recordings.page";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Profile from "./Profile.page";

interface Props {}

const AppContainer: FC<Props> = () => {
     return (
          <div>
               <Header />
               <Navbar />
               <div>
                    <Switch>
                         <Route path="/profile">
                              <Profile />
                         </Route>
                         <Route path="/dashboard">
                              <Dashboard />
                         </Route>
                         <Route path="/recordings">
                              <Recordings />
                         </Route>
                         <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                              <LecturePage />
                         </Route>
                    </Switch>
               </div>
          </div>
     );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
