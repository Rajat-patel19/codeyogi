/** @format */

import { FC, memo } from "react";

interface Props {}

const LoginButton: FC<Props> = (props) => {
     return (
          <div>
               <button
                    type="submit"
                    onClick={() => {
                         console.log();
                    }}
                    className="group relative w-full flex justify-center py-2 px-5 border border-transparent text-sm font-medium rounded-md text-white bg-blueish shadow-xl hover:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Log in
               </button>
          </div>
     );
};

LoginButton.defaultProps = {};

export default memo(LoginButton);
