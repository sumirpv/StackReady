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
        TypeScript stands in an unusual relationship to JavaScript. TypeScript
        offers all of JavaScript&apos;s features, and an additional layer on top
        of these: TypeScript&apos;s type system.
        <br />
        For example, JavaScript provides language primitives like string and
        number, but it doesn&apos;t check that you&apos;ve consistently assigned
        these. TypeScript does.
        <br />
        This means that your existing working JavaScript code is also TypeScript
        code. The main benefit of TypeScript is that it can highlight unexpected
        behavior in your code, lowering the chance of bugs.
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
          <Typography>Advantages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                The TypeScript code can compile down to the JavaScript code that
                is runnable on every browser.
              </li>
              <li>
                It allow us to declare strongly or statically typed variables.
              </li>
              <li>
                It consist of advanced features like code completion,
                intelliSense etc.
              </li>
              <li>It supports namespace concept with the help of modules.</li>
              <li>
                TypeScript throw errors at the compilation time during
                development unlike of JavaScript that shows errors at the
                runtime.
              </li>
            </ul>
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
          <Typography>Disadvantages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                The concept of abstract classes is not supported by TypeScript.
              </li>
              <li>Code Compilation is a time taking process in TypeScript.</li>
              <li>
                A extra step of converting the TypeScript code into JavaScript
                code requires while running TypeScript.
              </li>
              <li>
                A definition file needs to be added for using any external or
                third party library. All the external libraries not have the
                definition file.
              </li>
              <li>
                The quality of all the definition files need to be correct.
              </li>
            </ul>
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
          <Typography>Data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            There are mainly two types of data types available in TypeScript:
            <ul>
              <li>
                <strong>Built-in data types: </strong>User-defined data types:
                <ul>
                  <li>
                    <strong>String: </strong>{" "}
                    {`It represents a text value like "GeeksforGeeks", or "Computer Science".`}
                  </li>
                  <li>
                    <strong>Number: </strong> It represents the numbered values
                    i.e. 2, 28, 99, etc.
                  </li>
                  <li>
                    <strong>Boolean: </strong> It stores true or false values.
                  </li>
                  <li>
                    <strong>Null: </strong>An empty value deliberately assigned
                    to a variable.
                  </li>
                  <li>
                    <strong>Undefined: </strong>Represents a variable that is
                    declared but not initialized.
                  </li>
                  <li>
                    <strong>any: </strong>Represents any value of any data type
                    and any number of values of different data types.
                  </li>
                  <li>
                    <strong>void: </strong>Used to represent that a particular
                    function is not going to return any value of any data type.
                  </li>
                </ul>
              </li>
              <li>
                <strong>User-defined data types: </strong>These are the data
                types that are defined by the user they may contain multiple
                values of multiple data types.
                <ul>
                  <li>
                    <strong>arrays: </strong>In typescript, arrays are used to
                    store the multiple values of any kind of data type.
                  </li>
                  <li>
                    <strong>enums: </strong>A special class that specifies the
                    constant variables.
                  </li>
                  <li>
                    <strong>classes: </strong>Used to store different data type
                    values in the form of key-value pairs.
                  </li>
                  <li>
                    <strong>Interface: </strong>These represent the basic syntax
                    and blueprint that an entity must adhere to.
                  </li>
                </ul>
              </li>
            </ul>
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
          <Typography>Variables in TypeScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Three ways in which we can declare variables:
            <ul>
              <li>
                <strong>var: </strong>Has function scope, not block scope (which
                can lead to issues). Historically used in JavaScript, but let
                and const are preferred for better scoping and clarity.
                <CodeSnippet
                  language="javascript"
                  code={`
                    var x = 10; // Function-scoped
                  `}
                />
              </li>
              <li>
                <strong>let: </strong>Used to declare variables that can be
                reassigned. Scoped to the block, statement, or expression where
                it is defined. Supports type inference or explicit type
                annotations.
                <CodeSnippet
                  language="javascript"
                  code={`
                    let age: number = 30; // Explicit type
                    let name = 'John'; // Type inferred as string
                    age = 31; // Reassigned value
                  `}
                />
              </li>
              <li>
                <strong>const: </strong>Used to declare variables that cannot be
                reassigned. Also scoped to the block, statement, or expression
                where it is defined. Supports type inference or explicit type
                annotations.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const pi: number = 3.14; // Explicit type
                    const greeting = 'Hello'; // Type inferred as string
                    // pi = 3.14159; // Error: cannot reassign a const variable
                  `}
                />
              </li>
            </ul>
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
          <Typography>Conditional Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Conditional types allow you to define types based on conditions
            using the ternary (extends ? :) syntax.
            <br />
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
            TypeScript provides built-in utility types for common use cases.
            <br />
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
          <Typography>Explicit variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Explicit variables in TypeScript are declared with a specific type
            annotation using : followed by the type. This ensures strict
            type-checking and prevents unintended type changes.
            <CodeSnippet
              language="javascript"
              code={`
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
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
      </Accordion> */}
      {/* <Accordion
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
      </Accordion> */}
    </Container>
  );
};

export default TypeScript;
