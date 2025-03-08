import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableHead,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const JavaScriptList = () => {
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
        Javascript Concepts Overview
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
          <Typography>Features of Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            JavaScript is a versatile and widely used programming language with
            various features that make it a cornerstone of modern web
            development. Here are some of its key features:
            <ul>
              <li>
                Lightweight and Interpreted:{" "}
                {`JavaScript is lightweight and doesn't require a compilation step. It is interpreted by browsers at runtime, which makes it fast and easy to work with.`}
              </li>
              <li>Dynamic Typing</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>First-Class Functions</li>
              <li>Event-Driven Programming</li>
              <li>Asynchronous and Non-Blocking</li>
              <li>Platform Independence</li>
              <li>Browser Compatibility</li>
              <li>Built-In Libraries and APIs</li>
              <li>Prototypal Inheritance</li>
              <li>ES6 and Modern Features</li>
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
          <Typography>Scope</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Scope determines the accessibility (visibility) of variables. <br />
            JavaScript variables have 3 types of scope:
            <ul>
              <li>
                <strong>Block scope: </strong>
                Before ES6 (2015), JavaScript variables had only Global Scope
                and Function Scope.
                <br />
                ES6 introduced two important new JavaScript keywords: let and
                const.
                <br />
                These two keywords provide Block Scope in JavaScript.
                <br />
                Variables declared inside a {} block cannot be accessed from
                outside the block
                <br />
                <CodeSnippet
                  language="javascript"
                  code={`
                    {
                      let x = 2;
                    }
                    // x can NOT be used here
                    {
                      var x = 2;
                    }
                    // x CAN be used here
                  `}
                />
              </li>
              <li>
                <strong>Local Scope</strong>
                Variables declared within a JavaScript function, are LOCAL to
                the function:
                <CodeSnippet
                  language="javascript"
                  code={`
                    // code here can NOT use carName

                    function myFunction() {
                      let carName = "Volvo";
                      // code here CAN use carName
                    }

                    // code here can NOT use carName
                  `}
                />
                Local variables have Function Scope: They can only be accessed
                from within the function. Since local variables are only
                recognized inside their functions, variables with the same name
                can be used in different functions. Local variables are created
                when a function starts, and deleted when the function is
                completed.
              </li>
              <li>
                <strong>Function scope: </strong>
                JavaScript has function scope: Each function creates a new
                scope.
                <br />
                Variables defined inside a function are not accessible (visible)
                from outside the function.
                <br />
                Variables declared with var, let and const are quite similar
                when declared inside a function.
                <br />
                They all have Function Scope:
                <CodeSnippet
                  language="javascript"
                  code={`
                    function myFunction() {
                      var carName = "Volvo";   // Function Scope , can be let and const too
                    }
                 `}
                />
              </li>
              <li>
                <strong>Global scope: </strong>
                A variable declared outside a function, becomes GLOBAL.
                <CodeSnippet
                  language="javascript"
                  code={`
                    let carName = "Volvo";
                    // code here can use carName

                    function myFunction() {
                    // code here can also use carName
                    }
                 `}
                />
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
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Const</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Variables declared with const are block-scoped and cannot be
            reassigned once initialized. However, the value they hold can still
            be mutable if it&apos;s an object or an array.
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
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Let</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Variables declared with let are also block-scoped, but they can be
            reassigned. They are usually preferred over var due to their block
            scope.
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
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <Typography>Var</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Variables declared with var are function-scoped or globally scoped,
            but not block-scoped. They can be reassigned and hoisted (moved to
            the top of their function or global scope).
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
          aria-controls="panel2-content"
          id="panel4-header"
        >
          <Typography>== vs ===</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>==</strong> (Equality Operator):
            <br />
            <CodeSnippet
              language="javascript"
              code={`console.log(5 == '5'); // Output: true.`}
            />
            - performs type coercion <br />
            <strong> ===</strong> (Strict Equality Operator): <br />
            <CodeSnippet
              language="javascript"
              code={`console.log(5 === '5'); // Output: false `}
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
          aria-controls="panel2-content"
          id="panel5-header"
        >
          <Typography>Primitive data type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            primitive data types are the most basic types of data. They
            represent single values and are immutable, meaning their values
            cannot be changed after they are created (though variables holding
            them can be reassigned). Primitive types are directly stored in
            memory and compared by value.
            <ul>
              <li>Number</li>
              <li>boolean</li>
              <li>string</li>
              <li>undefined</li>
              <li>null </li>
              <li>{`symbol Eg: const key = Symbol('unique');`}</li>
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
          <Typography>Non-primitive data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In JavaScript, non-primitive data types (also called reference
            types) are objects and functions. Unlike primitive data types, which
            are immutable and directly stored in memory, non-primitive types are
            stored as references pointing to the actual data in memory.
            <ul>
              <li>
                <strong>Object:</strong>
                {` Collections of key-value pairs where keys are strings (or symbols) and values can be any type (including other objects or functions).
              Created using {}, Object.create(), or constructors like new Object().`}
              </li>
              <li>
                <strong>Arrays</strong> Special objects designed to store
                ordered collections of items. Can hold any type of data and have
                methods for iteration, transformation, and manipulation.
              </li>
              <li>
                <strong>Functions</strong> First-class objects in JavaScript,
                meaning they can be assigned to variables, passed as arguments,
                and returned from other functions.
              </li>
              <li>
                <strong>Date</strong> Represents dates and times. Created using
                the Date constructor. {`Eg: const today = new Date();`}
              </li>
              <li>
                <strong>Regular Expressions (RegExp)</strong> Patterns used to
                match character combinations in strings.
                {` Eg: const regex = /hello/i;`}
              </li>
              <li>
                <strong>Set and Map</strong>
                <ul>
                  <li>
                    <strong>Set:</strong> Collection of unique values
                    <CodeSnippet
                      language="javascript"
                      code={`
                    const uniqueNumbers = new Set([1, 2, 2, 3]);
                  `}
                    />
                  </li>
                  <li>
                    <strong>Map: </strong>
                    Collection of key-value pairs where keys can be of any type.
                    <CodeSnippet
                      language="javascript"
                      code={`
                        const userRoles = new Map();
                        userRoles.set("admin", "Alice");
                  `}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <strong>WeakSet and WeakMap</strong> Similar to Set and Map, but
                keys in WeakMap and values in WeakSet must be objects. They also
                allow garbage collection of keys when no references remain.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const weakMap = new WeakMap();
                    const obj = {};
                    weakMap.set(obj, "value");
                  `}
                />
              </li>
            </ul>
            <br />
            <strong>Characteristics of Non-Primitive Data Types:</strong> <br />
            <ul>
              <li>
                <strong>Mutability: </strong>They can be changed after creation.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const obj = { name: "Alice" };
                    obj.name = "Bob"; // Allowed
                  `}
                />
              </li>
              <li>
                <strong>Comparison: </strong>Non-primitives are compared by
                reference, not by value.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const a = { value: 10 };
                    const b = { value: 10 };
                    console.log(a === b); // false
                  `}
                />
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
          <Typography>Regular Expressions (RegEx)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Are patterns used to match, search, or manipulate strings. They are
            powerful tools for validating data, extracting information, and
            performing complex string transformations in JavaScript and other
            programming languages.
            <br />
            <strong>Syntax of a Regular Expression</strong>
            {`Regular expressions in JavaScript are enclosed in slashes (/) or
            created using the RegExp constructor.`}
            <br />
            <ul>
              <li>
                <strong>Literal Syntax:</strong>
                <CodeSnippet
                  language="javascript"
                  code={`
                    const regex = /pattern/flags;
                 `}
                />
              </li>
              <li>
                <strong>Constructor Syntax:</strong>
                <CodeSnippet
                  language="javascript"
                  code={`
                    const regex = new RegExp("pattern", "flags");
                  `}
                />
              </li>
            </ul>
            <strong>Common Flags</strong>
            <br />
            Flags modify the behavior of a regular expression:
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Flag</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>g</TableCell>
                    <TableCell>{`Global search (find all matches, not just the first).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>i</TableCell>
                    <TableCell>Case-insensitive search.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>m</TableCell>
                    <TableCell>Multi-line search.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>s</TableCell>
                    <TableCell>{`Allows the dot (.) to match newline characters.`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>u</TableCell>
                    <TableCell>
                      Treats the pattern as a Unicode pattern.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>y</TableCell>
                    <TableCell>{`Sticky search (match from the current position only).`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <strong>Special Characters</strong>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Character</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>.</TableCell>
                    <TableCell>
                      Matches any single character except newline.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\d </TableCell>
                    <TableCell>{`Matches any digit (0-9).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\D</TableCell>
                    <TableCell> Matches any non-digit.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\w</TableCell>
                    <TableCell>{`Matches any word character (alphanumeric + _).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\W</TableCell>
                    <TableCell>Matches any non-word character.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\s</TableCell>
                    <TableCell>{`Matches any whitespace (space, tab, newline).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\S</TableCell>
                    <TableCell>Matches any non-whitespace.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>^</TableCell>
                    <TableCell>Matches the beginning of a string.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$</TableCell>
                    <TableCell>Matches the end of a string.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\b</TableCell>
                    <TableCell>Matches a word boundary.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>\B</TableCell>
                    <TableCell>Matches a non-word boundary.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>[...]</TableCell>
                    <TableCell>{`Matches any character in the brackets (e.g., [a-z]).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>[^...]</TableCell>
                    <TableCell>
                      Matches any character not in the brackets.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <strong>Quantifiers</strong>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Quantifier</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>Matches 0 or more occurrences.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+</TableCell>
                    <TableCell>Matches 1 or more occurrences.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>?</TableCell>
                    <TableCell>{`Matches 0 or 1 occurrence (optional).`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`{n}`}</TableCell>
                    <TableCell>Matches exactly n occurrences.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`{n,}`}</TableCell>
                    <TableCell>Matches n or more occurrences.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{`{n,m}`}</TableCell>
                    <TableCell>Matches between n and m occurrences.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <strong>Example:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                //Matching Digits:
                const regex = /\d+/g;
                const str = "The price is 123 dollars.";
                console.log(str.match(regex)); // ["123"]

                //Case insentive search
                const regex = /hello/i;
                console.log(regex.test("Hello")); // true

                //Replacing Text
                const str = "apples and oranges";
                console.log(str.replace(/apples/, "bananas")); // "bananas and oranges"

                //Validating email
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                console.log(emailRegex.test("example@email.com")); // true
             `}
            />
            <strong>Useful Methods with Regular Expressions</strong>
            <ul>
              <li>
                <strong>test():</strong> Tests if the pattern exists in the
                string.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const regex = /cat/;
                    console.log(regex.test("concatenate")); // true
                  `}
                />
              </li>
              <li>
                <strong>match():</strong> Returns an array of matches or null if
                no match is found.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const str = "hello world";
                    const regex = /o/g;
                    console.log(str.match(regex)); // ["o", "o"]
                  `}
                />
              </li>
              <li>
                <strong>replace():</strong> Replaces matched substrings.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const str = "hello world";
                    const regex = /world/;
                    console.log(str.replace(regex, "there")); // "hello there"
                  `}
                />
              </li>
              <li>
                <strong>search():</strong> Returns the index of the first match
                or -1 if not found.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const str = "hello world";
                    const regex = /world/;
                    console.log(str.search(regex)); // 6
                  `}
                />
              </li>
              <li>
                <strong>split():</strong>Splits a string based on the pattern.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const str = "one, two, three";
                    console.log(str.split(/, /)); // ["one", "two", "three"]
                 `}
                />
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
          aria-controls="panel2-content"
          id="panel6-header"
        >
          <Typography>Pass By Value vs Pass By Reference</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Pass by Value:</strong>
            <ul>
              <li>
                In pass by value, a copy of the actual value of the argument is
                passed to the function.
              </li>
              <li>
                Changes made to the parameter inside the function do not affect
                the original value outside the function.{" "}
              </li>
            </ul>
            <br />
            <strong>Example 1:</strong>
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              function increment(num) {
                num += 1;
                console.log("Inside function:", num); // Output: Inside function: 6
              }

              let x = 5;
              increment(x);
              console.log("Outside function:", x); // Output: Outside function: 5
              `}
            />
            <br />
            <strong>Example 2:</strong>
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                let test = 3;
                let test2 = test;
                test2++;
                console.log(test, " - ", test2); // 3 - 4
              `}
            />
            <br />
            <br />
            <strong>Pass by Reference:</strong>
            <ul>
              <li>
                In pass by reference, a reference to the original value of the
                argument is passed to the function.
              </li>
              <li>
                If the function modifies the parameter, it also modifies the
                original value outside the function.
              </li>
              <li>
                Objects (including arrays and functions) in JavaScript are
                passed by reference.
              </li>
            </ul>
            <strong>Example 1:</strong>
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              function addElement(arr) {
                arr.push(4);
                console.log("Inside function:", arr); // Output: Inside function: [1, 2, 3, 4]
                }

              let myArray = [1, 2, 3];
              addElement(myArray);
              console.log("Outside function:", myArray); // Output: Outside function: [1, 2, 3, 4]
              `}
            />
            <strong>Example 2:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                let test3 = { test: 'ert' };
                let test4 = { ...test3 }; // Using the spread operator to create a shallow copy
                test4.firstName = "sumi";
                console.log("test3", test3); // "test3", { test: "ert" }
                console.log("test4", test4); // "test4", { firstName: "sumi", test: "ert" }
                 `}
            />
            <ul>
              <li>
                {`let test4 = {...test3}; creates a shallow copy of test3 and
                assigns it to test4. Now, test3 and test4 reference different
                objects.`}
              </li>
              <li>
                {`Adding test4.firstName = "sumi"; only modifies test4, leaving
                test3 unchanged.`}
              </li>
              <li>
                {`As a result, test3 remains { test: "ert" }, while test4 becomes { test: "ert", firstName: "sumi" }.`}
              </li>
            </ul>

            <br />
            <strong>Example 3:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                let obj1 = {};
                let obj2 = obj1; // Direct assignment, both variables point to the same object
                obj2.firstName = "sumi";
                console.log("obj1", obj1); // { firstName: "sumi" }
                console.log("obj2", obj2); // { firstName: "sumi" }
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
          aria-controls="panel2-content"
          id="panel7-header"
        >
          <Typography>
            Map() vs Filter() vs Reduce() and Flatting Array
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Map()</strong>
            <br />
            <ul>
              <li>
                The map() method creates a new array by applying a function to
                each element of the original array. It does not modify the
                original array.
              </li>
              <li>
                It iterates over each element of the array, applies a callback
                function to each element, and returns a new array containing the
                results.
              </li>
              <li>
                The callback function receives three arguments: the current
                element, the index of the current element, and the array being
                traversed.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const numbers = [1, 2, 3, 4, 5];
                const doubled = numbers.map(num => num * 2);
                console.log(doubled); //		[2, 4, 6, 8, 10];
                console.log(numbers); //		[1, 2, 3, 4, 5]
                `}
            />
            <br />
            <strong>Filter():</strong>
            <ul>
              <li>
                The filter() method creates a new array containing only the
                elements that pass a test specified by a callback function. It
                does not modify the original array.
              </li>
              <li>
                It iterates over each element of the array, applies a callback
                function to each element, and returns a new array containing
                only the elements for which the callback function returns true.
              </li>
              <li>
                The callback function receives the same arguments as the map()
                method.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const numbers = [1, 2, 3, 4, 5];
                const evens = numbers.filter(num => num % 2 === 0);
                console.log(evens); //[ 2, 4 ]
                `}
            />
            <br />
            <strong>Reduce():</strong>
            <br />
            {`reduce(callbackFn, initialValue)`}
            <ul>
              <li>
                The reduce() method executes a reducer function (a callback
                function) on each element of the array, resulting in a single
                output value. It does not modify the original array.
              </li>
              <li>
                It takes an initial value as an optional parameter and executes
                the reducer function for each element of the array from left to
                right, updating the accumulator value.
              </li>
              <li>
                The reducer function receives four arguments: the accumulator
                (which accumulates the callback&apos;s return values), the
                current element, the current index, and the array being
                traversed.
              </li>
            </ul>
            <ul>
              <li>
                <strong>callback:</strong>
                <ul>
                  <li>
                    <strong>accumulator:</strong>The accumulated result from the
                    previous callback execution.
                  </li>
                  <li>
                    <strong>currentValue:</strong>The current element being
                    processed in the array.
                  </li>
                  <li>
                    <strong>currentIndex(optional):</strong>The array reduce is
                    called on.
                  </li>
                  <li>
                    <strong>array(optional):</strong>The array reduce is called
                    on.
                  </li>
                </ul>
              </li>
              <li>
                <strong>initialValue (optional): </strong>A value to initialize
                the accumulator. If not provided, the first element of the array
                is used as the initial value, and iteration starts from the
                second element.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const numbers = [1, 2, 3, 4, 5];
                const sum = numbers.reduce((acc, num) => acc + num, 0);
                console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5);
                `}
            />
            <ul>
              <li>
                map() transforms each element of an array and returns a new
                array.
              </li>
              <li>
                filter() selects elements from an array based on a condition and
                returns a new array.
              </li>
              <li>
                reduce() applies a function to each element of an array,
                accumulating a single result.
              </li>
            </ul>
            <strong>Flattening an Array of Arrays</strong>
            <CodeSnippet
              language="javascript"
              code={`
              const nestedArray = [[1, 2], [3, 4], [5, 6]];
              const flatArray = nestedArray.reduce((acc, curr) =>  return acc.concat(curr), []);

              console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
            `}
            />
            <strong>Counting Occurrences of Items in an Array</strong>
            <CodeSnippet
              language="javascript"
              code={`
                const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

                const fruitCount = fruits.reduce((accumulator, currentValue) => {
                  if (accumulator[currentValue]) {
                    accumulator[currentValue]++;
                  } else {
                    accumulator[currentValue] = 1;
                  }
                  return accumulator;
                }, {});

                console.log(fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }
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
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Flat map</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            flatMap is a method in JavaScript that combines the operations of
            map and flat. It first maps each element of an array to a new value,
            and then flattens the result by one level. This method is
            particularly useful when you need to perform a transformation on
            each element of an array that results in arrays, and you want a
            single, flat array as the result.
            <CodeSnippet
              language="javascript"
              code={`
                const numbers = [1, 2, 3];
                const evens = numbers.map((x) =>  [x, x * 2])
                let flat = numbers.flatMap(x => [x, x * 2])
                console.log(evens);  //[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]
                console.log(flat); //[ 1, 2, 2, 4, 3, 6 ]
              `}
            />
            <strong>Removing Empty Elements</strong>
            <br />
            Another common use case is filtering out unwanted elements (e.g.,
            empty arrays) and flattening the result:
            <CodeSnippet
              language="javascript"
              code={`
              const arr = ["apple", "", "banana", "orange"];

              const result = arr.flatMap(str => str ? [str] : []);

              console.log(result); // Output: ["apple", "banana", "orange"]
              `}
            />
            <strong>Splitting and Flattening</strong>
            <br />
            You can use flatMap to split strings and flatten the result:
            <CodeSnippet
              language="javascript"
              code={`
              const sentences = ["Hello world", "FlatMap is useful", "JavaScript"];

              const words = sentences.flatMap(sentence => sentence.split(" "));

              console.log(words); // Output: ["Hello", "world", "FlatMap", "is", "useful", "JavaScript"]

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
          aria-controls="panel2-content"
          id="panel8-header"
        >
          <Typography>Push() </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Adds one or more elements to the end of an array and returns the new
            length of the array.
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3];
                arr.push(4); // arr is now [1, 2, 3, 4]
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
          aria-controls="panel2-content"
          id="panel9-header"
        >
          <Typography>Pop()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Removes the last element from an array and returns that element.
            <br />
            It does not take any arguments.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3];
                arr.pop(); // arr is now [1, 2], returns 3
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
          aria-controls="panel2-content"
          id="panel10-header"
        >
          <Typography>Shift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Removes the first element from an array and returns that element.{" "}
            <br />
            This method does not take any arguments.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3];
                arr.shift(); // arr is now [2, 3], returns 1
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
          aria-controls="panel2-content"
          id="panel11-header"
        >
          <Typography>Unshift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Adds one or more elements to the beginning of an array and returns
            the new length of the array.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3];
                arr.unshift(0); // arr is now [0, 1, 2, 3]
                arr.unshift(11, 22); //Output: [11, 22, 0, 1, 2, 3]

                console.log(arr) //[ 11, 22, 0, 1, 2, 3 ]
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
          aria-controls="panel2-content"
          id="panel12-header"
        >
          <Typography>Splice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Adds, removes, or replaces elements in an array at a specified
            index.
            <CodeSnippet
              language="javascript"
              code={`
                //array.splice(start, deleteCount, item1, item2, ..., itemN);

                const numbers = [1, 2, 3, 14, 5];
                const splicedNum = numbers.splice(1);
                console.log(splicedNum); // Output: [ 2, 3, 14, 5 ]

                const numbers = [1, 2, 3, 14, 5];
                const splicedNum = numbers.splice(3);
                console.log(splicedNum); // Output: [ 14, 5 ]

                let arr = [1, 2, 3, 4];
                arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
                // Removes 2 elements starting at index 1, and adds 'a' and 'b'

                const fruits = ['apple', 'banana', 'grape'];
                fruits.splice(2, 0, 'orange', 'kiwi');
                console.log(fruits); // Output: ['apple', 'banana', 'orange', 'kiwi', 'grape']

                Removing Elements:
                let arr = [1, 2, 3, 4, 5];
                let removed = arr.splice(2, 2);
                console.log(arr); // Output: [1, 2, 5]
                console.log(removed); // Output: [3, 4]

                Adding Elements:
                let arr = [1, 2, 3, 4, 5];
                arr.splice(2, 0, 'a', 'b');
                console.log(arr); // Output: [1, 2, 'a', 'b', 3, 4, 5]

                Replacing Elements:
                let arr = [1, 2, 3, 4, 5];
                arr.splice(2, 2, 'a', 'b');
                console.log(arr); // Output: [1, 2, 'a', 'b', 5]
              `}
            />
            <strong>.toSpliced()</strong>
            <br />
            To create a new array with the specified changes (adding, removing,
            or replacing elements) without modifying the original array. This is
            useful for immutable operations.
            <CodeSnippet
              language="javascript"
              code={`
              //array.toSpliced(start, deleteCount, item1, item2, ..., itemN);

              let fruits = ['apple', 'banana', 'orange'];
              let newFruits = fruits.toSpliced(1, 1);
              console.log(fruits); // Output: ['apple', 'banana', 'orange']
              console.log(newFruits); // Output: ['apple', 'orange']

              let fruits = ['apple', 'orange'];
              let newFruits = fruits.toSpliced(1, 0, 'banana');
              console.log(fruits); // Output: ['apple', 'orange']
              console.log(newFruits); // Output: ['apple', 'banana', 'orange']
              `}
            />
            <strong>splice vs toSpliced()</strong>
            <CodeSnippet
              language="javascript"
              code={`
              //splice vs toSpliced()
              let orgArr = [1, 2, 3, 4, 5]
              let newArr = orgArr.splice(2, 2, "a", "b")
              console.log("orgArr= ", orgArr) // "orgArr= ", [1, 2, "a", "b", 5]   orgArr changed
              console.log("newArr = ", newArr) //"newArr = ", [3, 4]

              let orgArr1 = [1, 2, 3, 4, 5]
              let newArr1 = orgArr1.toSpliced(2, 2, "a", "b")
              console.log("orgArr1 = ", orgArr1) //"orgArr1 = ", [1, 2, 3, 4, 5] orgArr1 not changed
              console.log("newArr1 = ", newArr1) //"newArr1 = ", [1, 2, "a", "b", 5]

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
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Split()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The split() method of String values takes a pattern and divides this
            string into an ordered list of substrings by searching for the
            pattern, puts these substrings into an array, and returns the array.{" "}
            <br />
            To split a string into an array of substrings based on a specified
            separator.
            <CodeSnippet
              language="javascript"
              code={`
                //string.split(separator, limit);

                const text = 'apple,banana,orange';
                const result = text.split(',');
                console.log(result); // Output: ['apple', 'banana', 'orange']

                const text = 'apple banana orange';
                const result = text.split(' ', 2); // Limits to 2 substrings
                console.log(result); // Output: ['apple', 'banana']

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
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Slice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            To create a shallow copy of a portion of an array or string into a
            new array or string.
            <br />
            <strong>Array Slicing:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                //array.slice(begin, end);


                const numbers = [1, 2, 3, 4, 5];
                const sliced = numbers.slice(1, 4); // Slices from index 1 to 3
                console.log(sliced); // Output: [2, 3, 4]
              `}
            />
            <strong>String Slicing:</strong> <br />
            <CodeSnippet
              language="javascript"
              code={`
                //array.slice(begin, end);


                const text = 'hello world';
                const sliced = text.slice(0, 5); // Slices from index 0 to 4
                console.log(sliced); // Output: 'hello'

                const months = ['March', 'Jan', 'Feb', 'Dec'];
                months.sort();
                console.log(months);
                // Expected output: Array ["Dec", "Feb", "Jan", "March"]

                const array1 = [1, 30, 4, 21, 100000];
                array1.sort();
                console.log(array1);
                // Expected output: Array [1, 100000, 21, 30, 4]
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
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Splice() vs Slice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                Use splice() when you need to modify the original array by
                adding, removing, or replacing elements.
              </li>
              <li>
                Use slice() when you need to create a new array that is a
                portion or copy of the original array without modifying it.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
                let test = fruits.splice(2, 4);
                console.log(test) //[ 'Mango', 'Orange' ]
                console.log(fruits); //[ 'Apple', 'Banana' ]

                let fruits2 = ['Apple', 'Banana', 'Mango', 'Orange'];
                let citrus = fruits2.slice(2, 4);
                console.log(citrus); // Output: ['Mango', 'Orange']
                console.log(fruits2); // Output: ['Apple', 'Banana', 'Mango', 'Orange']
              `}
            />
            <strong>Comparison Summary</strong>
            <br />
            <strong> Modification:</strong>
            <br />
            splice(): Modifies the original array.
            <br />
            slice(): Does not modify the original array; returns a new array.
            <br />
            <strong>Return Value:</strong>
            <br />
            splice(): Returns an array of removed elements.
            <br />
            slice(): Returns a new array containing the extracted elements.
            <br />
            <strong> Use Cases:</strong>
            <br />
            splice(): Used for adding, removing, or replacing elements in an
            array.
            <br />
            slice(): Used for copying or extracting a portion of an array.
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
          aria-controls="panel2-content"
          id="panel13-header"
        >
          <Typography>Sort()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Sorts the elements of an array in place and returns the sorted
            array.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [3, 1, 4, 2];
                arr.sort(); // arr is now [1, 2, 3, 4]
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
          aria-controls="panel2-content"
          id="panel14-header"
        >
          <Typography>Reverse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Reverses the order of the elements in an array.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3];
                arr.reverse(); // arr is now [3, 2, 1]
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
          aria-controls="panel2-content"
          id="panel15-header"
        >
          <Typography>Fill()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Fills all the elements of an array from a start index to an end
            index with a static value.
            <CodeSnippet
              language="javascript"
              code={`
                //array.fill(value, start, end);

                let arr = [1, 2, 3];
                arr.fill(0); // arr is now [0, 0, 0]

                let numbers = [1, 2, 3, 4, 5];
                numbers.fill(0, 1, 4);
                console.log(numbers); // Output: [1, 0, 0, 0, 5]

                let emptyArray = new Array(5).fill(1);
                console.log(emptyArray); // Output: [1, 1, 1, 1, 1]
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
          aria-controls="panel2-content"
          id="panel16-header"
        >
          <Typography>CopyWithin()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Shallow copies part of an array to another location in the same
            array and returns it, without modifying its length.
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [1, 2, 3, 4, 5];
                arr.copyWithin(0, 3); // arr is now [4, 5, 3, 4, 5]
                // Copies elements from index 3 to the start

                let arr = [1, 2, 3, 4, 5, 6, 7, 8];
                arr.copyWithin(0, 3); //[ 4, 5, 6, 7,8, 6, 7, 8 ]
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
          aria-controls="panel2-content"
          id="panel17-header"
        >
          <Typography>Falsey value</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Unique to JavaScript, except 6 all are truthy value Some values when
            you evaluate them as Booleans it will be falsey
            <CodeSnippet
              language="javascript"
              code={`
              const t1 = undefined
              const t2 = null
              const t3 = NaN
              const t4 = ''
              const t5 = 0
              const t6 = false
              console.log("t1",Boolean(t1)); //false
              console.log("t2",!!(t2));//false
              console.log("t3",!!(t3));//false
              console.log("t4",Boolean(t4));//false
              console.log("t5",Boolean(t5));//false
              console.log("t6",Boolean(t6));//false
              console.log("t7",Boolean(-0));//false

              let username = "";
              let displayName = username || "Guest";
              console.log(displayName); // Output: "Guest"
              `}
            />
            {`In this example, because username is an empty string (falsy),
            displayName is assigned the value "Guest".`}
            <strong>Example: Truthy vs Falsy</strong>
            <br />
            <CodeSnippet
              language="javascript"
              code={`

              const values = [false, 0, "", null, undefined, NaN, 42, "hello", [], {}];
                values.forEach(value => {
                  console.log({value}: {Boolean(value)}); //add ticks and $ sign in front of the value and add : in front of the Boolean(value) and backticks at the end
                  });


                //output
                false: false
                0: false
                : false
                null: false
                undefined: false
                NaN: false
                42: true
                hello: true
                : true
                [object Object]: true

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
          aria-controls="panel2-content"
          id="panel18-header"
        >
          <Typography>Global Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Global variables are variables declared outside of any function or
            block scope. These variables have global scope, meaning they are
            accessible from anywhere in your code, including inside functions
            and blocks. Global variables are generally declared without using
            the var, let, or const keywords.
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
          aria-controls="panel2-content"
          id="panel19-header"
        >
          <Typography>This</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The this keyword refers to the context within which a function is
            executed.
            <br />
            <strong>Global Context:</strong>
            <br />
            When this is used in the global scope (outside of any function), it
            refers to the global object. In a browser environment, the global
            object is window. Ex: console.log(this === window) //true
            <br />
            <strong>Function Context:</strong>
            <br /> When this is used inside a function, its value depends on how
            the function is called:
            <br />
            <strong>Function Invocation:</strong>
            <br /> If a function is called as a standalone function, this refers
            to the global object (window in a browser) in non-strict mode, and
            undefined in strict mode.
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              function foo() {
                console.log(this === window);
              }

              foo(); // Output: true

              function foo() {
                "use strict";
                console.log(this == undefined);
              }
              foo(); // Output: true
              `}
            />
            <strong>Method Invocation:</strong>
            <br />
            If a function is called as a method of an object, this refers to the
            object that owns the method.
            <CodeSnippet
              language="javascript"
              code={`
              const obj = {
                name: 'John',
                greet: function() {
                  console.log('Hello, ' + this.name);
                }
              };
              obj.greet(); // Output: Hello, John
              `}
            />
            <strong>Constructor Context</strong>
            <br />
            When a function is used as a constructor (with the new keyword),
            this refers to the new object being created.
            <CodeSnippet
              language="javascript"
              code={`
              function Person(name) {
                this.name = name;
              }

              const person = new Person('Bob');
              console.log(person.name); // Logs "Bob"
              `}
            />
            <strong>call, apply, and bind Methods</strong>
            <br />
            <ul>
              <li>
                <strong>call</strong> <br />
                call: Invokes the function with a given this value and
                arguments.
                <CodeSnippet
                  language="javascript"
                  code={`
                  function showName() {
                    console.log(this.name);
                  }

                  const person = { name: 'Charlie' };
                  showName.call(person); // Logs "Charlie"
              `}
                />
              </li>
              <li>
                <strong>apply</strong> <br />
                apply: Similar to call, but arguments are provided as an array.
                <CodeSnippet
                  language="javascript"
                  code={`
                  function showName(greeting) {
                    console.log(greeting + ' ' + this.name);
                  }

                  const person = { name: 'David' };
                  showName.apply(person, ['Hello']); // Logs "Hello David"
              `}
                />
              </li>
              <li>
                <strong>bind</strong> <br />
                bind: Returns a new function with a bound this value.
                <CodeSnippet
                  language="javascript"
                  code={`
                  function showName() {
                    console.log(this.name);
                  }

                  const person = { name: 'Eve' };
                  const boundShowName = showName.bind(person);
                  boundShowName(); // Logs "Eve"
                  `}
                />
              </li>
            </ul>
            <strong>Arrow Functions:</strong>
            <br />
            In arrow functions, this retains the value of the enclosing lexical
            context (the value of this from the surrounding code). Arrow
            functions do not have their own this binding.
            <CodeSnippet
              language="javascript"
              code={`
               const obj = {
                  name: "John",
                  regularFunc: function () {
                    console.log("Regular Function:", this.name);
                  },
                  arrowFunc: () => {
                    console.log("Arrow Function:", this.name);
                  },
                };

                obj.regularFunc(); // Output: "Regular Function: John"
                obj.arrowFunc();   // Output: "Arrow Function: undefined"
              `}
            />
            Regular function: this refers to obj. Arrow function: this is
            inherited from the surrounding scope, which in this case is the
            global scope (window in browsers, undefined in strict mode).
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
          aria-controls="panel2-content"
          id="panel20-header"
        >
          <Typography>Coercion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In JavaScript refers to the automatic conversion of values from one
            data type to another.
            <br />
            <strong>Implicit Coercion:</strong>
            <ul>
              <li>
                Implicit coercion occurs when JavaScript automatically converts
                one data type to another during an operation, such as
                comparisons or arithmetic operations.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                Console.log(“5”+ 5) //55
                `}
            />
            <br />
            <strong>Explicit Coercion:</strong>
            <ul>
              <li>
                Explicit coercion occurs when a developer intentionally converts
                a value from one data type to another using functions or
                operators specifically designed for type conversion.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
              // Converting string to number
              let str = "10";
              let num = parseInt(str);
              console.log(num); // Output: 10
              // Converting number to string
              let value = 10;
              let stringValue = String(value);
              console.log(stringValue); // Output: "10"
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
          aria-controls="panel2-content"
          id="panel21-header"
        >
          <Typography>TypeOf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The typeof operator is used to determine the data type of a value.
            It returns a string indicating the type of the operand.
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              typeof 42; // "number"
              typeof "hello"; // "string"
              typeof true; // "boolean"
              typeof undefined; // "undefined"
              typeof null; // "object"
              typeof { key: "value" }; // "object"
              typeof [1, 2, 3]; // "object"
              `}
            />
            <br />
            {`In JavaScript, arrays are a type of object. Therefore, when you use
            typeof with an array, it returns 'object'.`}
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                typeof function() {}; // "function"
                typeof Symbol("foo"); // "symbol"
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
          aria-controls="panel2-content"
          id="panel22-header"
        >
          <Typography>Delete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The delete operator is used to remove a property from an object. It
            can also be used to delete an element from an array.
            <CodeSnippet
              language="javascript"
              code={`
              const person = {
              name: 'John',
              age: 30,
              city: 'New York'
              };

              delete person.age;
              console.log(person); // Output: { name: 'John', city: 'New York' }
              ======
              const numbers = [1, 2, 3, 4, 5];
              delete numbers[2];
              console.log(numbers); // Output: [1, 2, <1 empty item>, 4, 5]
              Or //		[1, 2, undefined, 4, 5]
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
          aria-controls="panel2-content"
          id="panel23-header"
        >
          <Typography>Object Notations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            These notations provide different ways to define and initialize
            objects Dot notation and bracket notation ( don t use this often)
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                const user = {
                fn: "test",
                ln: "rt",
                age: 56
                }
                console.log(user.fn);//"test"
                console.log(user['ln']);//"rt"
                for( let property in user){
                  console.log(user[property]);//"test" "rt" 56
                }
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
          aria-controls="panel2-content"
          id="panel24-header"
        >
          <Typography>Strict Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Strict Mode is a feature introduced in ECMAScript 5 (ES5) that
            allows you to place a program, or a function, in a "strict"
            operating context. This strict context helps detect common coding
            mistakes and "unsafe" actions in JavaScript and throws more
            exceptions. It also disables some features that are confusing or
            poorly thought out in JavaScript.`}
            <CodeSnippet
              language="javascript"
              code={`
                function myFunction() {
                  "use strict";
                  // Strict mode enabled for this function
                }
                `}
            />
            <ul>
              <li>It disallows the implicit creation of global variables.</li>
              <li>
                It disallows duplicate property names in objects and function
                parameter names.
              </li>
              <li>
                It makes this keyword behave differently, preventing it from
                defaulting to the global object.
              </li>
              <li>It disallows deleting variables and functions. </li>
              <li>It makes eval() safer by restricting its scope. </li>
              <li>It disallows octal syntax. </li>
              <li>
                It throws errors on certain invalid code that silently fails in
                non-strict mode.
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
          aria-controls="panel2-content"
          id="panel25-header"
        >
          <Typography>Anonymous Function </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In JavaScript, an anonymous function is a function that is defined
            without a name. Instead of being assigned to a variable or a
            property of an object, it&apos;s defined directly where it&apos;s
            needed.
            <CodeSnippet
              language="javascript"
              code={`
                // Anonymous function expression
                const add = function(a, b) {
                return a + b;
                };
                // Using the anonymous function
                console.log(add(2, 3)); // Output: 5
                `}
            />
            Anonymous functions are commonly used as arguments to other
            functions, such as in event handlers or array methods like map,
            filter, and reduce.
            <CodeSnippet
              language="javascript"
              code={`
              const numbers = [1, 2, 3, 4, 5];
              // Using an anonymous function with map
              const doubled = numbers.map(function(num) {
              return num * 2;
              });
              console.log(doubled); // Output: [2, 4, 6, 8, 10]
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
          aria-controls="panel2-content"
          id="panel26-header"
        >
          <Typography>Callbacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A callback is a function that is passed as an argument to another
            function and is executed after some operation has been completed or
            at a specified time. Callbacks are commonly used in asynchronous
            programming, event handling, and functional programming patterns.
            <br />
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              const firstFun= (num, callback) => {
                console.log("item", num);
                callback();
              };
              const bye = () => {
                console.log("bye")
              };
              firstFun(5, bye); // “item”, 5             “bye”

              //Mostly we use in map filter etc..
                const num = [1, 2, 3, 5];
                const num2 = num.map((item) => item + 1);  => this callback function
                console.log(num2) //[2, 3, 4, 6]
              `}
            />
            <strong>Other way</strong>
            <CodeSnippet
              language="javascript"
              code={`
              const call = (item) => {
                return item + 1;
              }
              const num2 = num.map(call);
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
          aria-controls="panel2-content"
          id="panel27-header"
        >
          <Typography>Closure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A closure is the combination of a function bundled together
            (enclosed) with references to its surrounding state (the lexical
            environment). In other words, a closure gives you access to an outer
            function&apos;s scope from an inner function closures are created
            every time a function is created, at function creation time.
            <CodeSnippet
              language="javascript"
              code={`
                function init() {
                  var name = "Mozilla"; // name is a local variable created by init
                  function displayName() {
                    // displayName() is the inner function, that forms the closure
                    console.log(name); // use variable declared in the parent function
                  }
                  displayName();
                }
                init(); //"Mozilla"
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
          aria-controls="panel2-content"
          id="panel28-header"
        >
          <Typography>Naming & Standards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Have few variable as possible`}
            <br />
            {`Don’t use num , str etc`}
            <br />
            {`Don’t use all capital unless its a const variable`}
            <br />
            {`Avoid using single-letter variable names unless they are used as loop counters`}
            <br />
            {`Use camelCase for variable names (e.g., myVariable, firstName, totalAmount).`}
            <br />
            <ul>
              <li>Use all uppercase letters for constant names. </li>
              <li>
                Separate words with underscores (e.g., MAX_SIZE, PI, API_KEY)
              </li>
            </ul>
            {`Use descriptive names that indicate the action or behavior of the function.`}
            <br />
            {`Use lowercase letters for file names.`}
            <br />
            {`Use camelCase for module names.`}
            <br />
            {`Use PascalCase for class names. (e.g., Person, Car, Book).`}
            <br />
            {`Use PascalCase (also known as UpperCamelCase) for constructor names.`}
            <br />
            {`Use positive, descriptive names for boolean variables and functions.(e.g., isActive, hasPermission, canEdit).`}
            <br />
            {`Avoid using cryptic or unclear abbreviations.`}
            <br />
            {`Use descriptive comments to explain the purpose, behavior, or intent of code.`}
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
          aria-controls="panel2-content"
          id="panel29-header"
        >
          <Typography>For...of vs For...in</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            For...of when you need to iterate over values of an iterable like
            arrays, strings, or other ordered collections, and use for...in when
            you need to iterate over the properties of an object.
            <CodeSnippet
              language="javascript"
              code={`
            const array = [1, 2, 3, 4, 5];
            for (const value of array) {
              console.log(value);
            }

            const obj = { a: 1, b: 2, c: 3 };
            for (const key in obj) {
              console.log(key, obj[key]);
            }
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
          aria-controls="panel2-content"
          id="panel30-header"
        >
          <Typography>Other method to iterate the object:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Object.keys() & forEach:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                let obj = {a: 1, b:2, c: 3}
                Object.keys(obj).forEach(key => {
                  console.log( key, obj[key]);
                })       // a 1        b 2         c 3
              `}
            />
            <strong>Object.values() & forEach:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                let obj = {a: 1, b:2, c: 3}
                Object.values(obj).forEach(value => {
                  console.log( value);
                }) //1    2      3
              `}
            />
            <strong>Object.entires() & forEach:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                let obj = {a: 1, b:2, c: 3}
                Object.entries(obj).forEach(([key, value]) => {
                  console.log( key, value);
                }) // a 1        b 2         c 3
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
          aria-controls="panel2-content"
          id="panel31-header"
        >
          <Typography>
            For...of with Object.keys(), Object.values(), or Object.entries():
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            You can use the for...of loop in combination with Object.keys(),
            Object.values(), or Object.entries() to iterate over properties.
            <CodeSnippet
              language="javascript"
              code={`
                const obj = { foo: "bar", baz: 42 };
                for( let key of Object.keys(obj)){
                  console.log(key, obj[key]) //foo bar   baz 42
                }

                for(let value of Object.values(obj)){
                  console.log(value) //bar 42
                }

                for(let [key, value] of Object.entries(obj)){
                  console.log(key, value) //foo bar   baz 42
                }
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
          aria-controls="panel2-content"
          id="panel32-header"
        >
          <Typography>Object.getOwnPropertyNames()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            This method returns an array of all properties (including
            non-enumerable properties except for those which use Symbol) found
            directly upon a given object.
            <CodeSnippet
              language="javascript"
              code={`
            const obj = { a: 1, b: 2, c: 3 };
            console.log(Object.getOwnPropertyNames(obj));    //[ 'a', 'b', 'c' ]
            Object.getOwnPropertyNames(obj).forEach(key => {
              console.log(key, obj[key]);
            }); //a 1     b 2      c 3
            `}
            />
            <strong>New EXAMPLE with all</strong>
            <CodeSnippet
              language="javascript"
              code={`
                const obj = {
                  a: 1,
                  b: 2,
                };

                Object.defineProperties(obj, {
                  c: {
                    value: 3,
                    enumerable: false,
                  },
                })

                const symbolKey = Symbol('key');
                obj[symbolKey] = 'value';
                console.log(Object.keys(obj)) //[ 'a', 'b' ]
                console.log(Object.getOwnPropertyNames(obj)); //[ 'a', 'b', 'c' ]
                console.log(Object.getOwnPropertySymbols(obj));  //[ Symbol(key) ]
                console.log(Reflect.ownKeys(obj)); //[ 'a', 'b', 'c', Symbol(key) ]

                //eg:
                const person = {};
                Object.defineProperty(person, 'name', {
                  value: 'Alice',
                  enumerable: false
                });
                Object.defineProperty(person, 'age', {
                  value: 30,
                  enumerable: true
                });

                console.log(Object.keys(person)) //[ 'age' ]
                const propertyNames = Object.getOwnPropertyNames(person);
                console.log(propertyNames); // Output: ["name", "age"]
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
          aria-controls="panel2-content"
          id="panel33-header"
        >
          <Typography>Empty Arrays</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
            let arr1 = [1, 2, 3, 4, 5]
            let arr2 = [1, 2, 3, 4, 5]
            let arr3 = [1, 2, 3, 4, 5]
            let arr4 = [1, 2, 3, 4, 5]
            let arr5 = [1, 2, 3, 4, 5]
            arr1 = [];
            arr2.splice(0);
            arr3.length = 0;

            while (arr4.length > 0) {
              arr4.pop();
            }

            while (arr5.length > 0) {
              arr5.shift();
            }

            console.log(arr1); //[]
            console.log(arr2); //[]
            console.log(arr3); //[]
            console.log(arr4); //[]
            console.log(arr5); //[]
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
          aria-controls="panel2-content"
          id="panel34-header"
        >
          <Typography>MUL Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            To create a mul function in JavaScript to multiply numbers, you can
            simply define a function that takes multiple arguments and
            multiplies them together
            <CodeSnippet
              language="javascript"
              code={`
                const test = (a) => {
                  return (b) => {
                    return (c) => {
                      return a * b * c
                    }
                  }
                }
                console.log(test(1)(2)(3)) //6

                //Using Rest Parameters
                const mul = (...args) => {
                  if(args.length === 0){
                    console.log(1)
                  }

                  let test = args.reduce((prd, currt) => {
                    console.log('prd', prd, currt) //1 1  1 2   2 3   6 4
                    return prd * currt
                  }, 1)
                  console.log(test) //24
                }
                mul(1, 2, 3, 4);
                console.log(mul([3, 4, 2])); //24
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
          aria-controls="panel2-content"
          id="panel35-header"
        >
          <Typography>Create Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            You can define an array using square brackets [] and populate it
            with values separated by commas
            <CodeSnippet
              language="javascript"
              code={`
                const arr = [1,3,5];
              `}
            />
            <strong>Creating an Array with the Array Constructor:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                Const badArr = new Array() =>. Don’t do this this is because Inconsistent Behavior:
              `}
            />
            <strong>Creating an Array with the Array.of() Method (ES6):</strong>
            <CodeSnippet
              language="javascript"
              code={`
                const arrayWithValues = Array.of(1, 2, 3, 4, 5);
              `}
            />
            <strong>
              Creating an Array with the Array.from() Method (ES6):
            </strong>
            <CodeSnippet
              language="javascript"
              code={`
                const arrayFromIterable = Array.from('hello');
                // Creates an array from an iterable (e.g., string)
                const arrayFromFunction = Array.from({ length: 5 }, (v, i) => i * 2); // v or _
                // [0, 2, 4, 6, 8]

                const arrayFromFunction = Array.from({ length: 5 }, (v, i) => i); //[0, 1, 2, 3, 4]
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
          aria-controls="panel2-content"
          id="panel36-header"
        >
          <Typography>Sequence generator (range)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range"
                target="_blank"
                rel="noreferrer"
              >
                Ref
              </a>
            </strong>
            <CodeSnippet
              language="javascript"
              code={`
                const range = (start, stop, step) =>
                Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
              `}
            />
            <strong>Example</strong>
            <CodeSnippet
              language="javascript"
              code={`
                // Generate numbers range 0..4
                range(0, 4, 1);
                // [0, 1, 2, 3, 4]

                // Generate numbers range 1..10 with step of 2
                range(1, 10, 2);
                // [1, 3, 5, 7, 9]

                //Basic Range Function
                function range(start, end, step = 1) {
                  const result = [];
                  for (let i = start; i < end; i += step) {
                    result.push(i);
                  }
                  return result;
                }
                // Example usage:
                console.log(range(1, 5));    // Output: [1, 2, 3, 4]
                console.log(range(2, 10, 2)); // Output: [2, 4, 6, 8]


                //Range Function with Array.from()
                function range(start, end, step = 1) {
                  return Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);
                }
                // Example usage:
                console.log(range(1, 5));    // Output: [1, 2, 3, 4]
                console.log(range(2, 10, 2)); // Output: [2, 4, 6, 8]
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
          aria-controls="panel2-content"
          id="panel37-header"
        >
          <Typography>Undefined vs Null</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>undefined:</strong> <br />
            <ul>
              <li>
                undefined represents the absence of a value or the value of a
                variable that has not been assigned.
              </li>
              <li>
                Variables that are declared but not initialized automatically
                have the value undefined.
                <li>
                  Functions that do not return a value implicitly return
                  undefined.
                </li>
                <li>
                  It&apos;s also the default value of uninitialized properties
                  in objects.
                </li>
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                let variable; // variable is declared but not assigned, so its value is undefined
                console.log(variable); // Output: undefined

                function doSomething() {
                  // This function does not return anything, so it implicitly returns undefined
                }
                const obj = {};
                console.log(obj.property); // Output: undefined (property is not initialized)
              `}
            />
            <strong>Null</strong> <br />
            <ul>
              <li>
                null represents the intentional absence of any object value or
                the value of a variable explicitly set to &quot;no value&quot;.
              </li>
              <li>
                It&apos;s often used as a placeholder or to indicate that a
                variable is intentionally empty or has no value.
              </li>
              <li>
                It&apos;s distinct from undefined, which is the default value
                for uninitialized variables.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
            let variable = null; // variable is intentionally set to null
            console.log(variable); // Output: null
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
          aria-controls="panel2-content"
          id="panel38-header"
        >
          <Typography>Number Issues</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            working with numbers can sometimes lead to unexpected behavior due
            to the way numbers are represented and handled internally
            <CodeSnippet
              language="javascript"
              code={`
              console.log(0.1 + 0.2 === 0.3); // Output: false
              console.log(0.2+0.4) //0.6000000000000001
              console.log((0.2+0.4).toFixed(1)) //"0.6"

              console.log((0.1 + 0.2).toFixed(1) === 0.3); // Output: false
              //beacuse console.log((0.1 + 0.2).toFixed(1)); // Output: "0.3" -> string not a number
              console.log(parseFloat((0.1 + 0.2).toFixed(1)) === 0.3); //true
              console.log(isNaN("wewt")) //true

              Number.isFinite(123);          // true (123 is a finite number)
              Number.isFinite(Infinity);     // false (Infinity is not a finite number)
              Number.isFinite(-Infinity);    // false (-Infinity is not a finite number)
              Number.isFinite(NaN);          // false (NaN is not a finite number)
              Number.isFinite('123');        // false ('123' is a string, not a number)
              Number.isFinite(true);         // false (true is converted to 1, which is a finite number)
              Number.isFinite(null);         // false (null is converted to 0, which is a finite number)
              Number.isFinite(undefined);    // false (undefined is not a number)
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
          aria-controls="panel2-content"
          id="panel39-header"
        >
          <Typography>Instanceof</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Instanceof operator is used to check whether an object belongs to a
            particular class or constructor function. It tests whether the
            prototype property of a constructor function appears anywhere in the
            prototype chain of an object
            <br />
            <br />
            {`object instanceof constructor`}
            <br />
            <strong>object:</strong> The object to be tested. constructor: The
            constructor function or class to test against.
            <CodeSnippet
              language="javascript"
              code={`
              class Animal {}

              class Dog extends Animal {}

              const animal = new Animal();
              const dog = new Dog();
              console.log(dog instanceof Dog);     // true
              console.log(dog instanceof Animal);  // true (Dog is a subclass of Animal)
              console.log(animal instanceof Animal); // true
              console.log(animal instanceof Dog); // false (Animal is not a subclass of Dog)

              console.log('hello' instanceof String); // Output: false
              `}
            />
            Primitive Values: instanceof does not work with primitive values
            like strings, numbers, or booleans:
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
          aria-controls="panel2-content"
          id="panel40-header"
        >
          <Typography>IIFE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Immediately Invoke Function Expression JavaScript function that is
            executed immediately after it is defined. It&apos;s often used to
            create a new scope for variables and avoid polluting the global
            scope, as well as to encapsulate code and create modules.
            <CodeSnippet
              language="javascript"
              code={`
            ( function () {
              //code here excuse immediately
            })()

            (() => {
              // Code here runs immediately
            })();

            ( function () {
              console.log("test");
            })(); //test

            (function() {
              console.log("test");
            }); //no output

            const test = (function() {
              const init = {
                id: 90,
                methods: {
                  call() {
                    console.log('Call method executed');
                  }
                }
              };
             return init;
             })();

            console.log(test);
            `}
            />
            <strong>Output</strong>
            <CodeSnippet
              language="javascript"
              code={`
                {
                  id: 90,
                  methods: {
                    call: call() {
                      console.log('Call method executed');
                    }
                  }
                }
              `}
            />
            <strong>Benefits of Using IIFEs</strong>
            <ul>
              <li>
                Local Scope: Encapsulates variables and functions to avoid
                conflicts with other code in the global scope.
              </li>
              <li>
                Avoid Global Pollution: Helps in reducing the risk of variable
                name collisions and pollution of the global namespace.
              </li>
              <li>
                Data Privacy: Enables private data and functions that are not
                accessible from outside the function.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const module = (function() {
                  let privateVar = 'I am private';

                  function privateFunction() {
                    return 'This is a private function';
                  }

                  return {
                    publicVar: 'I am public',
                    publicFunction: function() {
                      return 'This is a public function';
                    }
                  };
                })();

                console.log(module.publicVar);         // Output: 'I am public'
                console.log(module.publicFunction());  // Output: 'This is a public function'
                console.log(module.privateVar);        // Output: undefined (not accessible)
                console.log(module.privateFunction);   // Output: undefined (not accessible)

                //Basic Function with Private Variables
                const result = (function() {
                  let privateVar = 'I am private';

                  function privateFunction() {
                    return 'This is a private function';
                  }

                  return {
                    publicVar: 'I am public',
                    publicFunction: function() {
                      return privateFunction();
                    }
                  };
                })();

                console.log(result.publicVar);         // Output: 'I am public'
                console.log(result.publicFunction());  // Output: 'This is a private function'
                console.log(result.publicFunction);  //[Function: publicFunction]
                console.log(result.privateVar);        // Output: undefined (not accessible)
                console.log(result.privateFunction);   // Output: undefined (not accessible)


                // Accessing Private Variables Directly in Closure
                onst counter = (function() {
                  let count = 0;  // Private variable

                  function increment() {
                    count++;
                    return count;
                  }

                  function getCount() {
                    return count;
                  }

                  return function(action) {
                    if (action === 'increment') {
                      return increment();
                    } else if (action === 'getCount') {
                      return getCount();
                    }
                  };
                })();

                console.log(counter('increment')); // Output: 1
                console.log(counter('increment')); // Output: 2
                console.log(counter('getCount'));  // Output: 2

                //Private Variables with Parameters
                const person = (function(name, age) {
                  // Private variables
                  let _name = name;
                  let _age = age;

                  return {
                    getName: function() {
                      return _name;
                    },
                    getAge: function() {
                      return _age;
                    }
                  };
                })('Jane Doe', 25);

                console.log(person.getName()); // Output: 'Jane Doe'
                console.log(person.getAge());  // Output: 25

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
          aria-controls="panel2-content"
          id="panel41-header"
        >
          <Typography>JSON.stringify() vs JSON.parse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>JSON (JavaScript Object Notation).</strong>
            <br />
            <strong>JSON.stringify():</strong>
            <br />
            <ul>
              <li>
                This function converts a JavaScript object into a JSON string.
              </li>
              <li>
                It takes an object as an argument and returns its JSON
                representation.
              </li>
              <li>
                If the object contains nested objects or arrays, they are
                recursively converted into JSON strings.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
            const obj = { name: 'John', age: 30 };
            const jsonString = JSON.stringify(obj);
            console.log(jsonString); // Output: {"name":"John","age":30}
                `}
            />
            <strong>JSON.parse():</strong>
            <ul>
              <li>
                This function parses a JSON string and converts it into a
                JavaScript object.
              </li>
              <li>
                It takes a JSON string as an argument and returns the
                corresponding JavaScript object.{" "}
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
            const jsonString = '{"name":"John","age":30}';
            const obj = JSON.parse(jsonString);
            console.log(obj); // Output: { name: 'John', age: 30 }
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
          aria-controls="panel2-content"
          id="panel42-header"
        >
          <Typography>Maintaining State & Local Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Maintaining State:</strong> <br />
            State refers to the current condition or data of your application at
            any given moment. In JavaScript, you typically maintain state by
            storing data in variables, objects, or data structures. <br />{" "}
            <CodeSnippet
              language="javascript"
              code={`
                let count = 0;
                let user = {
                  name: 'John Doe',
                  age: 30,
                  email: 'john@example.com'
                };
              `}
            />
            <strong> Local Storage:</strong> <br />
            Local storage is a feature of web browsers that allows you to store
            data persistently across browser sessions. You can use the
            localStorage object in JavaScript to interact with local storage.{" "}
            <CodeSnippet
              language="javascript"
              code={`
                localStorage.setItem('username', 'john');
                let username = localStorage.getItem('username');
                localStorage.removeItem('username');
                localStorage.clear();

                const user = JSON.stringify({
                  firsName: "sum",
                  lastname: 'test'
                })

                localStorage.setItem("user", user);
                const firstName = JSON.parse(localStorage.getItem('user'));

                console.log(firstName)
                /*{firsName: "sum",
                  lastname: "test"
                } */
              `}
            />
            <strong> Limitations:</strong>
            <br />
            Local storage has a size limit (usually around 5-10MB) and stores
            data as strings, so you may need to serialize and deserialize
            complex data structures when storing and retrieving them.
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
          aria-controls="panel2-content"
          id=""
        >
          <Typography> Local Storage vs Session Storage vs Cookies </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong> Local Storage</strong>
            <ul>
              <li>
                Purpose: Stores data with no expiration time, meaning the data
                persists even when the browser is closed and reopened.
              </li>
              <li>
                Storage Capacity: Typically around 5-10 MB per origin (depending
                on the browser).
              </li>
              <li>
                Scope: Data is accessible only to the origin (protocol, domain,
                and port) that stored it. It is not sent to the server with
                every request.
              </li>
              <li>
                Data Access: Data is available for the entire lifespan of the
                origin&apos;s data.
              </li>
              <li>API: Accessed via the localStorage object in JavaScript.</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                // Set an item
                localStorage.setItem('key', 'value');

                // Get an item
                const value = localStorage.getItem('key');

                // Remove an item
                localStorage.removeItem('key');

                // Clear all items
                localStorage.clear();
              `}
            />
            <strong>Session Storage</strong>
            <ul>
              <li>
                Purpose: Stores data for the duration of the page session. Data
                is only available while the page is open and is cleared when the
                page session ends (e.g., when the tab or browser is closed).{" "}
              </li>
              <li>
                Storage Capacity: Typically around 5-10 MB per origin (similar
                to Local Storage).{" "}
              </li>
              <li>
                Scope: Data is accessible only within the same tab or window.
                Data is not shared across tabs or windows.{" "}
              </li>
              <li>
                Data Access: Data persists only for the duration of the page
                session.{" "}
              </li>
              <li>
                API: Accessed via the sessionStorage object in JavaScript.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                // Set an item
                sessionStorage.setItem('key', 'value');

                // Get an item
                const value = sessionStorage.getItem('key');

                // Remove an item
                sessionStorage.removeItem('key');

                // Clear all items
                sessionStorage.clear();
              `}
            />
            <strong>Cookies</strong>
            <ul>
              <li>
                Purpose: Store small amounts of data that are sent to the server
                with every HTTP request. Useful for server-side session
                management and for tracking user preferences.
              </li>
              <li>Storage Capacity: Limited to around 4 KB per cookie.</li>
              <li>
                Scope: Data is sent to the server with every request to the
                domain that set the cookie. Data is shared across all tabs and
                windows for the same domain.
              </li>
              <li>
                Data Access: Cookies can have an expiration time and are deleted
                when they expire or are manually cleared.
              </li>
              <li>
                API: Accessed via the document.cookie property in JavaScript.
                Management of cookies is typically done through server-side or
                client-side headers.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                // Set a cookie
                document.cookie = "key=value; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

                // Get cookies
                const cookies = document.cookie;

                // Remove a cookie (by setting its expiration date to the past)
                document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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
          aria-controls="panel2-content"
          id="panel43-header"
        >
          <Typography>HTML 5 APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                if(navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition((pos) => {
                    console.log("location", pos)
                    }, () => {
                    console.log("nope");
                  });
                  console.log("location ====");
                }
            `}
            />
            <strong>Canvas API:</strong> Allows for dynamic rendering of
            graphics, charts, and animations directly in the browser using
            JavaScript.
            <br />
            <strong>Web Storage (localStorage and sessionStorage):</strong>
            Provides a way to store data locally in the user&apos;s browser.
            localStorage stores data persistently across sessions, while
            sessionStorage stores data for the duration of a session.
            <br />
            <strong>IndexedDB:</strong> A client-side database system that
            allows web applications to store large amounts of structured data
            and perform complex queries.
            <br />
            <strong>Web Workers:</strong> Enables running JavaScript code in the
            background to perform tasks without blocking the main execution
            thread, improving performance and responsiveness.
            <br />
            <strong>WebSockets:</strong> Provides a full-duplex communication
            channel over a single TCP connection, allowing for real-time
            bidirectional communication between the client and server.
            <br />
            <strong>Geolocation API:</strong>
            Allows web applications to access the user&apos;s geographical
            location information (with user consent), enabling location-based
            services and functionalities.
            <br />
            <strong>File API:</strong> Enables web applications to interact with
            files on the user&apos;s local system, including reading, writing,
            and manipulating files.
            <br />
            <strong>Drag and Drop API:</strong> Allows users to drag and drop
            elements on a web page, facilitating intuitive interaction with web
            content.
            <br />
            <strong>History API:</strong> Enables manipulation of the
            browser&apos;s session history, allowing for dynamic updates to the
            URL without full page reloads and facilitating the implementation of
            single-page applications (SPAs).
            <br />
            <strong>WebRTC (Real-Time Communication):</strong> Provides APIs for
            real-time communication between web browsers, enabling peer-to-peer
            audio, video, and data sharing without the need for plugins or
            third-party software.
            <br />
            <strong>Media Capture and Streams API:</strong> Allows web
            applications to access audio and video streams from the user&apos;s
            device, enabling functionalities such as webcam access and
            audio/video recording.
            <br />
            <strong>Notifications API:</strong> Allows web applications to
            display system notifications to the user, providing timely updates
            and alerts.
            <br />
            <strong>Service Workers:</strong> Provides a scriptable network
            proxy in the web browser, allowing developers to control network
            requests and cache resources for offline use, improving performance
            and reliability.
            <br />
            <strong>Web Audio API:</strong> Enables advanced audio processing
            and synthesis in web applications, allowing for the creation of
            interactive audio experiences and games.
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
          aria-controls="panel2-content"
          id="panel44-header"
        >
          <Typography>Destructuring Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Destructuring in JavaScript allows you to extract data from arrays
            and objects into distinct variables, making it easier to work with
            complex data structures.
            <CodeSnippet
              language="javascript"
              code={`
                const arr = [10, 20, 2024]
                console.log(arr); //[10, 20, 2024]

                const [month, day, year] = [10, 20, 2024];
                console.log($ {month}/$ {day}/$ {year}); //“10/20/2024"

                Using alias
                let person ={
                  firstName: "test"
                }
                const { firstName : name } = person;
                console.log(name); //"test"
              `}
            />
            <strong>EXAMPLE</strong>
            <CodeSnippet
              language="javascript"
              code={`
                function displayUser({ name, age, address: { city, country } }) {
                  console.log(Name: {name});
                  console.log(Age: {age});
                  console.log(City: {city});
                  console.log(Country: {country});
                }

                const user = {
                  name: 'Jane Smith',
                  age: 28,
                  address: {
                    city: 'Los Angeles',
                    country: 'USA'
                  }
                };

                displayUser(user);

                //Output:
                Name: Jane Smith
                Age: 28
                City: Los Angeles
                Country: USA
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
          aria-controls="panel2-content"
          id="panel45-header"
        >
          <Typography>Rest & Spread Operator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Rest Operator (...):</strong>
            <br />
            The rest operator (...) allows you to represent an indefinite number
            of arguments as an array.
            <CodeSnippet
              language="javascript"
              code={`
                const display = (num) => {
                  console.log("num", num);
                }
                display(5) // "num", 5

                If we pass more then one argument also we get
                display(5, 6, 7, 8); //"num", 5 But if you do this

                const display = (...num) => {
                  console.log("num", num);
                }

                display(5, 6, 7, 8); //"num", [5, 6, 7, 8]
            `}
            />
            <strong>Spread Operator (...):</strong>
            <br />
            The spread operator (...) allows you to expand an array or object
            into individual elements.
            <br />
            Convenient for merging arrays, copying arrays and objects, and
            passing multiple arguments to functions.
            <CodeSnippet
              language="javascript"
              code={`
                let num = [2, 3, 5,6]
                console.log(...num) // 2 3 5 6

                const numbers = [1, 2, 3];
                console.log(Math.max(...numbers)); // Output: 3 (equivalent to Math.max(1, 2, 3))

                const arr1 = [1, 2, 3];
                const arr2 = [4, 5, 6];
                console.log(...arr1, ...arr2); //1 2 3 4 5 6
                const mergedArray = [...arr1, ...arr2];
                console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

                const obj1 = { x: 1, y: 2 };
                const obj2 = { ...obj1, z: 3 };
                console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
              `}
            />
            <strong>
              {`spread syntax is the opposite of rest syntax. Spread syntax
              "expands" an array into its elements, while rest syntax collects
              multiple elements and "condenses" them into a single element.`}
            </strong>
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
          aria-controls="panel2-content"
          id="panel46-header"
        >
          <Typography>Arrow Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            They provide a more compact syntax compared to traditional function
            expressions and offer some additional features
            <CodeSnippet
              language="javascript"
              code={`
                function display(num)     }
                  return num + 1;
                }
                console.log(display(2)) //3
                const display2 = num => num + 1
                console.log(display2(4)) //5
              `}
            />
            Arrow functions do not have their own this context; instead, they
            inherit the this value from the surrounding code.
            <CodeSnippet
              language="javascript"
              code={`
                function Person() {
                 this.age = 0;

                  setInterval(() => {
                    // this refers to the Person object
                    this.age++;
                    console.log(this.age);
                  }, 1000);
                }
              `}
            />
            const person = new Person();
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
          aria-controls="panel2-content"
          id="panel47-header"
        >
          <Typography>NaN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`NaN stands for "Not-a-Number" in JavaScript. It is a special value
            of the Number type that represents the result of an operation that
            cannot produce a meaningful numerical result.`}
            <CodeSnippet
              language="javascript"
              code={`
                const result = 'hello' / 5;
                console.log(result); // Output: NaN
                const result = parseInt('hello');
                console.log(result); // Output: NaN
              `}
            />
            It&apos;s important to note that NaN is considered a numeric value
            but is not equal to any other value, including itself:
            <CodeSnippet
              language="javascript"
              code={`
                console.log(NaN === NaN); // Output: false
              `}
            />
            you should use the isNaN() function or the Number.isNaN() method
            introduced in ES6:
            <CodeSnippet
              language="javascript"
              code={`
                console.log(isNaN(NaN));        // Output: true
                console.log(Number.isNaN(NaN)); // Output: true
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
          aria-controls="panel2-content"
          id="panel48-header"
        >
          <Typography>Undeclared vs Undefined</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Undeclared</strong>
            <br />
            An undeclared variable is a variable that has been referenced in
            code without being declared
            <CodeSnippet
              language="javascript"
              code={`
                console.log(foo); // ReferenceError: foo is not defined
              `}
            />
            <strong>Undefined</strong>
            <br />
            Undefined is a special value in JavaScript that indicates the
            absence of a value. It is also the default value of uninitialized
            variables and the value returned by functions that do not explicitly
            return a value
            <CodeSnippet
              language="javascript"
              code={`
                let bar;
                console.log(bar); // Output: undefined
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
          aria-controls="panel2-content"
          id="panel49-header"
        >
          <Typography>DOM Selectors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            DOM (Document Object Model) selectors are used to interact with HTML
            elements in a web page. They allow you to retrieve and manipulate
            elements dynamically.
            <CodeSnippet
              language="javascript"
              code={`
                const element = document.getElementById('myElement');

                getElementById() Shortcut -> const element = document.myElement;
              `}
            />
            getElementsByClassName, getElementsByTagName
            <CodeSnippet
              language="javascript"
              code={`
                //Selects the first element that matches a specified CSS selector.
                const element = document.querySelector('.myClass');

                const elements = document.querySelectorAll('div.myClass');

                //matches() method: checks if an element matches a specified CSS selector. Returns a boolean
                const matches = element.matches('.myClass')
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
          aria-controls="panel2-content"
          id="panel50-header"
        >
          <Typography>How to Copy an Object</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>1. Object.assign()</strong>
            <br />
            The Object.assign() method is used to copy the values of all
            enumerable own properties from one or more source objects to a
            target object. It returns the target object.
            <CodeSnippet
              language="javascript"
              code={`
                const obj1 = { a: 1, b: 2 };
                const obj2 = Object.assign({}, obj1);
                console.log(obj2); //{ a: 1, b: 2 }

                const obj2 = Object.assign(obj1)
                console.log(obj2); //{ a: 1, b: 2 }

                const obj1 = { a: 1, b: 2 };
                const obj3 = {c:3, d: 4}
                const obj2 = Object.assign({},obj1, obj3);
                console.log(obj2); //{ a: 1, b: 2, c: 3, d: 4 }
              `}
            />
            <strong>2. Spread Operator (...):</strong>
            <br />
            The spread operator (...) can also be used to create a shallow copy
            of an object. It spreads the properties of the source object into a
            new object.
            <CodeSnippet
              language="javascript"
              code={`
                const obj1 = { a: 1, b: 2 };
                const obj2 = { ...obj1 }; //{ a: 1, b: 2 }

                const obj1 ={a: 1, b: 2, c: {d:4, e:{f:5, g:{h:6, i:7}}}}

                const obj2 = {...obj1}
                console.log(obj2); //{ a: 1, b: 2, c: { d: 4, e: { f: 5, g: [Object] } } }

                const obj1 = { a: 1, b: 2 };
                const obj3 = {c:3, d: 4}
                const obj2 = {obj1, obj3};
                console.log(obj2); //{ obj1: { a: 1, b: 2 }, obj3: { c: 3, d: 4 } }
              `}
            />
            <strong>3.JSON.parse() and JSON.stringify():</strong>
            <br />
            You can convert the object to a JSON string using JSON.stringify(),
            and then parse the JSON string back into an object using
            JSON.parse(). This creates a deep copy of the object.
            <CodeSnippet
              language="javascript"
              code={`
                const obj1 = { a: 1, b: 2 };
                const obj2 = JSON.parse(JSON.stringify(obj1));
              `}
            />
            <strong>Shallow vs Deep Copy:</strong>
            <br />
            Object.assign() and the spread operator create shallow copies,
            meaning that nested objects are still references. The JSON method
            creates a deep copy, cloning all nested objects.
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
          aria-controls="panel2-content"
          id="panel51-header"
        >
          <Typography>
            Unicode VS ASCII (American Standard Code for Information
            Interchange)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Unicode</strong>
            <ul>
              <li>
                What it covers: Unicode is a much bigger system. It includes
                characters from all languages around the world, emojis, symbols,
                and more. It aims to represent every character from every
                language.
              </li>
              <li>
                How it works: Like ASCII, Unicode assigns a unique number to
                each character. However, Unicode can handle a much larger range
                of numbers to cover all these characters.
              </li>
              <li>
                Encoding: Unicode can be encoded in different ways, like UTF-8
                or UTF-16. UTF-8 is the most common and flexible, as it uses
                variable lengths to represent characters efficiently.
              </li>
              <li>
                Usage: It&apos;s essential for modern software that needs to
                support multiple languages, emojis, and diverse symbols.
                It&apos;s used in websites, apps, and systems where
                internationalization (supporting different languages) is
                important.
              </li>
            </ul>
            <br />
            <strong>ASCII</strong>
            <ul>
              <li>
                What it covers: ASCII is a basic coding system for computers. It
                includes English letters (both uppercase and lowercase),
                numbers, punctuation marks (like commas and periods), and some
                control characters (like Enter and Tab).
              </li>
              <li>
                How it works: Each character in ASCII is represented by a
                number. For example, the letter &quot;A&quot; is represented by
                the number 65.
              </li>
              <li>
                Limitations: ASCII only covers English characters and some basic
                symbols. It doesn&apos;t support other languages, accents, or
                special characters.
              </li>
              <li>
                Usage: It&apos;s used in older systems, simple programs, and
                where only basic English characters are needed.
              </li>
            </ul>
            <br />
            <strong>Key Differences</strong>
            <ul>
              <li>
                Coverage: ASCII covers basic English characters, while Unicode
                covers characters from all languages and many symbols.
              </li>
              <li>
                Complexity: ASCII is simple and uses fixed-size encoding.
                Unicode, especially UTF-8, is more complex but flexible and
                efficient for handling diverse characters.
              </li>
              <li>
                Usage: ASCII is used in simpler applications and older systems,
                while Unicode is necessary for modern international applications
                that need to support multiple languages and symbols.
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
          aria-controls="panel2-content"
          id="panel53-header"
        >
          <Typography>Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Objects are a fundamental and versatile data structure used to store
            collections of key-value pairs. JavaScript objects can be classified
            by three factors:
            <ul>
              <li>Enumerable or non-enumerable</li>
              <li>String or symbol</li>
              <li>
                Own property or inherited property from the prototype chain
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
          aria-controls="panel2-content"
          id="panel54-header"
        >
          <Typography>Enumerable vs Non-enumerable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Enumerable</strong>
            <br />
            An enumerable property is one that will be iterated over by methods
            such as for...in loops and Object.keys(). By default, properties
            defined directly on an object are enumerable.
            <CodeSnippet
              language="javascript"
              code={`
                const obj = { a: 1, b: 2 };
                for (const key in obj) {
                  console.log(key); // Output: 'a', 'b'
                }
              `}
            />
            <strong>Non-enumerable Properties</strong>
            <br />
            A non-enumerable property is one that will not be iterated over by
            for...in loops and will not appear in the result of Object.keys().
            Non-enumerable properties are typically created using
            Object.defineProperty() with the enumerable attribute set to false.
            <CodeSnippet
              language="javascript"
              code={`
                const obj = {};
                // Define properties with different enumerability
                Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
                Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
                Object.defineProperty(obj, 'c', { value: 3, enumerable: true });

                // Iterate over the properties using for...in loop
                console.log('Enumerating properties using for...in loop:');
                for (const key in obj) {
                  console.log(key); // Output: 'a', 'c' (b is non-enumerable and not iterated over)
                }

                // Retrieve keys using Object.keys()
                console.log('Retrieving keys using Object.keys():');
                console.log(Object.keys(obj)); // Output: ['a', 'c'] (b is non-enumerable and not included)

                // Check if a property is enumerable
                console.log('Check if properties are enumerable:');
                console.log(Object.getOwnPropertyDescriptor(obj, 'a').enumerable); // Output: true
                console.log(Object.getOwnPropertyDescriptor(obj, 'b').enumerable); // Output: false
                console.log(Object.getOwnPropertyDescriptor(obj, 'c').enumerable); // Output: true
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
          aria-controls="panel2-content"
          id="panel55-header"
        >
          <Typography>Compare 2 Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`=== will be false because object uses reference.   => Shallow Equality Check:`}
            <br />
            {`We can do JSON.stringfy       => Deep Equality Check (Using JSON.stringify()):`}
            <CodeSnippet
              language="javascript"
              code={`Example:
                const user1 = {
                  fn: "t1",
                  lan: "t2"
                };

                const user2 = {
                  fn: "t1",
                  lan: "t2"
                };

                console.log(user1 === user2) //false
                console.log(JSON.stringify(user1) === JSON.stringify(user2))
                //true if you change user2{ lan:”t2, fn:”t1”} this will be false
              `}
            />
            <strong>Deep Equality Check using ladash:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                const _ = require('lodash');
                const obj1 = { a: 1, b: { c: 2 } };
                const obj2 = { a: 1, b: { c: 3 } };
                console.log(_.isEqual(obj1) === _.isEqual(obj2));
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
          aria-controls="panel2-content"
          id="panel56-header"
        >
          <Typography>Services workers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Service workers are scripts that your browser runs in the
            background, separate from a web page, and can intercept network
            requests, cache or retrieve resources, and provide offline
            functionality. They enable features like push notifications and
            background sync.
            <br />
            <br />
            Service workers are a powerful tool for creating web applications
            that offer a more reliable and engaging user experience, especially
            in scenarios where network connectivity may be unreliable or
            intermittent. However, they also require careful implementation to
            ensure that they enhance the user experience without compromising
            security or performance.
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
          aria-controls="panel2-content"
          id="panel57-header"
        >
          <Typography>Removing Duplicates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            We can do it different methods like set, filter, reduce and includes
            <CodeSnippet
              language="javascript"
              code={`
                const arr = [1, 1,2, 3, 3, 3];
                const newSet = [... new Set(arr)];
                console.log('arr', newSet); //arr [ 1, 2, 3 ]

                const newset1 = arr.filter((value, index, array) => array.indexOf(value)=== index)
                console.log('arr', newset1); // arr [ 1, 2, 3 ]

                Eg: const newSet = [];
                arr.forEach((item) => {
                  if(!newSet.includes(item)){
                    newSet.push(item);
                  }
                })
                console.log("newSet", newSet) //newSet [ 1, 2, 3 ]
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
          aria-controls="panel2-content"
          id="panel58-header"
        >
          <Typography>HTTP Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Its set of request methods :
            <ul>
              <li>
                <strong>Get:</strong>Getting the data from specified resources,
                can be cached and remain un the browser history
              </li>
              <li>
                <strong>Post:</strong> submit data to be processed to specified
                resources , can’t cached and no bookmark
              </li>
              <li>
                <strong>Put:</strong> it replace or update the entire resources
                at specified URL, if its is not available it creates
              </li>
              <li>
                <strong>Patch:</strong> same as Put but it is used when we want
                to do partial update instead of entire thing
              </li>
              <li>
                <strong>Delete:</strong> remove specified resources
              </li>
              <li>
                <strong>Options:</strong>When a client sends an OPTIONS request
                to a server, the server responds with a list of HTTP methods and
                other options that are supported for the requested resource.
                This allows the client to determine how it can interact with the
                resource safely and effectively. One of the most common uses of
                the OPTIONS method is in Cross-Origin Resource Sharing (CORS)
                requests.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                Eg: OPTIONS /example HTTP/1.1
                Host: example.com

                HTTP/1.1 200 OK
                Allow: GET, POST, OPTIONS
              `}
            />
            <strong>HEAD:</strong>
            <br />
            <ul>
              <li>
                The HEAD method is similar to GET but is used to request the
                headers that would be returned if a GET request were to be made
                to the specified resource.
              </li>
              <li>
                It is useful for obtaining metadata about a resource without
                transferring the entire content.
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
          aria-controls="panel2-content"
          id="panel59-header"
        >
          <Typography>HTTP Status Code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>100</strong> {`-> information`}
            <br />
            <strong>200</strong> {`-> success`}
            <br />
            <strong>300 </strong>
            {`-> rerouting`}
            <br />
            <strong>400 </strong>
            {`-> client side error, 401 - auth error, 404 - not found error`}
            <br />
            <strong>500</strong> {`-> network error`}
            <br />
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
          aria-controls="panel2-content"
          id="panel60-header"
        >
          <Typography>REST</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            REST (Representational State Transfer) is an architectural style for
            designing networked applications. It defines a set of constraints
            and principles for building scalable, maintainable, and
            interoperable web services.
            <br />
            <br />
            <strong>Resource-Based:</strong> In REST, everything is considered a
            resource, which can be anything that can be uniquely identified.
            Resources are manipulated using a set of standardized operations,
            typically HTTP methods (GET, POST, PUT, DELETE, etc.).
            <br />
            <strong>Uniform Interface:</strong> REST emphasizes a uniform and
            consistent interface between clients and servers.
            <br />
            <strong>Stateless Communication:</strong> RESTful communication
            between the client and server is stateless, meaning that each
            request from the client to the server must contain all the necessary
            information for the server to fulfill the request.
            <br />
            <strong>Client-Server Architecture:</strong> REST separates the
            client from the server, allowing them to evolve independently.
            <br />
            <strong>Cacheability:</strong> Responses from the server can
            explicitly indicate whether they are cacheable or not.
            <br />
            <strong>Layered System:</strong> REST allows for the use of
            intermediary servers (proxies, gateways, etc.) between the client
            and server to improve scalability, security, and reliability.
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
          aria-controls="panel2-content"
          id="panel61-header"
        >
          <Typography>Rest vs GraphQL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            REST and GraphQL are both popular approaches for building APIs, but
            they have different philosophies and characteristics. Here&apos;s a
            comparison between the two.
            <br />
            <br />
            <strong>Data Fetching:</strong>
            <br />
            <ul>
              <li>
                <strong>REST:</strong> In RESTful APIs, each endpoint typically
                represents a specific resource, and clients fetch data by making
                HTTP requests to these endpoints. The server determines the
                structure of the response.
              </li>
              <li>
                <strong>GraphQL:</strong> With GraphQL, clients can specify
                exactly what data they need in a single request, and the server
                returns only that data. Clients can request nested or related
                data in a single query, reducing over-fetching and
                under-fetching of data.
              </li>
            </ul>
            <strong>Data Shape:</strong>
            <br />
            <ul>
              <li>
                <strong>REST:</strong>The server determines the structure of the
                response, and clients must accept the data in the format
                provided by the server, often leading to over-fetching or
                under-fetching of data.
              </li>
              <li>
                <strong>GraphQL:</strong>Clients have more control over the
                shape of the response data. They can specify the fields they
                need in the query, and the server returns exactly that data,
                allowing for more efficient data retrieval.
              </li>
            </ul>
            <strong>Endpoint Structure:</strong>
            <br />
            <ul>
              <li>
                <strong>REST:</strong>RESTful APIs typically have a fixed set of
                endpoints, each representing a resource or a collection of
                resources. Clients make requests to these endpoints using
                different HTTP methods (GET, POST, PUT, DELETE) to perform CRUD
                operations.
              </li>
              <li>
                <strong>GraphQL:</strong>There are no fixed endpoints in
                GraphQL. Instead, there is a single endpoint for executing
                queries and mutations. Clients send GraphQL queries to this
                endpoint, specifying the exact data they need, and the server
                responds with the requested data.
              </li>
            </ul>
            <strong>Versioning:</strong>
            <br />
            <ul>
              <li>
                <strong>REST:</strong>Versioning of APIs is often done by
                introducing new endpoints or adding version numbers to the URL.
                This can lead to endpoint proliferation and maintenance
                challenges.
              </li>
              <li>
                <strong>GraphQL:</strong>Since there is a single endpoint for
                executing queries and mutations, versioning is less of an issue.
                Clients can evolve their queries over time without breaking
                existing clients. Changes can be introduced gradually without
                requiring new endpoints.
              </li>
            </ul>
            <strong>Caching:</strong>
            <ul>
              <li>
                <strong>REST:</strong>Caching strategies in RESTful APIs are
                straightforward, as responses can be cached based on the URL and
                HTTP method.
              </li>
              <li>
                <strong>GraphQL:</strong>Due to the flexibility of queries and
                the dynamic nature of the data returned, caching GraphQL
                responses can be more challenging. Custom caching strategies may
                be needed to handle caching effectively.
              </li>
            </ul>
            <strong>Tooling and Ecosystem:</strong>
            <br />
            <ul>
              <li>
                <strong>REST:</strong>RESTful APIs have been around for a long
                time and have a mature ecosystem with a wide range of tools and
                libraries available for building and consuming APIs.
              </li>
              <li>
                <strong>GraphQL:</strong>GraphQL is newer and has a growing
                ecosystem with tools and libraries tailored specifically for
                GraphQL development. This includes tools for schema validation,
                query optimization, and client-side caching.
              </li>
            </ul>
            <br />
            REST is more established and may be a better fit for simpler,
            resource-based APIs, while GraphQL offers more flexibility and
            efficiency for complex, dynamic data-fetching requirements.
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
          aria-controls="panel2-content"
          id="panel62-header"
        >
          <Typography>Synchronous vs Asynchronous</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Synchronous Execution:</strong>
            <ul>
              <li>
                In synchronous code execution, statements are executed one after
                another in sequence. Each statement waits for the previous one
                to finish before executing.
              </li>
              <li>
                Synchronous operations block the execution thread, meaning that
                the code execution cannot proceed to the next statement until
                the current one completes.
              </li>
            </ul>
            <strong>Asynchronous Execution:</strong>
            <ul>
              <li>
                In asynchronous code execution, tasks are executed independently
                of the main program flow. Asynchronous operations allow other
                code to run while waiting for the asynchronous task to complete.
              </li>
              <li>
                Asynchronous operations typically involve callbacks, promises,
                or async/await syntax to handle the completion of tasks.
              </li>
              <li>
                Asynchronous operations in JavaScript include setTimeout,
                setInterval, XMLHttpRequest (XHR), fetch API, file I/O, database
                operations, and more.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                Eg: console.log("Statement 1");
                setTimeout(() => console.log("Statement 2"), 1000);
                console.log("Statement 3");
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
          aria-controls="panel2-content"
          id="panel63-header"
        >
          <Typography>Timers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In JavaScript, timers are used to schedule code execution at a
            specified time or after a certain delay. There are three main timer
            functions provided by the browser environment: setTimeout,
            setInterval, and clearTimeout.
            <br />
            <br />
            <strong>setTimeout:</strong>
            <ul>
              <li>
                The setTimeout function is used to execute a function or code
                snippet after a specified delay (in milliseconds). It takes two
                arguments: a function or code snippet to execute and the delay
                (in milliseconds).
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                setTimeout(() => console.log("Statement 2"), 1000);
              `}
            />
            <br />
            <strong>setInterval:</strong>
            <ul>
              <li>
                The setInterval function is used to repeatedly execute a
                function or code snippet at a specified interval (in
                milliseconds). It takes two arguments: a function or code
                snippet to execute and the interval (in milliseconds).
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const intervalId = setInterval(() => {
                  console.log('Repeated message');
                }, 1000); // Execute every 1 second

                // To stop the interval after some time
                setTimeout(() => {
                  clearInterval(intervalId);
                  console.log('Interval stopped');
                }, 5000);
              `}
            />
            <strong>clearTimeout/clearInterval:</strong>
            <ul>
              <li>
                The clearTimeout function is used to cancel a timeout set by
                setTimeout, and clearInterval is used to cancel an interval set
                by setInterval.
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
          aria-controls="panel2-content"
          id="panel64-header"
        >
          <Typography>Promises</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Promises in JavaScript are used for handling asynchronous
            operations. A promise represents a value (or the eventual completion
            or failure of an asynchronous operation) and allows you to attach
            callback functions to handle the result. Promises provide a cleaner
            and more flexible alternative to callback-based approaches for
            managing asynchronous code.
            <br />
            <br />
            <strong>Creating a Promise: </strong>
            <ul>
              <li>
                {`You create a new promise using the Promise constructor, which
                takes a function as an argument. This function, called the
                "executor function," has two parameters: resolve and reject.`}
              </li>
              <li>
                Inside the executor function, you perform some asynchronous
                operation, and then call resolve(value) when the operation is
                successful, or reject(reason) if it fails.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const myPromise = new Promise((resolve, reject) => {
                  // Perform an asynchronous operation
                  setTimeout(() => {
                    const result = Math.random();
                    if (result > 0.5) {
                      resolve(result); // Operation succeeded
                    } else {
                      reject(new Error('Operation failed')); // Operation failed
                    }
                  }, 1000);
                });
              `}
            />
            <strong>Consuming a Promise:</strong>
            <ul>
              <li>
                Once you have a promise, you can attach callback functions using
                the then and catch methods to handle the resolved value or the
                rejected reason, respectively.
              </li>
              <li>
                The then method is used to handle the fulfillment of the promise
                (i.e., when resolve is called), and the catch method is used to
                handle errors (i.e., when reject is called).
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                myPromise.then((value) => {
                  console.log('Promise resolved with value:', value);
                }).catch((error) => {
                  console.error('Promise rejected with error:', error);
                });
              `}
            />
            <strong>Chaining Promises:</strong>
            <ul>
              <li>
                Promises can be chained together using multiple then calls. Each
                then call returns a new promise, allowing you to chain
                asynchronous operations sequentially.
              </li>
              <li>
                You can also return a new promise from within a then callback to
                perform additional asynchronous operations.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                myPromise.then((value) => {
                  console.log('First promise resolved with value:', value);
                  return anotherAsyncOperation(); // Return a new promise
                }).then((result) => {
                  console.log('Second promise resolved with result:', result);
                }).catch((error) => {
                  console.error('Promise chain rejected with error:', error);
                });

                //EG:
                const myPromise = new Promise((resolve, reject) => {
                  const success = true; // Simulate a condition

                  setTimeout(() => {
                    if (success) {
                      resolve("The operation was successful!");
                    } else {
                      reject("The operation failed!");
                    }
                  }, 2000); // 2 seconds delay
                });

                myPromise
                  .then((message) => {
                    console.log(message); // Output: "The operation was successful!" after 2 seconds
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              `}
            />
            <strong>
              <a
                href="https://en.wikipedia.org/wiki/Concurrent_computing"
                target="_blank"
                rel="noreferrer"
              >
                Promise concurrency:
              </a>
            </strong>
            <br />
            The Promise class offers four static methods to facilitate async
            task concurrency
            <br />
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
                target="_blank"
                rel="noreferrer"
              >
                Promise.all():
              </a>
            </strong>
            <br />
            Fulfills when all of the promises fulfill; rejects when any of the
            promises rejects.
            <br />
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
                target="_blank"
                rel="noreferrer"
              >
                Promise.allSettled():
              </a>
            </strong>
            <br />
            Fulfills when all promises settle.
            <br />
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any"
                target="_blank"
                rel="noreferrer"
              >
                Promise.any():
              </a>
            </strong>
            <br />
            Fulfills when any of the promises fulfills; rejects when all of the
            promises reject.
            <br />
            <strong>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"
                target="_blank"
                rel="noreferrer"
              >
                Promise.race():
              </a>
            </strong>
            <br />
            Settles when any of the promises settles. In other words, fulfills
            when any of the promises fulfills; rejects when any of the promises
            rejects.
            <br />
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
          aria-controls="panel2-content"
          id="panel65-header"
        >
          <Typography>Every</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            This is done in the array.
            <br />
            Take every element of the array and do the calculations like add,
            check etc.
            <br />
            It return Boolean value
            <br />
            <br />
            <CodeSnippet
              language="javascript"
              code={`
            Eg:
                let arr1 =[3, 5, 6, 9];
                console.log(arr1.every(ele => ele > 2)) //true
                console.log(arr1.every(ele => ele > 10)) //false

            Eg:
                Str = ‘appa’
                let test = str.split('').every((char, i) => {
                  return char === str[str.length -1 -i]
                });

                console.log('Test', test) //true
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
          aria-controls="panel2-content"
          id="panel66-header"
        >
          <Typography>Finding array length with out length</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                let arr = [2, 4, ,6 ,7];
                let len = arr.reduce(acc => acc + 1, 0);

                console.log(len) //4
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
          aria-controls="panel2-content"
          id="panel67-header"
        >
          <Typography>Async/Await</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            async/await is a modern approach to handle asynchronous code, making
            it look more synchronous and easier to read.
            <br />
            <br />
            <CodeSnippet
              language="javascript"
              code={`
              // Longhand
                function fetchData() {
                  return fetch('https://api.example.com/data')
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                }
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
              // Shorthand
                async function fetchData() {
                  try {
                    const response = await fetch('https://api.example.com/data');
                    const data = await response.json();
                    console.log(data);
                  } catch (error) {
                    console.error(error);
                  }
                }
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
          aria-controls="panel2-content"
          id="panel68-header"
        >
          <Typography>HOF</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Higher-order functions (HOFs) are a powerful concept in JavaScript
            that allow you to work with functions in new and innovative ways.
            Here&apos;s a breakdown of what they are and how they&apos;re used:
            <br />
            <br />
            <strong>Concept:</strong>
            <ul>
              <li>
                A higher-order function is a function that does one or both of
                the following:
              </li>
              <li>
                Takes one or more functions as arguments. These functions are
                often called callbacks.
              </li>
              <li>Returns a new function as its result.</li>
              <li>
                HOFs essentially treat functions as first-class citizens in
                JavaScript, allowing you to pass them around and manipulate them
                like any other data type.
              </li>
            </ul>
            <strong>Benefits:</strong>
            <ul>
              <li>
                <strong>Abstraction:</strong> HOFs help you encapsulate complex
                logic into reusable functions, promoting code readability and
                maintainability.
              </li>
              <li>
                <strong>Composition:</strong> You can combine smaller HOFs to
                create more complex functionalities, making your code more
                modular and easier to test.
              </li>
              <li>
                <strong> Flexibility:</strong> HOFs allow you to write generic
                code that can work with different types of data and functions.
              </li>
            </ul>
            <strong>Common HOFs in JavaScript:</strong>
            <ul>
              <li>
                <strong>map():</strong> This function applies a callback
                function to each element in an array and returns a new array
                with the transformed elements.
              </li>
              <li>
                <strong>filter():</strong> This function creates a new array
                with all elements that pass a test implemented by the provided
                callback function.
              </li>
              <li>
                <strong>reduce():</strong> This function iterates over an array
                and applies a callback function against an accumulator and each
                element to reduce it to a single value.
              </li>
              <li>
                <strong>forEach():</strong> This function executes a provided
                function once for each array element.
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
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            To know the type of a JavaScript variable, we can use the typeof
            operator.
            <br />
            <br />
            <ol>
              <li>Primitive types</li>
              <ul>
                <li>
                  <strong>String</strong>
                  <br />
                  It represents a series of characters and is written with
                  quotes. A string can be represented using a single or a double
                  quote.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var str = "Vivek Singh Bisht"; //using double quotes
                      var str2 = 'John Doe'; //using single quotes
                    `}
                  />
                </li>
                <li>
                  <strong>Number</strong>
                  <br />
                  It represents a number and can be written with or without
                  decimals.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var x = 3; //without decimal
                      var y = 3.6; //with decimal
                    `}
                  />
                </li>
                <li>
                  <strong>BigInt</strong>
                  <br />
                  This data type is used to store numbers which are above the
                  limitation of the Number data type. It can store large
                  integers and is represented by adding “n” to an integer
                  literal.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var bigInteger =  234567890123456789012345678901234567890;
                    `}
                  />
                </li>
                <li>
                  <strong>Boolean</strong>
                  <br />
                  It represents a logical entity and can have only two values :
                  true or false. Booleans are generally used for conditional
                  testing.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var a = 2;
                      var b =  3;
                      var c =  2;
                      (a == b) // returns false
                      (a == c) //returns true
                    `}
                  />
                </li>
                <li>
                  <strong>Undefined</strong>
                  <br /> When a variable is declared but not assigned, it has
                  the value of undefined and it&apos;s type is also undefined.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var x; // value of x is undefined
                      var y = undefined; // we can also set the value of a variable as undefined
                    `}
                  />
                </li>
                <li>
                  <strong>Null</strong>
                  <br /> It represents a non-existent or a invalid value.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var z = null;
                    `}
                  />
                </li>
                <li>
                  <strong>Symbol</strong> <br />
                  It is a new data type introduced in the ES6 version of
                  javascript. It is used to store an anonymous and unique value.
                  <CodeSnippet
                    language="javascript"
                    code={`
                      var symbol1 = Symbol('symbol');
                    `}
                  />
                </li>
                <li>
                  <strong>typeof of primitive types :</strong>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      typeof "John Doe" // Returns "string"
                      typeof 3.14 // Returns "number"
                      typeof true // Returns "boolean"
                      typeof 234567890123456789012345678901234567890n // Returns bigint
                      typeof undefined // Returns "undefined"
                      typeof null // Returns "object" (kind of a bug in JavaScript)
                      typeof Symbol('symbol') // Returns Symbol
                    `}
                  />
                </li>
              </ul>
              <li>Non-primitive types</li>
              <ul>
                <li>
                  Primitive data types can store only a single value. To store
                  multiple and complex values, non-primitive data types are
                  used.
                </li>
                <li>Object - Used to store collection of data.</li>
                <CodeSnippet
                  language="javascript"
                  code={`
                      var obj1 = {
                        x:  43,
                        y:  "Hello world!",
                        z: function(){
                          return this.x;
                        }
                      }
                      // Collection of data as an ordered list
                      var array1 = [5, "Hello", true, 4.1];
                  `}
                />
              </ul>
            </ol>
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
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>
            ES6 (ECMAScript 6) vs ES2015 (ECMAScript 2015)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Key Features</strong>
            <ul>
              <li>
                <strong>Arrow Functions:</strong> Syntax for shorter function
                definitions and lexical scoping for this.
                <CodeSnippet
                  language="javascript"
                  code={`
                    eg:
                    const add = (a, b) => a + b;
                  `}
                />
              </li>
              <li>
                <strong>Classes:</strong>A more concise and object-oriented way
                to create classes and inheritance.
                <CodeSnippet
                  language="javascript"
                  code={`
                  Eg:
                    class Animal {
                      constructor(name) {
                        this.name = name;
                      }
                      speak() {
                        console.log($'{this.name} makes a sound.');
                      }
                    }
                  `}
                />
              </li>
              <li>
                <strong>Modules:</strong>
                <br />
                Standardized the use of import/export for modular code.
                <CodeSnippet
                  language="javascript"
                  code={`
                    // module.js
                    export const add = (a, b) => a + b;

                    // main.js
                    import { add } from './module';
                  `}
                />
              </li>
              <li>
                <strong>Template Literals:</strong>
                <br />
                Enhanced string literals that allow for embedded expressions.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const name = 'World';
                    console.log('Hello,$ {name}!');
                  `}
                />
              </li>
              <li>
                <strong>Let and Const:</strong>
                <br />
                Block-scoped variable declarations, providing better scoping
                rules than var.
                <CodeSnippet
                  language="javascript"
                  code={`
                    let x = 10;
                    const y = 20;
                  `}
                />
              </li>
              <li>
                <strong>Destructuring Assignment:</strong>
                <br />A syntax for unpacking values from arrays or properties
                from objects.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const [a, b] = [1, 2];
                    const {name, age} = {name: 'Alice', age: 25 };
                `}
                />
              </li>
              <li>
                <strong>Default Parameters:</strong>
                <br />
                Allows function parameters to have default values.
                <CodeSnippet
                  language="javascript"
                  code={`
                    function greet(name = 'Guest') {
                      console.log('Hello,$ {name}');
                    }
                  `}
                />
              </li>
              <li>
                <strong>Rest and Spread Operators:</strong>
                <br />
                Spread (...) allows an iterable to expand in places where
                multiple arguments or elements are expected. Rest (...) gathers
                elements into an array.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const arr = [1, 2, 3];
                    const newArr = [...arr, 4, 5];

                    function sum(...args) {
                      return args.reduce((acc, val) => acc + val, 0);
                    }
                  `}
                />
              </li>
              <li>
                <strong>Promises:</strong>
                <br />A native way to handle asynchronous operations.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const fetchData = () => {
                      return new Promise((resolve, reject) => {
                        setTimeout(() => resolve('Data loaded'), 1000);
                      });
                    };

                    fetchData().then(data => console.log(data));
                  `}
                />
              </li>
              <li>
                <strong>Symbols:</strong>
                <br />A new primitive type that is unique and immutable, often
                used to create unique property keys.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const uniqueKey = Symbol('unique');
                    const obj = {
                      [uniqueKey]: 'value'
                    };
                  `}
                />
              </li>
            </ul>
            <strong> Summary of Key Differences</strong>
            <ul>
              <li>
                <strong>ES6:</strong> An informal, shorthand name that continues
                to be widely recognized and used within the developer community.
              </li>
              <li>
                <strong>ES2015:</strong> The official name that aligns with the
                standardized naming convention reflecting the year of release.
              </li>
            </ul>
            <strong> Conclusion</strong>
            <br />
            In practice, ES6 and ES2015 can be used interchangeably. When you
            hear ES6, think of it as the informal, widely recognized name, and
            when you hear ES2015, recognize it as the formal, year-based name
            introduced with this edition. Both refer to the same pivotal update
            to JavaScript that introduced many of the features that modern
            developers rely on today.
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
          aria-controls="panel2-content"
          id="panel70-header"
        >
          <Typography>ES6 vs ES7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>ES7</strong>
            ES7 was a much smaller update compared to ES6, introducing just a
            couple of new features:
            <ul>
              <li>
                <strong>Exponentiation Operator:</strong>
                A new operator for exponentiation.
                <CodeSnippet
                  language="javascript"
                  code={`
                  const square = 2 ** 2; // 4
                  const cube = 2 ** 3; // 8
                  `}
                />
              </li>
              <li>
                <strong>Array.prototype.includes:</strong>
                A new method to check if an array includes a certain element.
                <CodeSnippet
                  language="javascript"
                  code={`
                const array = [1, 2, 3];
                const hasTwo = array.includes(2); // true
                `}
                />
              </li>
            </ul>
            <strong>Summary</strong>
            <ul>
              <li>
                <strong>ES6:</strong> A major update with many new features like
                classes, arrow functions, modules, promises, template literals,
                default parameters, and destructuring.
              </li>
              <li>
                <strong>ES7:</strong> A minor update with only two new features:
                the exponentiation operator (**) and the
                Array.prototype.includes method.
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
          aria-controls="panel2-content"
          id="panel71-header"
        >
          <Typography>Debugger</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The debugger for the browser must be activated in order to debug the
            code. Built-in debuggers may be switched on and off, requiring the
            user to report faults. The remaining section of the code should stop
            execution before moving on to the next line while debugging.
            <br />
            The debugger keyword in JavaScript is a tool used to stop the
            execution of code and trigger a breakpoint in the browser&apos;s
            debugging tool. When the code execution reaches the debugger
            statement, it pauses, allowing developers to inspect variables, step
            through code, and troubleshoot issues interactively.
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
          <Typography>Template literals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Template literals are strings delimited by backticks (``) that allow
            you to embed expressions and create multi-line strings. Here&apos;s
            how they work:
            <CodeSnippet
              language="javascript"
              code={`
                const myFun = (test)  => {
                  return console.log("test = ", test)
                }

                myFun("Hello");
                myFun  'Hello' // instead you can use template literals it can take it as argument
                //"test = ", ["Hello"]
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
          <Typography>Pure Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A pure function is a function that has the following
            characteristics:
            <ul>
              <li>
                Deterministic: Given the same inputs, it always produces the
                same output.
              </li>
              <li>
                No Side Effects: It does not modify any external state or rely
                on external state changes. It doesn’t alter variables, files,
                databases, or other objects outside its scope.
              </li>
              <li>
                Referential Transparency: It can be replaced by its result
                without changing the behavior of the program.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                function add(a, b) {
                    return a + b; // Always returns the same result for the same inputs
                }
            `}
            />
            Impure Funtion <br />
            <CodeSnippet
              language="javascript"
              code={`
                let counter = 0;
                  function increment() {
                      counter++; // Modifies external state (side effect)
                      return counter;
                  }
              `}
            />
            Pure functions are central to functional programming because they
            are predictable, testable, and easier to debug. Redux redcer
            functions are pure function.
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
          <Typography>Function Composition</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Function composition is a powerful technique that allows developers
            to combine multiple functions into a single function. This
            compositional approach promotes code reuse, modularity, and
            readability. In JavaScript, the compose function plays a central
            role in enabling function composition.
            <CodeSnippet
              language="javascript"
              code={`
                const add5 = (x) => x + 5;
                const multiplyBy3 = (x) => x * 3;
                const subtract10 = (x) => x - 10;

                const composedFunction = compose(subtract10, multiplyBy3, add5);
                const result = composedFunction(7);

                console.log(result); // Output: 36
              `}
            />
            <strong>Benefits of Function Composition:</strong>
            <ul>
              <li>
                <strong>Reusability:</strong> Small, reusable functions can be
                combined in different ways.
              </li>
              <li>
                <strong>Modularity:</strong> Code becomes easier to maintain and
                debug.
              </li>
              <li>
                <strong>Readability:</strong> Complex operations are broken into
                simpler, understandable steps.
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
          <Typography>Functional Programming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            (FP) is a programming paradigm focused on writing code by composing
            pure functions, avoiding shared state, and emphasizing immutability.
            It treats computation as the evaluation of mathematical functions
            and avoids changing state or mutable data.
            <strong>Key Principles of Functional Programming:</strong>
            <ul>
              <li>
                Pure Functions:
                <ul>
                  <li>
                    A function is pure if its output depends only on its input
                    and it has no side effects.
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      const add = (a, b) => a + b; // Pure function
                    `}
                  />
                </ul>
              </li>
              <li>
                Immutability:
                <ul>
                  <li>
                    Data cannot be changed after it is created; instead, new
                    data structures are created.
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      const arr = [1, 2, 3];
                      const newArr = [...arr, 4]; // Original array remains unchanged
                    `}
                  />
                </ul>
              </li>
              <li>
                First-Class Functions:
                <ul>
                  <li>
                    Functions are treated as first-class citizens, meaning they
                    can be assigned to variables, passed as arguments, or
                    returned from other functions.
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      const greet = () => "Hello!";
                      const callGreet = (fn) => fn();
                      console.log(callGreet(greet)); // Output: Hello!
                    `}
                  />
                </ul>
              </li>
              <li>
                Higher-Order Functions:
                <ul>
                  <li>
                    Functions that take other functions as arguments or return
                    them as results.
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      const double = (n) => n * 2;
                      const mapArray = (arr, fn) => arr.map(fn);
                      console.log(mapArray([1, 2, 3], double)); // Output: [2, 4, 6]
                    `}
                  />
                </ul>
              </li>
              <li>
                Declarative Code:
                <ul>
                  <li>
                    Focuses on what to do rather than how to do it, making code
                    more readable.
                  </li>
                  <CodeSnippet
                    language="javascript"
                    code={`
                      // Imperative
                      let sum = 0;
                      const nums = [1, 2, 3];
                      for (let i = 0; i < nums.length; i++) {
                        sum += nums[i];
                      }
                      console.log(sum); // 6

                      // Declarative
                      const sumNums = nums.reduce((acc, val) => acc + val, 0);
                      console.log(sumNums); // 6
                    `}
                  />
                </ul>
              </li>
            </ul>
            <strong>Advantages of Functional Programming:</strong>
            <ul>
              <li>Easier debugging and testing due to pure functions.</li>
              <li>Enhanced code readability and maintainability.</li>
              <li>
                Better scalability for parallel and concurrent processing.
              </li>
              <li>Avoids side effects, reducing bugs.</li>
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
          <Typography>Mutable vs Immutable objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Mutable Objects</strong>
            Mutable objects can have their content or state changed after they
            are created.
            <CodeSnippet
              language="javascript"
              code={`
                //Objects:
                const person = { name: "Alice" };
                person.name = "Bob"; // The 'person' object is mutated.
                console.log(person); // { name: "Bob" }

                //Arrays:
                const numbers = [1, 2, 3];
                numbers.push(4); // The 'numbers' array is mutated.
                console.log(numbers); // [1, 2, 3, 4]
              `}
            />
            <strong>Characteristics:</strong>
            <ul>
              <li>Changes affect the original reference. </li>
              <li>Can lead to side effects, making debugging more complex. </li>
              <li>
                Useful in certain scenarios where performance is critical.
              </li>
            </ul>
            <strong>Immutable Objects</strong>
            Immutable objects cannot be modified after creation. Any
            modification creates a new object or value.
            <ul>
              <li>
                Primitive Data Types (Immutable by Default): Strings, Numbers,
                Booleans, null, undefined, Symbols.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const name = "Alice";
                    const newName = name.replace("A", "E");
                    console.log(name); // "Alice" (original remains unchanged)
                    console.log(newName); // "Elice"
                  `}
                />
              </li>
              <li>
                Using Libraries for Immutable Data Structures: Libraries like
                Immutable.js and Immer provide immutable data structures.
                <CodeSnippet
                  language="javascript"
                  code={`
                    const { produce } = require("immer");

                    const person = { name: "Alice" };
                    const updatedPerson = produce(person, (draft) => {
                      draft.name = "Bob";
                    });

                    console.log(person); // { name: "Alice" }
                    console.log(updatedPerson); // { name: "Bob" }
                  `}
                />
              </li>
              <li>
                Arrays (Using Non-Mutating Methods):
                <CodeSnippet
                  language="javascript"
                  code={`
                    const numbers = [1, 2, 3];
                    const newNumbers = [...numbers, 4]; // Spread operator creates a new array.
                    console.log(numbers); // [1, 2, 3] (original unchanged)
                    console.log(newNumbers); // [1, 2, 3, 4]
                  `}
                />
              </li>
            </ul>
            <strong>Characteristics:</strong>
            <ul>
              <li>Promotes predictability and avoids side effects.</li>
              <li>Easier to debug and test.</li>
              <li>
                Slightly more memory-intensive due to the creation of new
                objects.
              </li>
            </ul>
            <strong> Mutating Methods:</strong>
            <ul>
              <li>Arrays: push(), pop(), splice(), sort(), reverse()</li>
              <li>
                Objects: Direct property assignment or Object.assign() (without
                cloning)
              </li>
            </ul>
            <strong>Non-Mutating Methods:</strong>
            <ul>
              <li>Arrays: concat(), slice(), map(), filter()</li>
              <li>
                Objects: Spread operator (...), Object.assign() (with cloning)
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
          <Typography>Currying function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Currying is a functional programming technique where a function is
            transformed into a series of functions, each taking a single
            argument. Instead of taking all arguments at once, the function
            takes them one by one and returns a new function until all arguments
            are provided.
            <br />
            A curried function breaks down a function that takes multiple
            arguments into a series of nested functions. Each function takes one
            argument and returns another function until all arguments are
            supplied. Once all arguments are provided, the final result is
            computed.
            <CodeSnippet
              language="javascript"
              code={`
                // Non-curried function:
                function add(a, b) {
                  return a + b;
                }
                console.log(add(2, 3)); // 5

                //Curried version:
                function add(a) {
                  return function (b) {
                    return a + b;
                  };
                }

                // Usage
                const addTwo = add(2); // Returns a new function
                console.log(addTwo(3)); // 5
                console.log(add(2)(3)); // 5 (direct invocation)
              `}
            />
            <strong>Benefits of Currying</strong>
            <ul>
              <li>
                <strong>Reusability: </strong>
                You can create specialized versions of a function by partially
                applying arguments.
                <CodeSnippet
                  language="javascript"
                  code={`
                        const multiply = (a) => (b) => a * b;

                        const double = multiply(2); // Partially applied function
                        console.log(double(5)); // 10
                      `}
                />
              </li>
              <li>
                <strong>Functional Composition: </strong>
                Currying simplifies combining functions to create more complex
                ones.
              </li>
              <li>
                <strong>Avoiding Repetition: </strong>Useful when dealing with
                repetitive tasks that share some arguments.
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
          <Typography>Temporal Dead Zone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The Temporal Dead Zone(TDZ) is a specific period or area of a block
            where a variable is inaccessible until it has been initialized with
            a value. This behavior in JavaScript that occurs when declaring a
            variable with the let and const keywords, but not with var. In
            ECMAScript 6, accessing a let or const variable before its
            declaration (within its scope) causes a ReferenceError.
            <CodeSnippet
              language="javascript"
              code={`
                function somemethod() {
                  console.log(counter1); // undefined
                  console.log(counter2); // ReferenceError
                  var counter1 = 1;
                  let counter2 = 2;
                }
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
          <Typography>Hoisting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Hoisting is a JavaScript mechanism where variable, function, and
            class declarations are moved to the top of their scope during the
            compilation phase, before the code execution begins. This means you
            can use these declarations in your code before they appear in the
            source.
            <br />
            Variables with var
            <CodeSnippet
              language="javascript"
              code={`
                console.log(a); // undefined (hoisted declaration)
                var a = 10;
                console.log(a); // 10
              `}
            />
            Variables with let and const
            <CodeSnippet
              language="javascript"
              code={`
                console.log(b); // ReferenceError: Cannot access 'b' before initialization
                let b = 20;

                console.log(c); // ReferenceError: Cannot access 'c' before initialization
                const c = 30;
              `}
            />
            Function Declarations
            <CodeSnippet
              language="javascript"
              code={`
                sayHello(); // "Hello, world!"
                function sayHello() {
                  console.log("Hello, world!");
                }
              `}
            />
            Function Expressions
            <CodeSnippet
              language="javascript"
              code={`
                sayHi(); // TypeError: sayHi is not a function
                var sayHi = function () {
                  console.log("Hi!");
                };
              `}
            />
            Class Declarations
            <CodeSnippet
              language="javascript"
              code={`
                const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
                class MyClass {
                  constructor() {
                    this.name = "Class Example";
                  }
                }
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
          <Typography>Typed Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A typed language is a programming language in which data types are
            explicitly defined or inferred. This means that variables,
            functions, and expressions have specific types, which dictate the
            kind of data they can handle and how operations are performed.
            <ul>
              <li>
                <strong>Statically Typed:</strong>
                {`Types are checked at compile-time (e.g., TypeScript, Java, C++). Errors related to types are caught before running the program.`}
                <CodeSnippet
                  language="javascript"
                  code={`
                        //typescript
                        let age: number = 30; // Type is explicitly defined
                       `}
                />
              </li>
              <li>
                <strong>Dynamically Typed:</strong>
                {`Types are checked at runtime (e.g., JavaScript, Python, Ruby). This provides flexibility but may lead to runtime errors.`}
                <CodeSnippet
                  language="javascript"
                  code={`
                        //javascript
                        let age = 30; // Type is inferred and flexible
                       `}
                />
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
          <Typography> {`Left shift (<<)`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`The left shift (<<) operator moves the bits of a number to the left by a specified number of positions, filling the empty spaces with zeros (0).`}

      <CodeSnippet
        language="javascript"
        code={`
         `}
      />
      <CodeSnippet
        language="javascript"
        code={`
          console.log(1 << 1);  // 2
          console.log(1 << 2);  // 4
          console.log(1 << 3);  // 8
          console.log(1 << 4);  // 16
         `}
      />
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

//parseInt() vs toString()
export default JavaScriptList;
