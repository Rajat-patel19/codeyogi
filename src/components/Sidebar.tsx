/** @format */

import { HTMLAttributes } from "react";
import { FC, memo } from "react";
import { logout } from "../api/auth";
import { useAppSelector } from "../store";
import Button from "./Button/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Sidebar: FC<Props> = () => {
     const userFirstName = useAppSelector(
          (state) => state.users.byId[state.auth.id!].first_name
     );

     return (
          <div className="w-80">
               <div className="w-80 bg-gray-400 flex flex-col justify-between min-h-screen max-h-screen fixed ">
                    <div>
                         This is Sidebar.
                         <div className="text-red-500">{userFirstName }</div>
                    </div>
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
