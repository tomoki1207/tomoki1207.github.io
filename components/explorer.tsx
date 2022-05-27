import React, { FunctionComponent } from "react";
import Tree from "./tree";
import { treeState } from "../store/app";
import { useRecoilValue } from "recoil";

const Explorer: FunctionComponent = () => {
  const tree = useRecoilValue(treeState);
  return (
    <div className="w-1/6 bg-[#262626] text-[#c1c1c1]">
      <div className="text-xs pt-2 pb-2 pl-5">EXPLORER</div>
      {tree && <Tree nodes={[tree]} level={0} initCollapse={false} />}
    </div>
  );
};

export default Explorer;
