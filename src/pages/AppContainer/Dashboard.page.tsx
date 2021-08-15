/** @format */

import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import Card from "../../components/Card";
import {
     groupLoadingSelector,
     groupsSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}
const Dashboard: FC<Props> = () => {
     // const query = useAppSelector(groupQuerySelector);
     const loading = useAppSelector(groupLoadingSelector);
     const groups = useAppSelector(groupsSelector);

     return (
          <div className="flex flex-col items-center w-full h-full">
               {/* <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                         fetchGroups({
                              query: e.target.value,
                              status: "all-groups",
                         });
                    }}
                    placeholder="search groups here..."
                    className="border-2 rounded-lg w-48 p-4 border-blueish h-10 my-4"
               /> */}
               {loading && (
                    <FaSpinner className="mt-5 animate-spin"></FaSpinner>
               )}
               <div className="mb-2">This is Dashboard Page.</div>
               <div>
                    {groups.map((group, key) => (
                         <div
                              className={
                                   "rounded-2xl shadow-2xl mb-3 " +
                                   (key % 2 === 0
                                        ? "bg-gray-800"
                                        : "bg-gray-500")
                              }
                              key={group.id}>
                              <Card
                                   title={group.name}
                                   source={group.group_image_url}
                                   content={group.description}></Card>
                         </div>
                    ))}
               </div>
          </div>
     );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
