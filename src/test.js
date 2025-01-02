import {
  Accordion,
  // AccordionActions,
  AccordionSummary,
  AccordionDetails,
  // Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Fade from "@mui/material/Fade";
import CodeSnippet from "./CodeSnippet";

const TestInfo = () => {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpansion = () => {
  //   setExpanded((prevExpanded) => !prevExpanded);
  // };

  //   import { HashRouter as Router, Routes, Route } from 'react-router-dom';

  // function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         {/* Your routes here */}
  //       </Routes>
  //     </Router>
  //   );
  // }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: 3,
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
        </AccordionDetails>
      </Accordion>

      <ul>
        <li>
          <strong></strong>
        </li>
        <li>
          <strong></strong>
        </li>
        <li>
          <strong></strong>
        </li>
      </ul>

      <br />

      <CodeSnippet
        language="javascript"
        code={`
         `}
      />

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <CodeSnippet
        language="javascript"
        code={`
                /* styles.css */
                  .container {
                    padding: 20px;
                    background-color: lightblue;
                  }
              `}
      />
      <CodeSnippet
        language="javascript"
        code={`
                // Component.js
                import React from 'react';
                import './styles.css';

                function MyComponent() {
                  return <div className="container">Hello, World!</div>;
                }

                export default MyComponent;
              `}
      />

      <CodeSnippet
        language="javascript"
        code={`
                function MyComponent() {
                  const divStyle = {
                    padding: '20px',
                    backgroundColor: 'lightblue'
                  };

                  return <div style={divStyle}>Hello, World!</div>;
                }

                export default MyComponent;
              `}
      />

      <CodeSnippet
        language="javascript"
        code={`
                /* styles.module.css */
                .container {
                  padding: 20px;
                  background-color: lightblue;
                }
              `}
      />
      <CodeSnippet
        language="javascript"
        code={`
                // Component.js
                import React from 'react';
                import styles from './styles.module.css';

                function MyComponent() {
                  return <div className={styles.container}>Hello, World!</div>;
                }

                export default MyComponent;
              `}
      />
    </div>
  );
};

export default TestInfo;
