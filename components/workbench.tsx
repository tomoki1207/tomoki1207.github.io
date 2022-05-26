import React, { FunctionComponent } from "react";
import TitleBar from "./titlebar";
import SideNav from "./sidenav";
import Explorer from "./explorer";
import Editor from "./editor";
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
        <div className="flex-1">
          {editors.map((editor, i) => (
            <Editor key={i} file={editor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkBench;
