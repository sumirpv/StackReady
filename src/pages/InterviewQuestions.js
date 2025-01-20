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
        Interview Questions Overview
      </Typography>
      <Typography sx={{ fontWeight: 500, margin: "0 auto 20px", width: "80%" }}>
        Full Stack Developer interview questions assess a candidate&apos;s
        ability to work across both frontend and backend technologies, as well
        as their knowledge of deployment, databases, and general web application
        architecture. These questions are designed to evaluate:
      </Typography>
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
          <Typography>client-side vs server-side</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                <strong>Client-side:</strong>
                {`Client-side refers to processes that are carried out on the user's device, typically in the user's web browser. These processes are executed after the website or web application has been delivered to the user's device, and they can include tasks such as rendering and displaying a web page, handling user interactions, or running JavaScript code.`}
                <ul>
                  <li>
                    When you type text into a form on a website, the input is
                    processed and displayed on the screen using client-side
                    JavaScript code running in your browser.
                  </li>
                  <li>
                    Data access:client-side usually only receives processed data
                    from the server.
                  </li>
                  <li>
                    Faster interaction as it avoids round trips to the server
                    for certain tasks.
                  </li>
                  <li>
                    Eg: Single-page applications (SPAs) that load content
                    dynamically.
                  </li>
                  <li>
                    User interaction: Client-side handles the visual elements
                    and user interactions that are directly visible on the
                    webpage, like form submissions, button clicks, and page
                    animations.
                  </li>
                  <li>{`Where code executes:
                  Client-side code runs on the user's computer`}</li>
                </ul>
              </li>
              <li>
                <strong>Server-side:</strong>
                {`Server-side refers to processes that are carried out on the web server, where the website or web application is hosted. These processes are typically executed by the server before the website or web application is delivered to the user's device, and they can include tasks such as retrieving data from a database, rendering a web page, or handling user input.`}
                <ul>
                  <li>
                    When you submit the form, the data is sent to the server
                    where it is validated and stored in a database using
                    server-side code (like PHP or Python).
                  </li>
                  <li>
                    Data access: Server-side has access to databases and
                    sensitive information
                  </li>
                  <li>
                    Where code executes:server-side code runs on the web serve
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
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
            The IIFE ensures that a new variable (j) is created for each
            iteration, mimicking the block-scoping behavior of let. Each
            setTimeout callback references the unique j created during its
            iteration.
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
          <Typography>Type coercion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
          console.log([]) // []
          console.log([] + []) // ""
          // The empty array is converted to an empty string, and then the empty array is also converted to an empty string. So, you get an empty string as the result.
          console.log([] + {}) // "[object Object]"
          console.log({} + {}) //"[object Object][object Object]"
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
          <Typography>
            Constructor property manipulation or dynamic constructor access
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const x = 'constructor';
                console.log(x[x](01)) //"1"
              `}
            />
            <ul>
              <li>
                {` x[x] means "constructor" property of the string x. All strings
                have a constructor property that refers to the String
                constructor.`}
              </li>

              <li>{`So, x[x] is the same as String.`}</li>

              <li>{`String(01) converts the number 01 into the string "1".`}</li>

              <li>{`The output is "1".`}</li>
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
          <Typography>Java vs JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Java is an object Oriented Programming language while JavaScript is
            a client-side scripting language. Both of them are totally different
            from each other.
            <ul>
              <li>
                <strong>Java:</strong> It is one of the most popular programming
                languages. It is an object-oriented programming language and has
                a virtual machine platform that allows you to create compiled
                programs that run on nearly every platform. Java promised,
                “Write Once, Run Anywhere”.
              </li>
              <li>
                <strong>JavaScript:</strong> It is a light-weighted programming
                language (“scripting language”) for developing interactive web
                pages. It can insert dynamic text into the HTML elements.
                JavaScript is also known as the browser’s language.
              </li>
            </ul>
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
          <Typography>
            This keyword and how it interacts with the arguments object
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                function y() {
                  console.log("====",this.length);
                  }

                  var x = {
                    length: 5,
                    method: function y() {
                      arguments[0]()
                    },
                  };

                  x.method(y, 1)
                  //"====", 2
              `}
            />
            <ul>
              <li>
                The method function in x is called with two arguments: y (the
                function) and 1.
              </li>
              <li>
                Inside method, arguments[0]() is executed, which means the y
                function is called.
              </li>
              <li>
                When y is called, its this is set to the arguments object of
                method. The arguments object has a length property that counts
                how many arguments were passed to method.
              </li>
              <li>
                Since method was called with two arguments (y and 1),
                arguments.length is 2.
              </li>
              <li>So, y logs:</li>
            </ul>

            <CodeSnippet
              language="javascript"
              code={`
                "====", 2
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
          <Typography>Webpage content edit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Open the dev tools and go to the tab console and type -
            document.body.contentEditable = true
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default InterviewQuestions;
