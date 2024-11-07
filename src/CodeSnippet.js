import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as lightTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={lightTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

// Add PropTypes validation
CodeSnippet.propTypes = {
  language: PropTypes.string.isRequired, // Ensure language is a string and required
  code: PropTypes.string.isRequired,     // Ensure code is a string and required
};

export default CodeSnippet;
