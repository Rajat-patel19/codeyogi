/** @format */

import userEvent from "@testing-library/user-event";
import { HTMLAttributes } from "react";
import { FC, memo } from "react";
import { logout } from "../api/auth";
import { User } from "../models/User";
import Button from "./Button/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
     user: User;
}

const Sidebar: FC<Props> = ({ user }) => {
     return (
          <div className="w-80 bg-gray-400 flex flex-col justify-between min-h-screen max-h-screen fixed ">
               <div>
                    This is Sidebar.
                    <div className="text-red-500">{user.first_name}</div>
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
     );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
