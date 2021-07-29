/** @format */

import Alert from "./Alert";
import "../../index.css";
import * as heroIcons from "react-icons/hi";
import * as faIcons from "react-icons/fa";
import { HiOutlineShieldExclamation } from "react-icons/hi";

const allIcons = {
     undefined,
     ...heroIcons,
     ...faIcons,
     HiOutlineShieldExclamation,
};

export default {
     title: "Alert",
     component: Alert,
     argTypes: {
          defaultTheme: {
               control: { type: "inline-radio" },
          },
          outlineTheme: {
               control: { type: "inline-radio" },
          },
          solidTheme: {
               control: { type: "inline-radio" },
          },
          iconTheme: {
               control: { type: "inline-radio" },
          },
          arrowIconTheme: {
               control: { type: "inline-radio" },
          },
          Icon: {
               options: Object.keys(allIcons),
               mapping: allIcons,
               control: {
                    type: "select",
               },
          },
          ArrowIcon: {
               options: Object.keys(allIcons),
               mapping: allIcons,
               control: {
                    type: "select",
               },
          },
          IconPosition: {
               control: {
                    type: "inline-radio",
               },
          },
          arrowIconPosition: {
               control: {
                    type: "inline-radio",
               },
          },
     },
};

export const main = (args: any) => <Alert {...args}></Alert>;

main.args = {
     children: "Lorem Ipsum is simply dummy text of the printing.",
     className: "",
     disabled: false,
     IconPosition: undefined,
     arrowIconPosition: undefined,
};
