/** @format */

import Button from "./Button";
import "../../index.css";
import * as heroIcons from "react-icons/hi";
import * as faIcons from "react-icons/fa";

const allIcons = { undefined, ...heroIcons, ...faIcons };

export default {
     title: "My awesome Button",
     component: Button,
     argTypes: {
          theme: {
               control: { type: "inline-radio" },
          },
          Icon: {
               options: Object.keys(allIcons),
               mapping: allIcons,
               control: {
                    type: "select",
               },
          },
          onClick: { action: "clicked" },
     },
};

export const Main = (args: any) => <Button {...args}></Button>;

Main.args = {
     children: "sign in",
     className: "",
     disabled: false,
};
