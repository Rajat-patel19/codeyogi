/** @format */

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import Dashboard from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";

interface Props {
     user: User;
}

const AppContainer: FC<Props> = ({ user }) => {
     return (
          <div className="flex">
               <div className="w-80">
                    <Sidebar user={user} />
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
