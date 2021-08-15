/** @format */

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "../Recordings.page";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

interface Props {}

const AppContainer: FC<Props> = () => {
     return (
          <div>
               <Header />
               <Navbar />
               <div className="flex">
                    <Switch>
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
