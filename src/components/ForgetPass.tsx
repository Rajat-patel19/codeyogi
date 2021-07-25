/** @format */

import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const ForgetPass: FC<Props> = (props) => {
     return (
          <div className="flex place-content-center">
               <Link
                    to=""
                    className="font-extrabold text-sm tracking-widest text-blueish hover:cursor-pointer">
                    Forgot Password?
               </Link>
          </div>
     );
};

ForgetPass.defaultProps = {};

export default memo(ForgetPass);
