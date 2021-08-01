/** @format */

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Dashboard from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
     return (
          <div className="flex">
               <div className="w-80">
                    <Sidebar />
               </div>
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
     );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);