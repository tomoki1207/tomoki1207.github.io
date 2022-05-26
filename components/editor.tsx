import React, { FunctionComponent } from "react";
import { EditorFile } from "../store/app";

type EditorProps = {
  file: EditorFile;
};

const Editor: FunctionComponent<EditorProps> = ({ file }) => {
  return (
    <div className="bg-gray-500">
      title: {file.name} {file.active && <span>*</span>}
      <br />
      content: {file.type}
    </div>
  );
};

export default Editor;
