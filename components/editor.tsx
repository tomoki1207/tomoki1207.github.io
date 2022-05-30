import React, { FunctionComponent } from "react";
import { resolveId } from "../lib/file-icon";
import { EditorFile } from "../store/app";
import ImageViewer from "./image-viewer";

type EditorProps = {
  file: EditorFile;
};

const Editor: FunctionComponent<EditorProps> = ({ file }) => {
  const fileType = resolveId(file.name, file.ext);

  let content = null;
  switch (fileType) {
    case "_image":
      content = <ImageViewer path={file.path} fileName={file.name} />;
      break;
    case "_markdown":
    case "_info":
      content = (
        <div className="bg-gray-500">
          title: {file.name} {file.active && <span>*</span>} as {fileType}
          <br />
          content: {file.type}
        </div>
      );
      break;
    default: {
      content = (
        <span className="p-2 text-[#858585] italic">
          Unsupported file type.
        </span>
      );
    }
  }
  return <div className="h-full">{content}</div>;
};

export default Editor;
