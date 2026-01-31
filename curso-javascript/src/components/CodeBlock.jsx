// CodeBlock.jsx
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css"; // el tema que prefieras

function CodeBlock({ code, language = "javascript" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

export default CodeBlock;
