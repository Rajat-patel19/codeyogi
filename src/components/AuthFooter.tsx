/** @format */

import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const AuthFooter: FC<Props> = (props) => {
     return (
          <div className="text-center pt-10">
               <p className="font-semibold max-w-lg">
                    © 2020 All Rights Reserved.{" "}
                    <Link to="index.html" className="text-blueish">
                         CORK
                    </Link>{" "}
                    is a product of Designreset.{" "}
                    <Link to="#" className="text-blueish">
                         Cookie Preferences
                    </Link>
                    ,{" "}
                    <Link to="#" className="text-blueish">
                         Privacy
                    </Link>
                    , and{" "}
                    <Link to="#" className="text-blueish">
                         Terms
                    </Link>
                    .
               </p>
          </div>
     );
};

AuthFooter.defaultProps = {};

export default memo(AuthFooter);
