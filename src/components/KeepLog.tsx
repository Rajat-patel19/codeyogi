/** @format */

import { FC, memo } from "react";

interface Props {}

const KeepLog: FC<Props> = (props) => {
     return (
          <form className="mt-8 space-y-6">
               <input type="hidden" name="remember" defaultValue="true" />
               <div className="flex items-center place-content-center">
                    <input
                         id="Keep me logged in"
                         name="Keep me logged in"
                         type="checkbox"
                         className="h-5 w-5 border"
                    />
                    <label
                         htmlFor="Keep me logged in"
                         className="ml-2 block text-base text-silver">
                         Keep me logged in
                    </label>
               </div>
          </form>
     );
};

KeepLog.defaultProps = {};

export default memo(KeepLog);
