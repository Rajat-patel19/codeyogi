/** @format */

import { FC, memo, useState } from "react";

interface Props {}

function classNames(...classes: any[]) {
     return classes.filter(Boolean).join(" ");
}

const Slider: FC<Props> = (props) => {
     const [enabled, setEnabled] = useState(false);
     return (
          <div
               onClick={() => setEnabled(!enabled)}
               className={classNames(
                    enabled ? "bg-blueish" : "bg-gray-200",
                    "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
               )}>
               <span
                    aria-hidden="true"
                    className={classNames(
                         enabled
                              ? "translate-x-5 bg-white"
                              : "translate-x-0 bg-blueish",
                         "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    )}></span>
          </div>
     );
};

Slider.defaultProps = {};

export default memo(Slider);
