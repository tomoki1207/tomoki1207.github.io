import React, { FunctionComponent } from "react";
import Tree, { Node } from "./tree";

type ExplorerProps = {
  nodes: Node[];
};

const Explorer: FunctionComponent<ExplorerProps> = ({ nodes }) => {
  return (
    <div className="w-1/6 bg-[#262626] text-[#c1c1c1]">
      <div className="text-xs pt-2 pb-2 pl-5">EXPLORER</div>
      <Tree nodes={nodes} level={0} initCollapse={false} />
    </div>
  );
};

export default Explorer;
