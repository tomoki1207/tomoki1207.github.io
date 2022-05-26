import React, { FunctionComponent } from "react";

type EditorProps = {
  active: Boolean;
  title: String;
  content: String;
};

const Editor: FunctionComponent<EditorProps> = ({ active, title, content }) => {
  return (
    <div>
      title: {title} {active && <span>*</span>}
      <br />
      content: {content}
    </div>
  );
};

export default Editor;
