/** @format */

import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
     theme?: "primary" | "secondary";
     children: string;
     Icon?: IconType;
     counter?: number;
}

const Button: FC<Props> = ({
     children,
     className,
     theme,
     counter,
     Icon,
     ...rest
}) => {
     const themeClasses =
          theme === "primary"
               ? "bg-blueish"
               : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";

     const iconThemeClasses =
          theme === "primary"
               ? "text-indigo-600  group-hover:text-indigo-400"
               : "text-gray-800  group-hover:text-gray-400";

     return (
          <button
               {...rest}
               className={
                    "group relative flex justify-center py-2 px-5 border border-transparent text-sm font-medium rounded-md shadow-xl hover:shadow-none text-white focus:outline-none focus:ring-2 focus:ring-offset-2 " +
                    themeClasses +
                    " " +
                    className
               }>
               {Icon && (
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                         <Icon
                              className={"w-5 h-5 " + iconThemeClasses}
                              aria-hidden="true"
                         />
                    </span>
               )}
               {children}
               {counter && (
                    <span className="bg-red-500 rounded-full w-8 ">
                         {counter}
                    </span>
               )}
          </button>
     );
};

Button.defaultProps = {
     theme: "primary",
};

export default memo(Button);
