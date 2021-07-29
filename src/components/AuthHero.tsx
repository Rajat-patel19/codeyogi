/** @format */

import { FC, memo, useEffect } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
     console.log("AuthHero rendering");
     useEffect(() => {
          console.log("AuthHero Rendering for the first time.");
     }, []);
     return (
          <div className="h-screen w-1/2 bg-black bg-hero-auth relative text-white bg-center bg-no-repeat bg-75 hidden lg:block"></div>
     );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
