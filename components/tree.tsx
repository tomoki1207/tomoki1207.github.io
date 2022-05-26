import React, { FunctionComponent } from "react";
import TreeNodeDir from "./tree-node-dir";
import TreeNodeFile from "./tree-node-file";
import { Node } from "../store/app";

type TreeProps = {
  nodes: Node[];
  level: number;
  initCollapse: boolean;
};

const Tree: FunctionComponent<TreeProps> = ({ nodes, level, initCollapse }) => {
  return (
    <ul>
      {nodes.map((node) => {
        switch (node.type) {
          case "Directory":
            return (
              <TreeNodeDir key={node.name} {...{ node, level, initCollapse }} />
            );
          case "File":
            return <TreeNodeFile key={node.name} {...{ node, level }} />;
          default:
            return <></>;
        }
      })}
    </ul>
  );
};
export default Tree;
