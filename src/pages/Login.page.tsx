/** @format */

import { useFormik } from "formik";
import { FC, memo } from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import AuthFooter from "../components/AuthFooter";
import ForgetPass from "../components/ForgetPass";
import KeepLog from "../components/KeepLog";
import LoginButton from "../components/LoginButton";
import Slider from "../components/Slider";
import Input from "../components/Input";
import { FiLock, FiUser } from "react-icons/fi";

interface Props {}

const Login: FC<Props> = (props) => {
     const history = useHistory();

     const { handleSubmit, getFieldProps, touched, errors, isSubmitting } =
          useFormik({
               initialValues: {
                    email: "",
                    password: "",
               },
               validationSchema: yup.object().shape({
                    email: yup
                         .string()
                         .required("This field is required!!!!!")
                         .email(),
                    password: yup
                         .string()
                         .required()
                         .min(8, ({ min }) => `Atleast ${min} chars!!!!`),
               }),
               onSubmit: (data) => {
                    console.log("form submitting", data);
                    setTimeout(() => {
                         console.log("form submitted successfully");
                         history.push("/dashboard");
                    }, 5000);
               },
          });
     return (
          <div className="min-h-screen flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
               <div className="max-w-md w-full space-y-8">
                    <div className="text-left mb-16">
                         <h2 className="mt-6 text-5xl font-medium text-gray-900 pb-2">
                              Log In to
                              <span className="text-blueish text-5xl font-semibold">
                                   {" "}
                                   CODEYOGI
                              </span>
                         </h2>
                         <p className="mt-2 text-sm text-gray-600">
                              New Here?{" "}
                              <Link
                                   to="/signup"
                                   className="font-medium text-blueish hover:cursor-pointer pb-px border-blueish border-solid border-b">
                                   Create an account
                              </Link>
                         </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                         <input
                              type="hidden"
                              name="remember"
                              defaultValue="true"
                         />
                         <div className="space-y-3 outline-none bg-white pb-4">
                              <Input
                                   id="email"
                                   type="email"
                                   autoComplete="email"
                                   required
                                   touched={touched.email}
                                   error={errors.email}
                                   {...getFieldProps("email")}
                                   placeholder="Email address">
                                   <FiUser
                                        className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 absolute left-0 top-0 px-1 py-px"
                                        aria-hidden="true"
                                   />
                              </Input>
                              {touched.email && (
                                   <div className="text-red-500">
                                        {errors.email}
                                   </div>
                              )}
                              <Input
                                   id="password"
                                   type="password"
                                   autoComplete="password"
                                   required
                                   touched={touched.email}
                                   error={errors.email}
                                   {...getFieldProps("password")}
                                   placeholder="Password">
                                   <FiLock
                                        className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 absolute left-0 top-0 px-1 py-px"
                                        aria-hidden="true"
                                   />
                              </Input>
                              {touched.password && (
                                   <div className="text-red-500">
                                        {errors.password}
                                   </div>
                              )}
                         </div>

                         <div className="flex items-center justify-between pb-8">
                              <div className="flex space-x-3 items-center">
                                   <p className="text-sm text-gray-500">
                                        Show Password
                                   </p>
                                   <Slider />
                              </div>
                              <LoginButton />
                              {isSubmitting && (
                                   <FaSpinner className="mt-5 animate-spin"></FaSpinner>
                              )}
                         </div>
                         <KeepLog />
                         <ForgetPass />
                         <AuthFooter />
                    </form>
               </div>
          </div>
     );
};

Login.defaultProps = {};

export default memo(Login);
