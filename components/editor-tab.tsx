import React, { FunctionComponent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { VscClose } from "react-icons/vsc";
import { resolveIcon } from "../lib/file-icon";
import { EditorFile, activeEditorState } from "../store/app";

type EditorProps = {
  file: EditorFile;
};

const EditorTab: FunctionComponent<EditorProps> = ({ file }) => {
  const [showClose, setShowClose] = useState(false);
  const setActive = useSetRecoilState(activeEditorState);

  const handleClick = () => {
    setActive({ ...file, active: true });
  };

  const handleClose = () => {};

  const handleMouseEnter = () => {
    setShowClose(true);
  };
  const handleMouseLeave = () => {
    setShowClose(false);
  };

  const { id } = resolveIcon(file.name, file.ext);

  return (
    <label
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-40 h-9 cursor-pointer flex items-center justify-between border-[#171717] border-r-[1px] ${
        file.active ? "bg-[#171717]" : "bg-[#222]"
      }`}
    >
      <span className="ml-4 flex-shrink-0 flex">
        <span className="w-5">
          <span className={`icon icon${id}`} />
        </span>
        <span className={file.active ? "text-white" : "text-gray-400"}>
          {file.name}
        </span>
      </span>
      <VscClose
        onClick={handleClose}
        className={`mr-2 h-[1.1em] w-[1.1em] ${
          file.active ? "text-white" : "text-gray-400"
        } ${file.active || showClose ? "visible" : "invisible"}`}
      />
    </label>
  );
};

export default EditorTab;
