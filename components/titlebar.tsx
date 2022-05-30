import React, { FunctionComponent } from "react";

const TitleBar: FunctionComponent = () => {
  return (
    <div className="w-full bg-[#3c3c3c] rounded-t-xl flex items-center bg-offset p-3 py-1">
      <div className="flex space-x-[7px]">
        <div className="h-[11px] w-[11px] rounded-full bg-[#ff605c]"></div>
        <div className="h-[11px] w-[11px] rounded-full bg-[#ffbd44]"></div>
        <div className="h-[11px] w-[11px] rounded-full bg-[#00ca4e]"></div>
      </div>
      <div className="flex-1 text-center text-xs text-[#b1b1b1]">
        Maruyama Tomoki
      </div>
    </div>
  );
};

export default TitleBar;
