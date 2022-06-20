import React, { FunctionComponent, useState, MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import { VscClose, VscPreview } from "react-icons/vsc";
import { resolveIcon } from "../lib/file-icon";
import { EditorFile, activeEditorState, editorState } from "../store/app";

type EditorProps = {
  file: EditorFile;
};

const EditorTab: FunctionComponent<EditorProps> = ({ file }) => {
  const [showClose, setShowClose] = useState(false);
  const setActive = useSetRecoilState(activeEditorState);
  const setEditor = useSetRecoilState(editorState(file.path));

  const handleClick = () => {
    setActive({ ...file, active: true });
  };

  const handleClose = (e: MouseEvent) => {
    setEditor(null);
    e.stopPropagation();
  };

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
        file.active ? "bg-[#1e1e1e]" : "bg-[#2d2d2d]"
      }`}
    >
      <span className="ml-4 flex-shrink-0 flex">
        <span className="w-5">
          {file.path.endsWith(".preview") ? (
            <span className="flex h-full items-center">
              <VscPreview className=" fill-white" />
            </span>
          ) : (
            <span className={`icon icon${id}`} />
          )}
        </span>
        <span className={file.active ? "text-white" : "text-gray-400"}>
          {file.name}
        </span>
      </span>
      <span className="mr-2 p-[2px] rounded hover:bg-[hsla(0,0%,100%,.125)]">
        <VscClose
          onClick={handleClose}
          className={`${file.active ? "text-white" : "text-gray-400"} ${
            file.active || showClose ? "visible" : "invisible"
          }`}
        />
      </span>
    </label>
  );
};

export default EditorTab;
