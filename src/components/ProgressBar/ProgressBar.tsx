/** @format */

import { FC, memo } from "react";

interface Props {
     progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => {
     const progressbar =
          progress >= 0 && progress < 20
               ? "bg-blueish"
               : progress > 20 && progress <= 30
               ? "bg-blue-500"
               : progress > 30 && progress <= 50
               ? "bg-success"
               : progress > 50 && progress <= 60
               ? "bg-warning"
               : progress > 60 && progress <= 70
               ? "bg-errorRed"
               : progress > 70 && progress <= 80
               ? "bg-purple-600"
               : progress > 80 && progress <= 100
               ? "bg-errorBlack"
               : "";
     return (
          <div className="h-4 mb-4 w-full rounded-lg bg-gray-200">
               <div
                    className={"rounded-lg h-4 " + progressbar}
                    style={{ width: progress + "%" }}></div>
          </div>
     );
};

ProgressBar.defaultProps = {};

export default memo(ProgressBar);
