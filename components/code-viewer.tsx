/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useEffect, useState } from "react";
import Prism from "prismjs";
import Highlight, { Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

// additional langs
require("prismjs/components/prism-ini");
require("prismjs/components/prism-markdown");
require("prismjs/components/prism-editorconfig");

type SupportedLangages = Language | "ini" | "editorconfig";

type CodeViewerProps = {
  path: string;
  lang: SupportedLangages;
};

const CodeViewer: FunctionComponent<CodeViewerProps> = ({ path, lang }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetch(path);
      setContent(await res.text());
    };
    load();
  });

  return (
    <Highlight
      Prism={Prism as any}
      code={content}
      language={lang as any}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " py-2 text-sm hover:cursor-text"}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i, className: "table-row" })}>
              <span className="table-cell text-right px-6 select-none text-gray-500">
                {i + 1}
              </span>
              <span className="table-cell">
                <span className="whitespace-pre-wrap">
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeViewer;
