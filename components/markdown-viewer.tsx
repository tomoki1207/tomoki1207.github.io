/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownViewerProps = {
  path: string;
};

const MarkdownViewer: FunctionComponent<MarkdownViewerProps> = ({ path }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetch(path.replace(/\.preview$/, ""));
      setContent(await res.text());
    };
    load();
  }, [path]);

  return (
    <Markdown
      className="prose prose-sm dark:prose-invert py-2 px-4 color-white"
      skipHtml={true}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
