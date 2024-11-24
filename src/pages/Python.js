import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const HtmlList = () => {
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
          <Typography>Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Python is a widely-used general-purpose, high-level programming
            language. It was created by Guido van Rossum in 1991 and further
            developed by the Python Software Foundation. It was designed with an
            emphasis on code readability, and its syntax allows programmers to
            express their concepts in fewer lines of code.
            <Divider sx={{ my: 2 }} />
            <strong>It is used for:</strong>
            <ul>
              <li>System Scripting</li>
              <li>Web Development</li>
              <li>Game Development</li>
              <li>Software Development</li>
              <li>Complex Mathematics</li>
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
          <Typography>Benefits of using Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>Object-Oriented Language</li>
              <li>High-Level Language</li>
              <li>Dynamically Typed language</li>
              <li>Extensive support Libraries</li>
              <li>Presence of third-party modules</li>
              <li>Open source and community development</li>
              <li>Portable and Interactive</li>
              <li>Portable across Operating systems</li>
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
          <Typography>Compiled language or an Interpreted language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Python is a partially compiled language and partially interpreted
            language. The compilation part is done first when we execute our
            code and this will generate byte code internally this byte code gets
            converted by the Python virtual machine(p.v.m) according to the
            underlying platform(machine+operating system).
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
          <Typography>{`‘#’ symbol`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontWeight: 300 }}
          >{`‘#’ is used to comment on everything that comes after on the line.`}</Typography>
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
          <Typography>Mutable datatype vs Immutable datatype</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Mutable data types can be edited i.e., they can change at runtime.
            Eg – List, Dictionary, etc. Immutable data types can not be edited
            i.e., they can not change at runtime. Eg – String, Tuple, etc.
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
          <Typography>Global and Local scope</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                A variable created inside a function belongs to the local scope
                of that function, and can only be used inside that function.
              </li>
              <li>
                A variable created in the main body of the Python code is a
                global variable and belongs to the global scope. Global
                variables are available from within any scope, global and local.
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
          <Typography>Arguments passed by value or by reference </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In Python, arguments are passed by object reference (also called
            “pass by assignment”). This means that functions receive references
            to the same objects:
            <br />
            <strong>Mutable objects </strong>(like lists or dictionaries) can be
            modified within the function.
            <br />
            <strong>Immutable objects </strong>(like integers or strings) cannot
            be changed and reassigning them inside the function doesn’t affect
            the original object.
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
          <Typography>Set vs Dictionary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The set is an unordered collection of data types that is iterable,
            mutable and has no duplicate elements.
            <br />A dictionary in Python is an ordered collection of data
            values, used to store data values like a map.
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
          <Typography>Iterator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                An iterator is an object that contains a countable number of
                values.
              </li>
              <li>
                An iterator is an object that can be iterated upon, meaning that
                you can traverse through all the values.
              </li>
              <li>
                Technically, in Python, an iterator is an object which
                implements the iterator protocol, which consist of the methods
                __iter__() and __next__().
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
          <Typography> __init__() function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                All classes in Python have a function called __init__(), which
                is always executed when the class is being initiated.
              </li>
              <li>
                We can use the __init__() function to assign values to object
                properties, or other operations that are necessary to do when
                the object is being created.
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
          <Typography>Lambda functions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Use lambda functions when an anonymous function is required for a
            short period of time. A lambda function is an anonymous function.
            This function can have any number of parameters but, can have just
            one statement.
            <CodeSnippet
              language="javascript"
              code={`
              a = lambda x, y : x*y
              print(a(7, 19))
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
          <Typography>List Comprehension</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            List comprehension is a syntax construction to ease the creation of
            a list based on existing iterable.
            <CodeSnippet
              language="javascript"
              code={`
          my_list = [i for i in range(1, 10)]
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
          <Typography>Lists, Tuples vs Sets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                Lists, tuples and sets are all used to store multiple items in a
                single variable.{" "}
              </li>
              <li>
                A list is a collection of data which is ordered and changeable
                (elements can be added, removed and changed).{" "}
              </li>
              <li>
                A tuple is a collection of data which is ordered and
                unchangeable (elements cannot be added, removed or changed).{" "}
              </li>
              <li>
                A set is a collection of data which is unordered, unchangeable,
                and unindexed.
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
          <Typography>pass</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Pass means performing no operation or in other words, it is a
            placeholder in the compound statement, where there should be a blank
            left and nothing has to be written there.
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
          <Typography>Difference between / and // </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`/ represents precise division (result is a floating point number) whereas // represents floor division (result is an integer).`}
            <CodeSnippet
              language="javascript"
              code={`
                5//2 = 2
                5/2 = 2.5
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
          <Typography>Exceptional handling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            There are 3 main keywords i.e. try, except, and finally which are
            used to catch exceptions and handle the recovering mechanism
            accordingly. Try is the block of a code that is monitored for
            errors. Except block gets executed when an error occurs.
            <br />
            The beauty of the final block is to execute the code after trying
            for an error. This block gets executed irrespective of whether an
            error occurred or not. Finally, block is used to do the required
            cleanup activities of objects/variables.
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
            Check if all the characters in a string are alphanumeric
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontWeight: 300 }}
          >{`You can use the isalnum() method, which returns True if all the characters are alphanumeric, meaning alphabet letter (a-z) and numbers (0-9).`}</Typography>
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
          <Typography>Convert a string to an integer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            You can use the int() function, like this:
            <CodeSnippet
              language="javascript"
              code={`
                num = "5"
                convert = int(num)
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
          <Typography>Indentation in Python, Why important</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                Indentation refers to the spaces at the beginning of a code
                line. Where in other programming languages the indentation in
                code is for readability only, the indentation in Python is very
                important.
              </li>
              <li>Python uses indentation to indicate a block of code.</li>
              <li>
                Python will give you an error if you skip the indentation.
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
          <Typography>
            Correct syntax to output the type of a variable or object
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet language="javascript" code={`print(type(x))`} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      Which collection does not allow duplicate members
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
            Which collection does not allow duplicate members
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>SET</Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography>Inheritance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                Inheritance allows us to define a class that inherits all the
                methods and properties from another class.
              </li>
              <li>
                Parent class is the class being inherited from, also called base
                class.
              </li>
              <li>
                Child class is the class that inherits from another class, also
                called derived class.
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography>Output of the following code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
          <CodeSnippet
            language="javascript"
            code={`
              x = 41

              if x > 10:
                print("Above ten,")
                if x > 20:
                  print("and also above 20!")
                else:
                  print("but not above 20.")
            `}
          />
          Above ten,and also above 20!
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}></Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HtmlList;
