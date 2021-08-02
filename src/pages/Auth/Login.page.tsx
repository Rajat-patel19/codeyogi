/** @format */

import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import AuthFooter from "../../components/AuthFooter";
import ForgetPass from "../../components/ForgetPass";
import Slider from "../../components/Slider";
import Input from "../../components/Input/Input";
import { FiLock, FiUser } from "react-icons/fi";
import Button from "../../components/Button/Button";
import { login } from "../../api/auth";
import { useContext } from "react";
import AppContext from "../../App.context";

interface Props {}

const Login: FC<Props> = (props) => {
     const [showPassword, setShowPassword] = useState(false);

     const history = useHistory();

     const { setUser } = useContext(AppContext);

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
               }),
          onSubmit: (data) => {
               login(data).then((u) => {
                    setUser(u);
                    history.push("/dashboard");
               });
          },
     });
     return (
          <>
               <div className="min-h-screen flex items-center justify-center py-2 px-10 md:px-5 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                         <div className="text-left mb-16">
                              <h2 className="text-40 font-medium text-greyish mb-1">
                                   Log In to
                                   <span className="text-blueish text-40 font-semibold">
                                        {" "}
                                        CODEYOGI
                                   </span>
                              </h2>
                              <p className="text-sm text-greyish font-extrabold">
                                   New Here?{" "}
                                   <Link
                                        to="/signup"
                                        className="font-extrabold text-sm text-blueish hover:cursor-pointer pb-px border-blueish border-solid border-b">
                                        Create an account
                                   </Link>
                              </p>
                         </div>
                         <form
                              className="mt-8 space-y-3"
                              onSubmit={handleSubmit}>
                              <input
                                   type="hidden"
                                   name="remember"
                                   defaultValue="true"
                              />
                              <div className="space-y-6 outline-none bg-white pb-4">
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
                                        type={
                                             showPassword ? "text" : "password"
                                        }
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
                                   <Button theme="primary" type="submit">
                                        Log in
                                   </Button>

                                   {isSubmitting && (
                                        <FaSpinner className="mt-5 animate-spin"></FaSpinner>
                                   )}
                              </div>
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
                              <ForgetPass />
                              <AuthFooter />
                         </form>
                    </div>
               </div>
          </>
     );
};

Login.defaultProps = {};

export default memo(Login);
