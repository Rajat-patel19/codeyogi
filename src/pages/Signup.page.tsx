/** @format */

import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input/Input";
import * as yup from "yup";
import { FiLock, FiUser } from "react-icons/fi";
import { HiAtSymbol } from "react-icons/hi";
import Button from "../components/Button/Button";
import Slider from "../components/Slider";
import { FaSpinner } from "react-icons/fa";
import AuthFooter from "../components/AuthFooter";

interface Props {}

const Signup: FC<Props> = (props) => {
     const [showPassword, setShowPassword] = useState(false);

     const history = useHistory();

     const {
          handleSubmit,
          getFieldProps,
          touched,
          errors,
          isSubmitting,
     } = useFormik({
          initialValues: {
               email: "",
               password: "",
               username: "",
          },
          validationSchema: yup
               .object()
               .required()
               .shape({
                    email: yup
                         .string()
                         .required("This field is required!!!!!")
                         .email(),
                    password: yup
                         .string()
                         .required()
                         .min(8, ({ min }) => `Atleast ${min} chars!!!!`),
                    username: yup
                         .string()
                         .max(15, "Must be 11 characters or less")
                         .required("This field is required!!!!!"),
               }),
          onSubmit: (data) => {
               console.log("form submitting", data);
               setTimeout(() => {
                    console.log("form submitted successfully");
                    history.push("/login");
               }, 5000);
          },
     });
     return (
          <div className="min-h-screen flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
               <div className="max-w-md w-full space-y-8">
                    <div className="text-left mb-16">
                         <h2 className="text-40 font-medium text-greyish mb-1 leading-48">
                              Get started with a <br />
                              free account
                         </h2>
                         <p className="mt-2 text-sm font-extrabold text-greyish">
                              Already have an account?{" "}
                              <Link
                                   to="/login"
                                   className="font-extrabold text-sm text-blueish hover:cursor-pointer pb-px border-blueish border-solid border-b">
                                   Log in
                              </Link>
                         </p>
                    </div>
                    <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
                         <input
                              type="hidden"
                              name="remember"
                              defaultValue="true"
                         />
                         <div className="space-y-6 outline-none bg-white pb-4">
                              <Input
                                   id="username"
                                   type="username"
                                   autoComplete="username"
                                   required
                                   touched={touched.username}
                                   error={errors.username}
                                   {...getFieldProps("username")}
                                   placeholder="Username"
                                   className="">
                                   <HiAtSymbol
                                        className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 absolute left-0 top-0 px-1 py-px"
                                        aria-hidden="true"
                                   />
                              </Input>
                              <Input
                                   id="email"
                                   type="email"
                                   autoComplete="email"
                                   required
                                   touched={touched.email}
                                   error={errors.email}
                                   {...getFieldProps("email")}
                                   placeholder="Email address"
                                   className="">
                                   <FiUser
                                        className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 absolute left-0 top-0 px-1 py-px"
                                        aria-hidden="true"
                                   />
                              </Input>
                              <Input
                                   id="password"
                                   type={showPassword ? "text" : "password"}
                                   autoComplete="password"
                                   required
                                   touched={touched.password}
                                   error={errors.password}
                                   {...getFieldProps("password")}
                                   placeholder="Password">
                                   <FiLock
                                        className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 absolute left-0 top-0 px-1 py-px"
                                        aria-hidden="true"
                                   />
                              </Input>
                         </div>
                         <div className="flex items-center text-left pb-3">
                              <input
                                   id="agree to terms and conditions"
                                   name="agree to terms and conditions"
                                   type="checkbox"
                                   className="h-5 w-5 border"
                              />
                              <label
                                   htmlFor="agree to terms and conditions"
                                   className="ml-2 block text-sm text-silver">
                                   I agree to{" "}
                                   <Link
                                        to="$"
                                        className="text-sm text-blueish hover:cursor-pointer pb-px">
                                        terms and conditions
                                   </Link>
                              </label>
                         </div>
                         <div className="flex items-center justify-between pb-8">
                              <div className="flex space-x-3 items-center">
                                   <p className="text-sm text-gray-500">
                                        Show Password
                                   </p>
                                   <Slider
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                   />
                              </div>
                              <Button theme="primary">Get Started!</Button>

                              {isSubmitting && (
                                   <FaSpinner className="mt-5 animate-spin"></FaSpinner>
                              )}
                         </div>
                         <AuthFooter />
                    </form>
               </div>
          </div>
     );
};

Signup.defaultProps = {};

export default memo(Signup);
