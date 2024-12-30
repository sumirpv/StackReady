import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  // Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const InterviewQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography
        variant="h5"
        align="center"
        color="primary"
        sx={{ marginBottom: 3 }}
      >
        Python Concepts Overview
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
        Full Stack Developer interview questions assess a candidate&apos;s
        ability to work across both frontend and backend technologies, as well
        as their knowledge of deployment, databases, and general web application
        architecture. These questions are designed to evaluate:
      </Typography>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
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
          <Typography>Closure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                for( let i =0 ; i < 3; i++){
                    setTimeout(() => {
                    console.log(i)
                    }, 1000)
                  }

                  console.log("after loop")

                  // Output:
                  // after loop
                  // 0
                  // 1
                  // 2
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                for( var i =0 ; i < 3; i++){
                  setTimeout(() => {
                  console.log(i)
                  }, 1000)
                }

                console.log("after loop");
                // Output:  after loop  3 3 3
              `}
            />
            1. Explain the difference in behavior between the two code snippets
            above and why this happens.
            <ul>
              <li>
                <strong>let:</strong> Creates a new block-scoped variable for
                each iteration, preserving the value for each callback.
              </li>
              <li>
                <strong>var:</strong> Shares a single variable across all
                iterations, leading to all callbacks referencing the final value
                of the variable.
              </li>
            </ul>
            2. How would you modify the second code snippet to achieve the same
            behavior as the first one using var?
            <CodeSnippet
              language="javascript"
              code={`
                for( var i =0 ; i < 3; i++){
                  ((j) => {
                    setTimeout(() => {
                    console.log(j)
                    }, 1000)
                  })(i)
                }
                console.log("after loop");
                // Output:  after loop  0 1 2
              `}
            />
            3. Explain the concept of event loop in JavaScript and how it
            handles asynchronous operations.
            <br />
            You can use an IIFE (Immediately Invoked Function Expression). This
            creates a new scope for each iteration, capturing the current value
            of i in a separate variable.
            <ul>
              <li>
                {`IIFE: The function ((j) => { ... })(i) is invoked immediately with i as an argument.`}
              </li>
              <li>
                Scoped Variable: Inside the IIFE, j captures the current value
                of i for that iteration.
              </li>
              <li>
                Preserved Value: Each callback inside setTimeout uses its own j,
                preserving the correct value.
              </li>
            </ul>
            The IIFE ensures that a new variable (j) is created for each iteration, mimicking the block-scoping behavior of let. Each setTimeout callback references the unique j created during its iteration.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default InterviewQuestions;
