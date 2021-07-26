/** @format */

import { FC, memo } from "react";

interface Props {
     setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
     showPassword: boolean;
}

function classNames(...classes: any[]) {
     return classes.filter(Boolean).join(" ");
}

const Slider: FC<Props> = (props) => {
     return (
          <div
               onClick={() => props.setShowPassword(!props.showPassword)}
               className={classNames(
                    props.showPassword ? "bg-blueish" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
               )}>
               <span
                    aria-hidden="true"
                    className={classNames(
                         props.showPassword
                              ? "translate-x-5 bg-white"
                              : "translate-x-0 bg-blueish",
                         "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}></span>
          </div>
     );
};

Slider.defaultProps = {};

export default memo(Slider);
