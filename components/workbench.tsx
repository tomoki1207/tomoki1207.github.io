import React, { FunctionComponent } from "react";
import TitleBar from "./titlebar";
import SideNav from "./sidenav";
import Explorer from "./explorer";
import EditorTab from "./editor-tab";
import { editorsState, activeEditorState } from "../store/app";
import { useRecoilValue } from "recoil";
import Editor from "./editor";
import EditorActions from "./editor-actions";

const WorkBench: FunctionComponent = () => {
  const editors = useRecoilValue(editorsState);
  const activeEditor = useRecoilValue(activeEditorState);

  return (
    <div className="w-full m-2 flex-1 flex flex-col bg-[#1c1c1c] rounded-xl shadow-md shadow-[#525364]">
      <TitleBar />
      <div className="flex-1 flex flex-row">
        <SideNav />
        <Explorer />
        <div className="h-[92vh] overflow-y-hidden flex-1 flex flex-col bg-[#262626] rounded-br-xl">
          {activeEditor && (
            <div className="flex flex-row">
              {editors.map((editor) => (
                <EditorTab key={editor.path} file={editor} />
              ))}
              <EditorActions />
            </div>
          )}
          {activeEditor ? (
            <div className="max-w-full py-1 flex-1 overflow-y-scroll bg-[#1e1e1e]">
              <Editor file={activeEditor} />
            </div>
          ) : (
            <div className="w-full h-full bg-[#1e1e1e] flex justify-center items-center text-gray-400">
              Please Select a File
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkBench;
