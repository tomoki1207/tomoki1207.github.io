import React, { FunctionComponent } from "react";
import { resolveId } from "../lib/file-icon";
import { EditorFile } from "../store/app";
import CodeViewer from "./code-viewer";
import ImageViewer from "./image-viewer";
import MarkdownViewer from "./markdown-viewer";

type EditorProps = {
  file: EditorFile;
};

const Editor: FunctionComponent<EditorProps> = ({ file }) => {
  const fileType = resolveId(file.name, file.ext);

  switch (fileType) {
    case "_image":
      return <ImageViewer path={file.path} fileName={file.name} />;
    case "_markdown":
    case "_info":
      if (file.path.endsWith(".preview")) {
        return <MarkdownViewer path={file.path} />;
      }
      return <CodeViewer path={file.path} lang="markdown" />;
    case "_config":
      if (file.ext === ".editoconfig") {
        return <CodeViewer path={file.path} lang="editorconfig" />;
      }
      return <CodeViewer path={file.path} lang="ini" />;
    default: {
      return (
        <span className="p-2 text-[#858585] italic">
          Unsupported file type.
        </span>
      );
    }
  }
};

export default Editor;
