import React, { ComponentProps, FunctionComponent, useState } from "react";
import TitleBar from "./titlebar";
import SideNav from "./sidenav";
import Explorer from "./explorer";
import Editor from "./editor";
import { Node } from "./tree";

type WorkBenchProps = {
  root: Node;
};

type EditorProps = Omit<ComponentProps<typeof Editor>, "active">;

const WorkBench: FunctionComponent<WorkBenchProps> = ({ root }) => {
  const [editors, setEditors] = useState([] as EditorProps[]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const addEditor = () => {
    const rand = Math.floor(Math.random() * 10);
    const title = `タイトル${rand}`;
    const found = editors.findIndex((e) => e.title === title);
    if (found !== -1) {
      setActiveIndex(found);
      return;
    }
    setActiveIndex(editors.length);
    setEditors([...editors, { title, content: "内容" }]);
  };

  return (
    <div className="w-full m-2 flex-1 flex flex-col bg-[#1c1c1c] rounded-xl">
      <TitleBar />
      <div className="flex-1 flex flex-row">
        <SideNav />
        <Explorer nodes={[root]} />
        {/* Editor tabs */}
        <div className="flex-1">
          <button onClick={addEditor}>追加</button>
          {editors.map((editor, i) => (
            <Editor key={i} active={i === activeIndex} {...editor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkBench;
