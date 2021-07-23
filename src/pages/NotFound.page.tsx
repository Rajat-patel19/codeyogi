import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
     return (
          <div className="bg-green-500 h-screen w-screen">
               Sorry the page not found
          </div>
     );
};

NotFound.defaultProps = {};

export default memo(NotFound);
