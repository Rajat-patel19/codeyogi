/** @format */

import { Dialog, Menu, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { AllHTMLAttributes } from "react";
import { useAppSelector } from "../store";
import { meSelector } from "../selectors/auth.selectors";

interface Props extends AllHTMLAttributes<HTMLAllCollection> {}

const Navbar: FC<Props> = (className) => {
     const [isOpen, setIsOpen] = useState(false);
     const [animating, isAnimating] = useState(false);
     const user = useAppSelector(meSelector);
     return (
          <div className="flex items-center justify-between w-full shadow-md ">
               <div>
                    <div className="-mr-2 flex items-center">
                         <button
                              onClick={
                                   animating ? undefined : () => setIsOpen(true)
                              }
                              type="button"
                              className="inline-flex items-center justify-center p-2 text-black"
                              aria-controls="mobile-menu"
                              aria-expanded="false">
                              {!isOpen ? (
                                   <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h16M4 18h16"
                                        />
                                   </svg>
                              ) : (
                                   <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M6 18L18 6M6 6l12 12"
                                        />
                                   </svg>
                              )}
                         </button>
                         DASHBOARD
                    </div>

                    <Transition.Root
                         show={isOpen}
                         as={Fragment}
                         beforeLeave={() => isAnimating(true)}
                         afterLeave={() => isAnimating(false)}>
                         <Dialog open={isOpen} onClose={setIsOpen}>
                              <Transition.Child
                                   as={Fragment}
                                   enter="transition-opacity duration-500"
                                   enterFrom="opacity-0"
                                   enterTo="opacity-50"
                                   entered="opacity-50"
                                   leave="transition-opacity duration-500 "
                                   leaveFrom="opacity-50"
                                   leaveTo="opacity-0">
                                   <Dialog.Overlay className=" fixed inset-0 z-10 bg-black"></Dialog.Overlay>
                              </Transition.Child>

                              <Transition.Child
                                   as={Fragment}
                                   enter="transition ease-in-out duration-500 transform"
                                   enterFrom="-translate-x-full"
                                   enterTo="translate-x-0"
                                   leave="transition ease-in-out duration-500 transform"
                                   leaveFrom="translate-x-0"
                                   leaveTo="-translate-x-full">
                                   {(ref) => (
                                        <div className="fixed z-30 md:z-10 top-0 bottom-0 left-0 transform w-80 bg-white shadow-lg">
                                             <div
                                                  ref={ref}
                                                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                  <div className="w-fulL text-warning px-3 py-2 rounded-md text-xl font-bold">
                                                       WELCOME{" "}
                                                       {user!.first_name}
                                                  </div>
                                                  <Link
                                                       to="#"
                                                       className="hover:bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium">
                                                       Dashboard
                                                  </Link>

                                                  <Link
                                                       to="#"
                                                       className=" hover:bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium">
                                                       Recordings
                                                  </Link>

                                                  <Link
                                                       to="#"
                                                       className="text-black hover:bg-gray-300  block px-3 py-2 rounded-md text-base font-medium">
                                                       Users
                                                  </Link>

                                                  <Link
                                                       to="#"
                                                       className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                                       Profile
                                                  </Link>

                                                  <Link
                                                       to="#"
                                                       className="text-black hover:bg-gray-300  block px-3 py-2 rounded-md text-base font-medium">
                                                       Reports
                                                  </Link>
                                             </div>
                                        </div>
                                   )}
                              </Transition.Child>
                         </Dialog>
                    </Transition.Root>
               </div>
               <Menu as="div" className="relative inline-block text-left mr-4">
                    <div>
                         <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                              Settings
                              <ChevronDownIcon
                                   className="-mr-1 ml-2 h-4 w-4"
                                   aria-hidden="true"
                              />
                         </Menu.Button>
                    </div>

                    <Transition
                         as={Fragment}
                         enter="transition ease-out duration-100"
                         enterFrom="transform opacity-0 scale-95"
                         enterTo="transform opacity-100 scale-100"
                         leave="transition ease-in duration-75"
                         leaveFrom="transform opacity-100 scale-100"
                         leaveTo="transform opacity-0 scale-95">
                         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white z-20 focus:outline-none">
                              <div className="py-1">
                                   <Menu.Item>
                                        <Link
                                             to="#"
                                             className={
                                                  "block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500"
                                             }>
                                             Settings
                                        </Link>
                                   </Menu.Item>
                                   <Menu.Item>
                                        <Link
                                             to="#"
                                             className={
                                                  "block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500"
                                             }>
                                             Mail
                                        </Link>
                                   </Menu.Item>
                                   <Menu.Item>
                                        <Link
                                             to="#"
                                             className={
                                                  "block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500"
                                             }>
                                             Print
                                        </Link>
                                   </Menu.Item>
                                   <Menu.Item>
                                        <Link
                                             to="#"
                                             className={
                                                  "block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500"
                                             }>
                                             Download
                                        </Link>
                                   </Menu.Item>
                                   <Menu.Item>
                                        <Link
                                             to="#"
                                             className={
                                                  "block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500"
                                             }>
                                             Share
                                        </Link>
                                   </Menu.Item>
                              </div>
                         </Menu.Items>
                    </Transition>
               </Menu>
          </div>
     );
};

Navbar.defaultProps = {};

export default memo(Navbar);
