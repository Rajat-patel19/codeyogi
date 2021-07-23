import { FC, memo } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
     return (
          <div className="flex flex-row">
               <Sidebar />
               <switch>
                    <Route path="/dashboard">
                         <Dashboard />
                    </Route>
                    <Route path="/recordings">
                         <Recordings />
                    </Route>
                    <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                         <LecturePage />
                    </Route>
               </switch>
          </div>
     );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
