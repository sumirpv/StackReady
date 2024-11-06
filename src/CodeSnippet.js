import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeSnippet = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={lightTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
