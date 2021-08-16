/** @format */

import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import { logout } from "../api/auth";
import { fetchGroups } from "../middlewares/groups.middleware";
import c from "../images/c.png";
import { groupQuerySelector } from "../selectors/groups.selectors";
import { useAppSelector } from "../store";
import { Link } from "react-router-dom";

interface Props {}

const Header: FC<Props> = (props) => {
     const query = useAppSelector(groupQuerySelector);
     const [isShowing, setIsShowing] = useState(false);
     return (
          <div className="w-full">
               <nav className="bg-bgDark w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex items-center justify-between h-16">
                              <div className="flex items-center">
                                   <div className="flex-shrink-0 flex items-center mr-2">
                                        <img
                                             className="h-8 w-8"
                                             src={c}
                                             alt="Workflow"
                                        />
                                        <a
                                             href="http://localhost:3000/dashboard"
                                             className="text-white px-3 py-2 rounded-md text-xl font-medium">
                                             CODEYOGI
                                        </a>
                                   </div>

                                   <div className="relative flex items-center h-9">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="text-silver m-2 md:m-0 w-5 h-5 md:absolute md:top-2 md:left-2 z-10"
                                             onClick={() =>
                                                  setIsShowing(
                                                       (isShowing) => !isShowing
                                                  )
                                             }>
                                             <circle
                                                  cx="11"
                                                  cy="11"
                                                  r="8"></circle>
                                             <line
                                                  x1="21"
                                                  y1="21"
                                                  x2="16.65"
                                                  y2="16.65"></line>
                                        </svg>
                                        <Transition
                                             show={isShowing}
                                             enter="transition-opacity ease-linear transform duration-75"
                                             enterFrom="opacity-0"
                                             enterTo="opacity-100"
                                             leave="transition-opacity ease-linear duration-150"
                                             leaveFrom="opacity-100"
                                             leaveTo="opacity-0"
                                             className="">
                                             <input
                                                  type="text"
                                                  value={query}
                                                  onChange={(e) => {
                                                       fetchGroups({
                                                            query:
                                                                 e.target.value,
                                                            status:
                                                                 "all-groups",
                                                       });
                                                  }}
                                                  placeholder="Search..."
                                                  className="focus:outline-none text-silver rounded-lg w-20  sm:w-48 md:w-72 px-3 py-3 bg-gray-800 h-9 my-4 md:pl-9"
                                             />
                                        </Transition>
                                   </div>
                              </div>
                              <div className="flex items-center flex-shrink-0 ">
                                   <div className="hidden sm:flex">
                                        {/*eslint-disable-next-line*/}
                                        <a href="#" className="">
                                             <img
                                                  src="https://designreset.com/cork/ltr/demo4/assets/img/ca.png"
                                                  className="w-5 h-5 m-3"
                                                  alt="flag"
                                             />
                                        </a>
                                        {/*eslint-disable-next-line*/}
                                        <a href="#" className="m-2">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="text-white">
                                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                  <polyline points="22,6 12,13 2,6"></polyline>
                                             </svg>
                                        </a>
                                        {/*eslint-disable-next-line*/}
                                        <a href="#" className="m-2">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="text-white">
                                                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                             </svg>
                                        </a>
                                   </div>
                                   <Menu>
                                        <div>
                                             <Menu.Button>
                                                  <img
                                                       src="https://avatarfiles.alphacoders.com/187/187644.png"
                                                       className="h-7 w-7 rounded-md"
                                                       alt="avatar"
                                                  />
                                             </Menu.Button>
                                             <Transition
                                                  as={Fragment}
                                                  enter="transition ease-out duration-100"
                                                  enterFrom="transform opacity-0 scale-95"
                                                  enterTo="transform opacity-100 scale-100"
                                                  leave="transition ease-in duration-75"
                                                  leaveFrom="transform opacity-100 scale-100"
                                                  leaveTo="transform opacity-0 scale-95">
                                                  <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                       <Menu.Item>
                                                            {/*eslint-disable-next-line*/}
                                                            <Link
                                                                 to="/profile"
                                                                 className={
                                                                      "block px-4 py-2 text-sm hover:text-blueish"
                                                                 }>
                                                                 Your Profile
                                                            </Link>
                                                       </Menu.Item>
                                                       <hr className="mx-3"></hr>
                                                       <Menu.Item>
                                                            {/*eslint-disable-next-line*/}
                                                            <a
                                                                 href="#"
                                                                 className={
                                                                      "block px-4 py-2 text-sm hover:text-blueish"
                                                                 }>
                                                                 Settings
                                                            </a>
                                                       </Menu.Item>
                                                       <hr className="mx-3"></hr>
                                                       <Menu.Item>
                                                            <button
                                                                 onClick={() => {
                                                                      logout();
                                                                      window.location.href =
                                                                           "/login";
                                                                 }}
                                                                 className="block px-4 py-2 text-sm hover:text-blueish">
                                                                 Logout
                                                            </button>
                                                       </Menu.Item>
                                                  </Menu.Items>
                                             </Transition>
                                        </div>
                                   </Menu>
                              </div>
                         </div>
                    </div>
               </nav>
          </div>
     );
};

Header.defaultProps = {};

export default memo(Header);
