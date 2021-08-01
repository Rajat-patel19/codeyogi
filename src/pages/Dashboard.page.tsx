/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups, GroupResponse } from "../api";
import Card from "../components/Card";

interface Props {}
const Dashboard: FC<Props> = (props) => {
     const [group, setGroup] = useState<GroupResponse | void>();
     const [query, setQuery] = useState("");

     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const inp = event.target.value;
          setQuery(inp);
     };

     useEffect(() => {
          fetchGroups({ status: "all-groups", query }).then((data) => {
               setGroup(data);
          });
     }, [query]);
     return (
          <div className="flex flex-col items-center w-full h-full">
               <input
                    id="search"
                    type="search"
                    value={query}
                    onChange={handleChange}
                    className="border-2 rounded-lg w-40 p-4 border-blueish h-10 my-4"
                    placeholder="search here..."
               />
               <div className="mb-2">
                    This is Dashboard page.
                    <Link to="/recordings">
                         <span className="text-blue-500 ">
                              Go to Recordings.
                         </span>
                    </Link>
               </div>
               <div>
                    {group?.data.map((value, key) => {
                         return (
                              <div
                                   className={
                                        "rounded-2xl shadow-2xl mb-3 " +
                                        (key % 2 === 0
                                             ? "bg-gray-800"
                                             : "bg-gray-500")
                                   }>
                                   <Card
                                        src={value.group_image_url}
                                        title={value.name}
                                        content={value.description}></Card>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
