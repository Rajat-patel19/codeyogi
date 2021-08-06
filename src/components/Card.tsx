/** @format */

import { FC, ImgHTMLAttributes, memo } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
     title: string;
     content?: string;
     source: string | null;
}

const handleImgError = (e: any) => {
     e.target.src =
          "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg";
};

const Card: FC<Props> = ({ title, content, source }) => {
     return (
          <div className="flex justify-around px-4 py-4 items-center bg-transparent mx-3 mt-3 text-white">
               <img
                    src={"" + source}
                    alt="img"
                    onError={handleImgError}
                    className="h-20 w-20 rounded-full object-cover object-center"
               />
               <div className="ml-4 w-96">
                    <div className="pb-2 text-left">{title}</div>
                    <div className="pb-2 text-left">{content}</div>
               </div>
          </div>
     );
};

Card.defaultProps = {};

export default memo(Card);
