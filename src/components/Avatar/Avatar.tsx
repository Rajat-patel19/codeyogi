/** @format */

import { FC, memo } from "react";
import { Url } from "url";

export interface Props {
     online?: true | false | undefined;
     rounded?: "circle" | "rounded-rectangle";
     thumbnail?: "image" | "name-tag";
     animate?: "x-axis" | "y-axis" | "none";
     image?: string;
}

const Avatar: FC<Props> = ({ online, rounded, thumbnail, animate, image }) => {
     const isonline =
          online === undefined
               ? " "
               : online === true
               ? "border-4 border-white bg-green-700"
               : "border-4 border-white bg-silver";

     const isrounded = rounded === "circle" ? "rounded-50" : "rounded";

     const animating =
          animate === "none"
               ? "ml-2"
               : animate === "x-axis"
               ? "transform hover:translate-x-2 -ml-3 border-white border-2"
               : "transform hover:-translate-y-2 -ml-3 border-white border-2";

     return (
          <div className="flex items-center">
               <div
                    className={
                         "relative text-xl text-center bg-cover w-20 h-20 bg-center " +
                         " " +
                         isrounded +
                         " " +
                         animating
                    }>
                    {thumbnail === "image" && (
                         <img
                              src={"" + image}
                              className={
                                   "absolute w-20 h-20 object-cover object-center " +
                                   isrounded
                              }></img>
                    )}
                    {thumbnail === "name-tag" && (
                         <span
                              className={
                                   "absolute inset-0 bg-silver text-center place-content-center text-white flex items-center " +
                                   isrounded
                              }>
                              AG
                         </span>
                    )}
                    <div
                         className={
                              "absolute bottom-one right-five w-4/12 h-1/3 rounded-50 " +
                              isonline
                         }></div>
               </div>
               <div
                    className={
                         "relative text-center text-lg bg-cover w-16 h-16 bg-center " +
                         " " +
                         isrounded +
                         " " +
                         animating
                    }>
                    {thumbnail === "image" && (
                         <img
                              src={"" + image}
                              className={
                                   "absolute inset-0 w-16 h-16 object-cover object-center " +
                                   isrounded
                              }></img>
                    )}
                    {thumbnail !== "image" && (
                         <span
                              className={
                                   "absolute inset-0 bg-silver text-center place-content-center text-white flex items-center " +
                                   isrounded
                              }>
                              AG
                         </span>
                    )}
                    <div
                         className={
                              "absolute bottom-one right-five w-4/12 h-1/3 rounded-50 " +
                              isonline
                         }></div>
               </div>
               <div
                    className={
                         "relative text-center text-base bg-cover rounded-50 w-12 h-12 bg-center " +
                         " " +
                         isrounded +
                         " " +
                         animating
                    }>
                    {thumbnail === "image" && (
                         <img
                              src={"" + image}
                              className={
                                   "absolute inset-0 w-12 h-12 object-cover object-center " +
                                   isrounded
                              }></img>
                    )}
                    {thumbnail !== "image" && (
                         <span
                              className={
                                   "absolute inset-0 bg-silver text-center place-content-center text-white flex items-center " +
                                   isrounded
                              }>
                              AG
                         </span>
                    )}
                    <div
                         className={
                              "absolute bottom-one right-five w-4/12 h-1/3 rounded-50 " +
                              isonline
                         }></div>
               </div>
               <div
                    className={
                         "relative w-10 h-10 text-sm text-center bg-cover bg-center rounded-50" +
                         " " +
                         isrounded +
                         " " +
                         animating
                    }>
                    {thumbnail === "image" && (
                         <img
                              src={"" + image}
                              className={
                                   "absolute inset-0 w-10 h-10 object-cover object-center " +
                                   isrounded
                              }></img>
                    )}
                    {thumbnail !== "image" && (
                         <span
                              className={
                                   "absolute inset-0 bg-silver text-center place-content-center text-white flex items-center " +
                                   isrounded
                              }>
                              AG
                         </span>
                    )}
                    <div
                         className={
                              "absolute bottom-one right-five w-4/12 h-1/3 rounded-50 " +
                              isonline
                         }></div>
               </div>
          </div>
     );
};

Avatar.defaultProps = {
     rounded: "circle",
     thumbnail: "image",
     animate: "none",
     image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
};

export default memo(Avatar);
