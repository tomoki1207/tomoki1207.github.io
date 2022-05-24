import React, { FunctionComponent } from "react";

type EdtorProps = {
  active: Boolean;
  title: String;
  content: String;
};

const Editor: FunctionComponent<EdtorProps> = ({
  active,
  title,
  content,
}: EdtorProps) => {
  return (
    <div>
      title: {title} {active && <span>*</span>}
      <br />
      content: {content}
    </div>
  );
};

export default Editor;
