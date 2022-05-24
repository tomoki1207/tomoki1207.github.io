import React, { ComponentProps, FunctionComponent, useState } from "react";
import Editor from "./editor";

type EditorProps = Omit<ComponentProps<typeof Editor>, "active">;

const WorkBench: FunctionComponent = () => {
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
      {/* Menu bar */}
      <div className="w-full bg-[#2e2e2e] rounded-t-xl flex items-center bg-offset p-3 py-1">
        <div className="flex space-x-[7px]">
          <div className="h-[11px] w-[11px] rounded-full bg-[#ff605c]"></div>
          <div className="h-[11px] w-[11px] rounded-full bg-[#ffbd44]"></div>
          <div className="h-[11px] w-[11px] rounded-full bg-[#00ca4e]"></div>
        </div>
        <div className="flex-1 text-center text-xs text-[#7a7a7a]">
          Maruyama Tomoki
        </div>
      </div>

      {/* Main Content*/}
      <div className="flex-1 flex flex-row">
        {/* Icons */}
        <div className="w-12 bg-[#2e2e2e] rounded-bl-xl"></div>
        {/* Tree pain */}
        <div className="w-1/6 bg-[#262626]"></div>
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
