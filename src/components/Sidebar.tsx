/** @format */

import { HTMLAttributes } from "react";
import { FC, memo } from "react";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
     className?: string | undefined;
}

const Sidebar: FC<Props> = (props, className) => {
     return (
          <div
               className={
                    "w-80 bg-gray-400 flex flex-col justify-between min-h-screen max-h-screen fixed " +
                    className
               }>
               This is Sidebar.
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
