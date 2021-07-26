/** @format */

import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
     touched?: boolean;
     error?: string;
}

const Input: FC<Props> = ({
     children,
     touched,
     error,
     id,
     className,
     placeholder,
     ...rest
}) => {
     return (
          <div className="relative text-center">
               {id && placeholder && (
                    <label htmlFor={id} className="sr-only">
                         {placeholder}
                    </label>
               )}
               {children}
               <input
                    id={id}
                    {...rest}
                    className={
                         "appearance-none rounded-none block w-full px-3 py-2  placeholder-gray-500 text-gray-900 border-b pb-5 border-silver border-solid sm:text-sm focus:outline-none focus:border-blueish pl-10 " +
                         className
                    }
                    placeholder={placeholder}
               />
               {touched && <div className="text-red-500 absolute">{error}</div>}
          </div>
     );
};

Input.defaultProps = {
     touched: false,
     error: "",
};

export default memo(Input);
