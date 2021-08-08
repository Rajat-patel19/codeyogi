/** @format */

import { useEffect } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import Card from "../../components/Card";
import { useAppSelector } from "../../store";

interface Props {}
const Dashboard: FC<Props> = () => {
     const query = useAppSelector((state) => state.groups.query);

     const groups = useAppSelector((state) => {
          const groupIds = state.groups.queryMap[state.groups.query] || [];
          const groups = groupIds.map((id) => state.groups.byId[id]);
          return groups;
     });

     const dispatch = useDispatch();

     useEffect(() => {
          fetchGroups({ status: "all-groups", query }).then((groups) => {
               dispatch({
                    type: "groups/query_completed",
                    payload: { groups: groups, query },
               });
          });
     }, [query]); //eslint-disable-line react-hooks/exhaustive-deps

     return (
          <div className="flex flex-col items-center w-full h-full">
               <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                         dispatch({
                              type: "groups/query",
                              payload: e.target.value,
                         });
                    }}
                    placeholder="search groups here..."
                    className="border-2 rounded-lg w-48 p-4 border-blueish h-10 my-4"></input>
               <div className="mb-2">
                    This is Dashboard Page.
                    <Link to="/recordings">
                         <span className="text-blue-500">
                              Go to Recordings.
                         </span>
                    </Link>
               </div>
               <div>
                    {groups.map((group, key) => (
                         <div
                              className={
                                   "rounded-2xl shadow-2xl mb-3 " +
                                   (key % 2 === 0
                                        ? "bg-gray-800"
                                        : "bg-gray-500")
                              }
                              key={key}>
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
