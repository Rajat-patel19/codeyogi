/** @format */

import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
     theme?: "primary" | "warning" | "dark";
     buttonType?: "solid" | "outline";
     children: string;
     Icon?: IconType;
}

const Button: FC<Props> = ({
     children,
     className,
     buttonType,
     theme,
     Icon,
     ...rest
}) => {
     const themeClassesOutline =
          theme === "primary"
               ? "border-blueish text-blueish hover:text-white hover:bg-blueish"
               : theme === "dark"
               ? "border-greyish text-greyish hover:text-white hover:bg-greyish"
               : "border-warning text-warning hover:text-white hover:bg-warning";

     const themeClassesSolid =
          theme === "primary"
               ? "bg-blueish shadow-2xl hover:shadow-none text-white"
               : theme === "dark"
               ? "bg-greyish shadow-2xl hover:shadow-none text-white"
               : "bg-warning shadow-2xl hover:shadow-none text-white";

     const iconThemeClasses =
          theme === "primary"
               ? "text-indigo-600  group-hover:text-indigo-400"
               : "text-gray-800  group-hover:text-gray-400";

     const type =
          buttonType === "solid" ? themeClassesSolid : themeClassesOutline;

     return (
          <button
               {...rest}
               className={
                    "group relative flex justify-center py-2 px-5 border text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed " +
                    type
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
          </button>
     );
};

Button.defaultProps = {
     theme: "primary",
     buttonType: "solid",
     type: "submit",
};

export default memo(Button);
