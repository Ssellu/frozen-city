import React from "react";
import "katex/dist/katex.min.css";
import katex from "katex";
const LaTexInline = ({ latexString }) => {
  const htmlString = katex.renderToString(latexString, {
    throwOnError: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const LaTexBlock = ({ latexString }) => {
  const htmlString = katex.renderToString(latexString, {
    throwOnError: false,
  });

  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
export { LaTexInline, LaTexBlock };
