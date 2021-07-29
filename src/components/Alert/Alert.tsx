/** @format */

import { ButtonHTMLAttributes, FC, memo } from "react";
import { IconType } from "react-icons";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
     children?: string;
     Icon?: IconType;
     ArrowIcon?: IconType;
     IconPosition?: "right" | "left";
     arrowIconPosition?: "right" | "left";
     defaultTheme?:
          | "primary"
          | "warning"
          | "success"
          | "info"
          | "errorBlack"
          | "errorRed"
          | "undefined";
     outlineTheme?:
          | "primary"
          | "warning"
          | "success"
          | "info"
          | "errorBlack"
          | "errorRed"
          | "undefined";
     solidTheme?:
          | "primary"
          | "warning"
          | "success"
          | "info"
          | "errorBlack"
          | "errorRed"
          | "undefined";
     iconTheme?:
          | "primary"
          | "warning"
          | "success"
          | "info"
          | "errorBlack"
          | "errorRed"
          | "undefined";
     arrowIconTheme?:
          | "primary"
          | "warning"
          | "success"
          | "info"
          | "errorBlack"
          | "errorRed"
          | "undefined";
}

const Alert: FC<Props> = ({
     children,
     className,
     outlineTheme,
     defaultTheme,
     Icon,
     ArrowIcon,
     IconPosition,
     arrowIconPosition,
     solidTheme,
     iconTheme,
     arrowIconTheme,
     ...rest
}) => {
     const defaultThemeClasses =
          defaultTheme === "undefined"
               ? ""
               : defaultTheme === "primary"
               ? "bg-bgPrimary text-blueish border-0"
               : defaultTheme === "warning"
               ? "text-warning bg-bgWarning border-0"
               : defaultTheme === "success"
               ? "bg-bgSuccess text-success border-0"
               : defaultTheme === "info"
               ? "bg-bgInfo text-info border-0"
               : defaultTheme === "errorBlack"
               ? "bg-bgErrorBlack text-errorBlack border-0"
               : defaultTheme === "errorRed"
               ? "bg-bgErrorRed text-errorRed border-0"
               : "";

     const solidThemeClasses =
          solidTheme === "undefined"
               ? ""
               : solidTheme === "primary"
               ? "bg-blueish text-white"
               : solidTheme === "warning"
               ? "text-white  bg-warning"
               : solidTheme === "success"
               ? "bg-success  text-white"
               : solidTheme === "info"
               ? "bg-info  text-white"
               : solidTheme === "errorBlack"
               ? "bg-errorBlack text-white"
               : solidTheme === "errorRed"
               ? "bg-errorRed text-white"
               : "";

     const popPad =
          IconPosition === "right"
               ? "pr-20"
               : IconPosition === "left"
               ? "pl-20"
               : " ";

     const arrowPopPad =
          arrowIconPosition === "right"
               ? "pr-20"
               : arrowIconPosition === "left"
               ? "pl-20"
               : " ";

     const outlineThemeClasses =
          outlineTheme === "undefined"
               ? ""
               : outlineTheme === "primary"
               ? "bg-white border-blueish text-silver border"
               : outlineTheme === "warning"
               ? "text-silver border-warning bg-white border"
               : outlineTheme === "success"
               ? "bg-white border-success text-silver border"
               : outlineTheme === "info"
               ? "bg-white border-info text-silver border"
               : outlineTheme === "errorBlack"
               ? "bg-white border-errorBlack text-silver border"
               : outlineTheme === "errorRed"
               ? "bg-white border-errorRed text-silver border"
               : "";

     const IconThemeClasses =
          iconTheme === "undefined"
               ? ""
               : iconTheme === "primary"
               ? "bg-bgPrimary text-blueish border-blueish"
               : iconTheme === "warning"
               ? "bg-bgWarning text-warning border-warning"
               : iconTheme === "success"
               ? "bg-bgSuccess text-success border-success"
               : iconTheme === "info"
               ? "bg-bgInfo  text-info border-info"
               : iconTheme === "errorBlack"
               ? "bg-bgErrorBlack  text-errorBlack border-errorBlack"
               : iconTheme === "errorRed"
               ? "bg-bgErrorRed text-errorRed border-errorRed"
               : "";

     const arrowedIconThemeClasses =
          arrowIconTheme === "undefined"
               ? ""
               : arrowIconTheme === "primary"
               ? "bg-bgPrimary text-blueish border-blueish"
               : arrowIconTheme === "warning"
               ? "bg-bgWarning text-warning border-warning"
               : arrowIconTheme === "success"
               ? "bg-bgSuccess text-success border-success"
               : arrowIconTheme === "info"
               ? "bg-bgInfo  text-info border-info"
               : arrowIconTheme === "errorBlack"
               ? "bg-bgErrorBlack  text-errorBlack border-errorBlack"
               : arrowIconTheme === "errorRed"
               ? "bg-bgErrorRed text-errorRed border-errorRed"
               : "";

     const iconPositionClass =
          IconPosition === "left"
               ? "left-0 rounded-l"
               : IconPosition === "right"
               ? "right-0 rounded-r"
               : "";

     const arrowIconPositionClass =
          arrowIconPosition === "left"
               ? "left-0 rounded-l"
               : arrowIconPosition === "right"
               ? "right-0 rounded-r"
               : "";

     const iconBox =
          iconTheme === "undefined"
               ? ""
               : iconTheme === "primary"
               ? "bg-blueish border-blueish"
               : iconTheme === "warning"
               ? "bg-warning border-warning"
               : iconTheme === "success"
               ? "bg-success border-success"
               : iconTheme === "info"
               ? "bg-info border-info"
               : iconTheme === "errorBlack"
               ? "bg-errorBlack border-errorBlack"
               : iconTheme === "errorRed"
               ? "bg-errorRed border-errorRed"
               : "";

     const arrowIconBox =
          arrowIconTheme === "undefined"
               ? ""
               : arrowIconTheme === "primary"
               ? "text-blueish bg-blueish"
               : arrowIconTheme === "warning"
               ? "text-warning bg-warning"
               : arrowIconTheme === "success"
               ? "text-success bg-success"
               : arrowIconTheme === "info"
               ? "text-info bg-info"
               : arrowIconTheme === "errorBlack"
               ? "text-errorBlack bg-errorBlack"
               : arrowIconTheme === "errorRed"
               ? "text-errorRed bg-errorRed"
               : "";
     const arrowIconBoxBG =
          arrowIconTheme === "undefined"
               ? ""
               : arrowIconTheme === "primary"
               ? "text-blueish"
               : arrowIconTheme === "warning"
               ? "text-warning"
               : arrowIconTheme === "success"
               ? "text-success"
               : arrowIconTheme === "info"
               ? "text-info"
               : arrowIconTheme === "errorBlack"
               ? "text-errorBlack"
               : arrowIconTheme === "errorRed"
               ? "text-errorRed"
               : "";

     return (
          <div>
               <div
                    className={
                         "p-4 w-full flex justify-between rounded-md mb-4 " +
                         defaultThemeClasses +
                         " " +
                         className
                    }
                    role="alert">
                    {" "}
                    <p>{children}</p>
                    <button
                         {...rest}
                         type="button"
                         className=""
                         data-dismiss="alert"
                         aria-label="Close">
                         {" "}
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className=""
                              data-dismiss="alert">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                    </button>{" "}
               </div>
               <div
                    className={
                         "p-4 w-full flex justify-between rounded-md mb-4 " +
                         outlineThemeClasses +
                         " " +
                         className
                    }
                    role="alert">
                    {" "}
                    <p>{children}</p>
                    <button
                         {...rest}
                         type="button"
                         className=""
                         data-dismiss="alert"
                         aria-label="Close">
                         {" "}
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className=""
                              data-dismiss="alert">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                    </button>{" "}
               </div>
               <div
                    className={
                         "p-4 w-full flex justify-between rounded-md mb-4 " +
                         solidThemeClasses +
                         " " +
                         className
                    }
                    role="alert">
                    {" "}
                    <p>{children}</p>
                    <button
                         {...rest}
                         type="button"
                         className=""
                         data-dismiss="alert"
                         aria-label="Close">
                         {" "}
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className=""
                              data-dismiss="alert">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                    </button>{" "}
               </div>

               <div
                    className={
                         " relative mb-4 py-4 w-full flex justify-between border rounded-md px-3 " +
                         IconThemeClasses +
                         " " +
                         className
                    }
                    role="alert">
                    <div className={"flex w-full justify-between " + popPad}>
                         <p>{children}</p>
                         <button
                              {...rest}
                              type="button"
                              className=""
                              data-dismiss="alert"
                              aria-label="Close">
                              {" "}
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   stroke-width="2"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   className=""
                                   data-dismiss="alert">
                                   <line x1="18" y1="6" x2="6" y2="18"></line>
                                   <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                         </button>{" "}
                    </div>
                    {Icon && IconPosition !== undefined && (
                         <div
                              className={
                                   "absolute bottom-0 top-0 flex items-center justify-center w-16 " +
                                   iconBox +
                                   " " +
                                   iconPositionClass
                              }>
                              <Icon className="text-white" />
                         </div>
                    )}
               </div>
               <div
                    className={
                         " relative mb-4 py-4 w-full flex justify-between border rounded-md px-3 " +
                         arrowedIconThemeClasses +
                         " " +
                         className
                    }
                    role="alert">
                    <div
                         className={
                              "flex w-full justify-between " + arrowPopPad
                         }>
                         <p>{children}</p>
                         <button
                              {...rest}
                              type="button"
                              className=""
                              data-dismiss="alert"
                              aria-label="Close">
                              {" "}
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="24"
                                   height="24"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   stroke-width="2"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   className=""
                                   data-dismiss="alert">
                                   <line x1="18" y1="6" x2="6" y2="18"></line>
                                   <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                         </button>{" "}
                    </div>
                    {ArrowIcon && arrowIconPosition !== undefined && (
                         <div
                              className={
                                   "absolute bottom-0 top-0 flex items-center justify-center w-16 " +
                                   arrowIconBox +
                                   " " +
                                   arrowIconPositionClass
                              }>
                              <ArrowIcon className="text-white" />
                         </div>
                    )}
                    {ArrowIcon &&
                         arrowIconTheme !== "undefined" &&
                         arrowIconTheme !== undefined &&
                         arrowIconPosition === "left" && (
                              <AiFillCaretRight
                                   className={
                                        "absolute bottom-0 top-0 left-0 h-full w-32 bg-none bg-transparent" +
                                        arrowIconBoxBG
                                   }
                              />
                         )}
                    {ArrowIcon &&
                         arrowIconTheme !== "undefined" &&
                         arrowIconTheme !== undefined &&
                         arrowIconPosition === "right" && (
                              <AiFillCaretLeft
                                   className={
                                        "absolute bottom-0 top-0 right-0 h-full w-32 bg-transparent" +
                                        arrowIconBoxBG
                                   }
                              />
                         )}
               </div>
          </div>
     );
};

Alert.defaultProps = {};

export default memo(Alert);
