import React, { FunctionComponent } from "react";
import { useSetRecoilState } from "recoil";
import { resolveIcon } from "../lib/file-icon";
import { File, activeEditorState } from "../store/app";

type TreeNodeFileProps = {
  node: File;
  level: number;
};

const TreeNodeFile: FunctionComponent<TreeNodeFileProps> = ({
  node,
  level,
}) => {
  const setActiveEditor = useSetRecoilState(activeEditorState);

  const handleClick = () => {
    setActiveEditor({ ...node, active: true });
  };

  const { id, def } = resolveIcon(node.name, node.ext);

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer flex items-center hover:bg-[hsla(0,0%,100%,.05)]"
    >
      <style>
        {`.icon${id}:before {
            content: "${def.fontCharacter}";
            color: ${def.fontColor}
          }`}
      </style>
      <span style={{ paddingLeft: `${level}.5em` }}>
        <span className="w-5 mr-1">
          <span className={`icon icon${id}`} />
        </span>
        {node.name}
      </span>
    </li>
  );
};

export default TreeNodeFile;
