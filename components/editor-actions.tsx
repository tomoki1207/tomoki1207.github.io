import React, { FunctionComponent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { VscOpenPreview } from "react-icons/vsc";
import { activeEditorState } from "../store/app";

const EditorActions: FunctionComponent = () => {
  const [isMarkdown, setIsMarkdown] = useState(false);
  const [activeEditor, setActiveEditor] = useRecoilState(activeEditorState);

  useEffect(() => {
    setIsMarkdown(activeEditor?.path?.endsWith(".md") || false);
  }, [activeEditor]);

  const handlePreviewClick = () => {
    const src = activeEditor!!;
    setActiveEditor({
      ...src,
      path: `${src.path}.preview`,
      active: true,
    });
  };

  return (
    <span className="ml-auto mr-2 bg-[#252525] flex">
      {isMarkdown && (
        <button
          title="Open Preview"
          className="m-2"
          onClick={handlePreviewClick}
        >
          <VscOpenPreview className="fill-white" />
        </button>
      )}
    </span>
  );
};

export default EditorActions;
