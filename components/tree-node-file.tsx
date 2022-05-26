import React, { FunctionComponent } from "react";
import themeJson from "../lib/vs-seti-icon-theme.json";
import { File } from "./tree";

type TreeNodeFileProps = {
  node: File;
  level: number;
};

const knownInconsistencies: {
  [key: string]: keyof typeof themeJson.languageIds;
} = {
  ".md": "markdown",
};

const TreeNodeFile: FunctionComponent<TreeNodeFileProps> = ({
  node,
  level,
}) => {
  const hanndleClick = () => {
    console.log({ node });
  };

  const id: string =
    (themeJson.fileNames as any)[node.name.toLowerCase()] ||
    (themeJson.fileExtensions as any)[node.ext.replace(".", "")] ||
    (themeJson.languageIds as any)[knownInconsistencies[node.ext]] ||
    "_default";
  const def = (themeJson.iconDefinitions as any)[id] as {
    fontCharacter: string;
    fontColor: string;
  };

  return (
    <li
      onClick={hanndleClick}
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
