import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  // TableContainer,
  // Table,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableBody,
  // Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const TypeScript = () => {
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
        Type Script Concepts Overview
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
        TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript&apos;s features, and an additional layer on top of these: TypeScript&apos;s type system.
        <br />
        For example, JavaScript provides language primitives like string and number, but it doesn&apos;t check that you&apos;ve consistently assigned these. TypeScript does.
        <br />
        This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
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
          <Typography>TypeScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>

          </Typography>
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
          <Typography>Conditional Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          Conditional types allow you to define types based on conditions using the ternary (extends ? :) syntax.<br/>
          <strong>Example: Basic Conditional Type</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type IsString<T> = T extends string ? "Yes" : "No";

              type Test1 = IsString<string>; // "Yes"
              type Test2 = IsString<number>; // "No"
            `}
          />
          <strong>Example: Exclude Certain Types</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type ExcludeNumber<T> = T extends number ? never : T;

              type WithoutNumber = ExcludeNumber<string | number | boolean>; // string | boolean
            `}
          />
          </Typography>
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
          <Typography>Utility Types (Reusable Types)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          TypeScript provides built-in utility types for common use cases.<br />
          <strong>Pick (Select Specific Properties)</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type Person = {
                name: string;
                age: number;
                email: string;
              };

              type BasicInfo = Pick<Person, "name" | "email">;
              // { name: string; email: string; }
            `}
          />
          <strong>Omit (Remove Specific Properties)</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type WithoutEmail = Omit<Person, "email">;
              // { name: string; age: number; }
            `}
          />
          <strong>Partial (Make Properties Optional)</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type PartialPerson = Partial<Person>;
              // { name?: string; age?: number; email?: string; }
            `}
          />
          <strong>Required (Make All Properties Required)</strong>
          <CodeSnippet
            language="javascript"
            code={`
              type CompletePerson = Required<PartialPerson>;
              // { name: string; age: number; email: string; }
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
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
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
            `}
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default TypeScript;
