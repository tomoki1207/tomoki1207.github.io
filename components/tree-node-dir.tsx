import React, { FunctionComponent, useState, useEffect } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import Tree from "./tree";
import { Dir } from "../store/app";

type TreeNodeDirProps = {
  node: Dir;
  level: number;
  initCollapse: boolean;
};

const TreeNodeDir: FunctionComponent<TreeNodeDirProps> = ({
  node,
  level,
  initCollapse,
}) => {
  const [colleapse, setColleapse] = useState(true);

  useEffect(() => {
    setColleapse(initCollapse);
  }, [initCollapse]);

  const toggleCollapse = () => {
    setColleapse(!colleapse);
  };

  return (
    <li>
      <label className="cursor-pointer" onClick={toggleCollapse}>
        <span
          className="flex items-center space-x-1 hover:bg-[hsla(0,0%,100%,.05)]"
          style={{ paddingLeft: `${level}em` }}
        >
          {colleapse ? <VscChevronRight /> : <VscChevronDown />}
          <span>{node.name}</span>
        </span>
      </label>
      <ul>
        {node.children.length > 0 && !colleapse && (
          <Tree nodes={node.children} initCollapse={true} level={level + 1} />
        )}
      </ul>
    </li>
  );
};

export default TreeNodeDir;
