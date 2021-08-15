/** @format */

import { HTMLAttributes } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";
import Button from "./Button/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Sidebar: FC<Props> = () => {
     const user = useAppSelector(meSelector);

     return (
          <div className="w-80">
               <div className="w-80 bg-gray-400 flex flex-col justify-between min-h-screen max-h-screen fixed ">
                    <div>
                         This is Sidebar.
                         <div className="text-red-500">{user!.first_name}</div>
                    </div>
                    <br></br>
                    <Link to="/dashboard">Dashboard</Link>
                    <br></br>
                    <Link to="/recordings">Recordings</Link>
                    <br></br>
                    <Button
                         onClick={() => {
                              logout();
                              window.location.href = "/login";
                         }}
                         className="m-4">
                         Logout
                    </Button>
               </div>
          </div>
     );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
