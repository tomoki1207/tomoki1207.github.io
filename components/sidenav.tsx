import React, { FunctionComponent } from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscGithub,
} from "react-icons/vsc";

const SideNav: FunctionComponent = () => {
  return (
    <div className="w-12 bg-[#2e2e2e] rounded-bl-xl flex flex-col items-center text-[#727272]">
      <div className="w-full mt-4 flex-1 flex flex-col space-y-6 items-center">
        <div className="w-full border-l-2 border-white text-white flex justify-center">
          <VscFiles className="h-[1.5em] w-[1.5em] " />
        </div>
        <VscSearch className="h-[1.5em] w-[1.5em]" />
        <VscSourceControl className="h-[1.5em] w-[1.5em]" />
        <VscDebugAlt className="h-[1.5em] w-[1.5em]" />
        <VscExtensions className="h-[1.5em] w-[1.5em]" />
      </div>
      <div className="mb-4 flex flex-col space-y-2">
        <VscGithub className="h-[1.5em] w-[1.5em]" />
      </div>
    </div>
  );
};

export default SideNav;
