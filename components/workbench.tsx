import React, { FunctionComponent } from "react";
import TitleBar from "./titlebar";
import SideNav from "./sidenav";
import Explorer from "./explorer";
import EditorTab from "./editor-tab";
import { editorsState } from "../store/app";
import { useRecoilValue } from "recoil";

const WorkBench: FunctionComponent = () => {
  const editors = useRecoilValue(editorsState);

  return (
    <div className="w-full m-2 flex-1 flex flex-col bg-[#1c1c1c] rounded-xl">
      <TitleBar />
      <div className="flex-1 flex flex-row">
        <SideNav />
        <Explorer />
        {/* Editor tabs */}
        <div className="flex-1 bg-[#262626]">
          <div className="flex flex-row">
            {editors.map((editor, i) => (
              <EditorTab key={i} file={editor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBench;
