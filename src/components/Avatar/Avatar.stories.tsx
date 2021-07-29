/** @format */

import Avatar from "./Avatar";
import "../../index.css";

export default {
     title: "Avatar",
     component: Avatar,
     argTypes: {
          image: {
               control: { type: "text" },
          },
     },
};

export const Main = (args: any) => <Avatar {...args}></Avatar>;

Main.args = {};
