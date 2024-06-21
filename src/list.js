import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const Lists = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  console.log("here");
  return (
    <Container>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        // slots={{ transition: Fade }}
        // slotProps={{ transition: { timeout: 400 } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>const</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with const are block-scoped and cannot be
            reassigned once initialized. However, the value they hold can still
            be mutable if it's an object or an array.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Let</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with let are also block-scoped, but they can be
            reassigned. They are usually preferred over var due to their block
            scope.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <Typography>Var</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Variables declared with var are function-scoped or globally scoped,
            but not block-scoped. They can be reassigned and hoisted (moved to
            the top of their function or global scope).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel4-header"
        >
          <Typography>== vs ===</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            * == (Equality Operator): console.log(5 == '5'); // Output: true. -
            performs type coercion * === (Strict Equality Operator):
            console.log(5 === '5'); // Output: false
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel5-header"
        >
          <Typography>Primitive data type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Number boolean, string, undefined, null and symbol - const key =
            Symbol('unique');
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel6-header"
        >
          <Typography>Pass By Value vs Pass By Reference</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Pass by Value:</strong>
            <br />
            * In pass by value, a copy of the actual value of the argument is
            passed to the function.
            <br />
            * Changes made to the parameter inside the function do not affect
            the original value outside the function.
            <br />
            <br />
            <strong>Example 1:</strong>
            <br />
            {`function increment(num) {`}
            <br />
            &nbsp;&nbsp;{`num += 1;`}
            <br />
            &nbsp;&nbsp;
            {`console.log("Inside function:", num); // Output: Inside function: 6`}
            <br />
            {`}`}
            <br />
            <br />
            {`let x = 5;`}
            <br />
            {`increment(x);`}
            <br />
            {`console.log("Outside function:", x); // Output: Outside function: 5`}
            <br />
            <br />
            <strong>Example 2:</strong>
            <br />
            {`let test = 3;`}
            <br />
            {`let test2 = test;`}
            <br />
            {`test2++;`}
            <br />
            {`console.log(test, " - ", test2); // 3 - 4`}
            <br />
            <br />
            <strong>Pass by Reference:</strong>
            <br />
            * In pass by reference, a reference to the original value of the
            argument is passed to the function.
            <br />
            * If the function modifies the parameter, it also modifies the
            original value outside the function.
            <br />
            * Objects (including arrays and functions) in JavaScript are passed
            by reference.
            <br />
            <br />
            <strong>Example 1:</strong>
            <br />
            {`function addElement(arr) {`}
            <br />
            &nbsp;&nbsp;{`arr.push(4);`}
            <br />
            &nbsp;&nbsp;
            {`console.log("Inside function:", arr); // Output: Inside function: [1, 2, 3, 4]`}
            <br />
            {`}`}
            <br />
            <br />
            {`let myArray = [1, 2, 3];`}
            <br />
            {`addElement(myArray);`}
            <br />
            {`console.log("Outside function:", myArray); // Output: Outside function: [1, 2, 3, 4]`}
            <br />
            <br />
            <strong>Example 2:</strong>
            <br />
            {`let test3 = { test: 'ert' };`}
            <br />
            {`let test4 = { ...test3 };`}
            <br />
            <br />
            {`test4.firstName = "sumi";`}
            <br />
            <br />
            {`console.log("test3", test3); // "test3", { test: "ert" }`}
            <br />
            {`console.log("test4", test4); // "test4", { firstName: "sumi", test: "ert" }`}
            <br />
            <br />
            <strong>Example 3:</strong>
            <br />
            {`let obj1 = {};`}
            <br />
            {`let obj2 = obj1;`}
            <br />
            {`obj2.firstName = "sumi";`}
            <br />
            <br />
            {`console.log("obj1", obj1); // { firstName: "sumi" }`}
            <br />
            {`console.log("obj2", obj2); // { firstName: "sumi" }`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel7-header"
        >
          <Typography>map() vs filter() vs reduce()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const doubled = numbers.map(num => num * 2);`}
            <br />
            {`console.log(doubled); //		[2, 4, 6, 8, 10]`}
            <br />
            {`console.log(numbers); //		[1, 2, 3, 4, 5]`}
            <br />
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
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const evens = numbers.filter(num => num % 2 === 0);`}
            <br />
            {`console.log(evens);`}
            <br />
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
                (which accumulates the callback's return values), the current
                element, the current index, and the array being traversed.
              </li>
            </ul>
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            {`const sum = numbers.reduce((acc, num) => acc + num, 0);`}
            <br />
            {`console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5);`}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel8-header"
        >
          <Typography>Push() </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds one or more elements to the end of an array and returns the new
            length of the array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.push(4); // arr is now [1, 2, 3, 4]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel9-header"
        >
          <Typography>Pop()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Removes the last element from an array and returns that element.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.pop(); // arr is now [1, 2], returns 3`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel10-header"
        >
          <Typography>Shift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Removes the first element from an array and returns that element.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.shift(); // arr is now [2, 3], returns 1`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel11-header"
        >
          <Typography>Unshift()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds one or more elements to the beginning of an array and returns
            the new length of the array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.unshift(0); // arr is now [0, 1, 2, 3]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel12-header"
        >
          <Typography>Splice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adds, removes, or replaces elements in an array at a specified
            index.
            <br />
            {`let arr = [1, 2, 3, 4];`}
            <br />
            {`arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]`}
            <br />
            {`// Removes 2 elements starting at index 1, and adds 'a' and 'b'`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel13-header"
        >
          <Typography>Sort()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorts the elements of an array in place and returns the sorted
            array.
            <br />
            {`let arr = [3, 1, 4, 2];`}
            <br />
            {`arr.sort(); // arr is now [1, 2, 3, 4]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel14-header"
        >
          <Typography>Reverse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Reverses the order of the elements in an array.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.reverse(); // arr is now [3, 2, 1]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel15-header"
        >
          <Typography>Fill()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fills all the elements of an array from a start index to an end
            index with a static value.
            <br />
            {`let arr = [1, 2, 3];`}
            <br />
            {`arr.fill(0); // arr is now [0, 0, 0]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel16-header"
        >
          <Typography>CopyWithin()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shallow copies part of an array to another location in the same
            array and returns it, without modifying its length.
            <br />
            {`let arr = [1, 2, 3, 4, 5];`}
            <br />
            {`arr.copyWithin(0, 3); // arr is now [4, 5, 3, 4, 5]`}
            <br />
            {`// Copies elements from index 3 to the start`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel17-header"
        >
          <Typography>Falsey value</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unique to JavaScript, except 6 all are truthy value Some values when
            you evaluate them as Booleans it will be falsey
            <br />
            {`const t1 = undefined`}
            <br />
            {`const t2 = null`}
            <br />
            {`const t3 = NaN`}
            <br />
            {`const t4 = ''`}
            <br />
            {`const t5 = 0`}
            <br />
            {`const t6 = false`}
            <br />
            <br />
            {`console.log("t1",Boolean(t1)); //false`}
            <br />
            {`console.log("t2",!!(t2));//false`} <br />
            {`console.log("t3",!!(t3));//false`} <br />
            {`console.log("t4",Boolean(t4));//false`} <br />
            {`console.log("t5",Boolean(t5));//false`} <br />
            {`console.log("t6",Boolean(t6));//false`} <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel18-header"
        >
          <Typography>Global Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Global variables are variables declared outside of any function or
            block scope. These variables have global scope, meaning they are
            accessible from anywhere in your code, including inside functions
            and blocks. Global variables are generally declared without using
            the var, let, or const keywords.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel19-header"
        >
          <Typography>This</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The this keyword refers to the context within which a function is
            executed. Global Context:When this is used in the global scope
            (outside of any function), it refers to the global object. In a
            browser environment, the global object is window. Ex:
            console.log(this === window) //true
            <br />
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
            {`function foo() {`}
            <br />
            {`console.log(this === window);`}
            <br />
            {`}`}
            <br />
            {`foo(); // Output: true`}
            <br />
            {`function foo() {`}
            <br />
            {`"use strict";`}
            <br />
            {`console.log(this == undefined);`}
            <br />
            {`}`}
            <br />
            {`foo(); // Output: true`}
            <br />
            <br />
            <strong>Method Invocation:</strong>
            <br />
            If a function is called as a method of an object, this refers to the
            object that owns the method.
            <br />
            {`const obj = {`}
            <br />
            {`name: 'John',`}
            <br />
            {`greet: function() {`}
            <br />
            {` console.log('Hello, ' + this.name);`}
            <br />
            {`}`}
            <br />
            {`};`}
            <br />
            {`obj.greet(); // Output: Hello, John`}
            <br />
            <br />
            <strong>Arrow Functions:</strong>
            <br />
            In arrow functions, this retains the value of the enclosing lexical
            context (the value of this from the surrounding code). Arrow
            functions do not have their own this binding.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel20-header"
        >
          <Typography>Coercion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            {`Console.log(“5”+ 5) //55`}
            <br />
            <br />
            <strong>Explicit Coercion:</strong>
            <ul>
              <li>
                Explicit coercion occurs when a developer intentionally converts
                a value from one data type to another using functions or
                operators specifically designed for type conversion.
              </li>
            </ul>
            {`// Converting string to number`}
            <br />
            {`let str = "10";`}
            <br />
            {`let num = parseInt(str);`}
            <br />
            {`console.log(num); // Output: 10`}
            <br />
            {`// Converting number to string`}
            <br />
            {`let value = 10;`}
            <br />
            {`let stringValue = String(value);`}
            <br />
            {`console.log(stringValue); // Output: "10"`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel21-header"
        >
          <Typography>typeof</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The typeof operator is used to determine the data type of a value.
            It returns a string indicating the type of the operand.
            <br />
            {`typeof 42; // "number"`}
            <br />
            {`typeof "hello"; // "string"`}
            <br />
            {`typeof true; // "boolean"`}
            <br />
            {`typeof undefined; // "undefined"`}
            <br />
            {`typeof null; // "object"`}
            <br />
            {`typeof { key: "value" }; // "object"`}
            <br />
            {`typeof [1, 2, 3]; // "object"`}
            <br />
            <br />
            In JavaScript, arrays are a type of object. Therefore, when you use
            typeof with an array, it returns 'object'.
            <br />
            {`typeof function() {}; // "function"`}
            <br />
            {`typeof Symbol("foo"); // "symbol"`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel22-header"
        >
          <Typography>Delete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The delete operator is used to remove a property from an object. It
            can also be used to delete an element from an array.
            <br />
            {`const person = {`}
            <br />
            {`name: 'John',`}
            <br />
            {`age: 30,`}
            <br />
            {`city: 'New York'`}
            <br />
            {`};`}
            <br />
            <br />
            <br />
            delete person.age;
            <br />
            {`console.log(person); // Output: { name: 'John', city: 'New York' }`}
            <br />
            {`======`}
            <br />
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            <br />
            {`delete numbers[2];`}
            <br />
            {`console.log(numbers); // Output: [1, 2, <1 empty item>, 4, 5]`}
            <br />
            {`Or //		[1, 2, undefined, 4, 5]`}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel23-header"
        >
          <Typography>Object Notations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These notations provide different ways to define and initialize
            objects Dot notation and bracket notation ( don t use this often)
            <br />
            {`const user = {`} <br />
            {`fn: "test",`} <br />
            {`ln: "rt",`} <br />
            {`age: 56`} <br />
            {`}`} <br /> <br />
            {`console.log(user.fn);//"test"`} <br />
            {`console.log(user['ln']);//"rt"`} <br />
            {`for( let property in user){`} <br />
            {`console.log(user[property]);//"test" "rt" 56`} <br />
            {`}`} <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel24-header"
        >
          <Typography>Strict Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Strict Mode is a feature introduced in ECMAScript 5 (ES5) that
            allows you to place a program, or a function, in a "strict"
            operating context. This strict context helps detect common coding
            mistakes and "unsafe" actions in JavaScript and throws more
            exceptions. It also disables some features that are confusing or
            poorly thought out in JavaScript.
            <br />
            {`function myFunction() {`}
            {`"use strict";`}
            {`// Strict mode enabled for this function`}
            {`}`}
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel25-header"
        >
          <Typography>Anonymous Function </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In JavaScript, an anonymous function is a function that is defined
            without a name. Instead of being assigned to a variable or a
            property of an object, it's defined directly where it's needed.
            <br />
            <br />
            {`// Anonymous function expression`}
            <br />
            {`const add = function(a, b) {`}
            <br />
            {`return a + b;`}
            <br />
            {`};`}
            <br />
            <br />
            {`// Using the anonymous function`}
            <br />
            {`console.log(add(2, 3)); // Output: 5`}
            <br />
            <br />
            Anonymous functions are commonly used as arguments to other
            functions, such as in event handlers or array methods like map,
            filter, and reduce.
            <br />
            {`const numbers = [1, 2, 3, 4, 5];`}
            <br />
            <br />
            {`// Using an anonymous function with map`}
            <br />
            {`const doubled = numbers.map(function(num) {`}
            <br />
            {`return num * 2;`}
            <br />
            {`});`}
            <br />
            {`console.log(doubled); // Output: [2, 4, 6, 8, 10]`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel26-header"
        >
          <Typography>Callbacks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A callback is a function that is passed as an argument to another
            function and is executed after some operation has been completed or
            at a specified time. Callbacks are commonly used in asynchronous
            programming, event handling, and functional programming patterns.
            <br />
            <br />
            {`const firstFun= (num, callback) => {`}
            <br />
            {`console.log("item", num);`}
            <br />
            {`callback();`}
            <br />
            {`};`}
            <br />
            <br />
            {`const bye = () => {`}
            <br />
            {`console.log("bye")`}
            <br />
            {`};`}
            <br />
            <br />
            {`firstFun(5, bye); // “item”, 5             “bye”`}
            <br />
            <br />
            {`Mostly we use in map filter etc..`}
            <br />
            {`const num = [1, 2, 3, 5];`}
            <br />
            {`const num2 = num.map((item) => item + 1);  => this callback function`}
            <br />
            {`console.log(num2) //[2, 3, 4, 6]`}
            <br />
            <br />
            <strong>Other way</strong>
            <br />
            {`const call = (item) => {`}
            <br />
            {`return item + 1;`}
            <br />
            {`}`}
            <br />
            {`const num2 = num.map(call);`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel27-header"
        >
          <Typography>Closure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A closure is the combination of a function bundled together
            (enclosed) with references to its surrounding state (the lexical
            environment). In other words, a closure gives you access to an outer
            function's scope from an inner function closures are created every
            time a function is created, at function creation time.
            <br />
            <br />
            {`function init() {`}
            <br />
            {`var name = "Mozilla"; // name is a local variable created by init`}
            <br />
            {`function displayName() {`}
            <br />
            {`// displayName() is the inner function, that forms the closure`}
            <br />
            {`console.log(name); // use variable declared in the parent function`}
            <br />
            {`}`}
            <br />
            {`displayName();`}
            <br />
            {`}`}
            <br />
            <br />
            {`init(); //"Mozilla"`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel28-header"
        >
          <Typography>Naming & Standards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel29-header"
        >
          <Typography>For...of vs For...in</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For...of when you need to iterate over values of an iterable like
            arrays, strings, or other ordered collections, and use for...in when
            you need to iterate over the properties of an object.
            <br />
            {`const array = [1, 2, 3, 4, 5];`}
            <br />
            {`for (const value of array) {`}
            <br />
            {`console.log(value);`}
            <br />
            {`}`}
            <br />
            <br />
            {`const obj = { a: 1, b: 2, c: 3 };`}
            <br />
            {`for (const key in obj) {`}
            <br />
            {`console.log(key, obj[key]);`}
            <br />
            {`}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel30-header"
        >
          <Typography>Other method to iterate the object:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Object.keys() & forEach:</strong>
            {`let obj = {a: 1, b:2, c: 3}`} <br /> <br />
            {`Object.keys(obj).forEach(key => {`}
            <br />
            {`console.log( key, obj[key]);`}
            <br />
            {`})       // a 1        b 2         c 3`}
            <br />
            <br />
            <strong>Object.values() & forEach:</strong>
            <br />
            <br />
            {`let obj = {a: 1, b:2, c: 3}`}
            <br />
            <br />
            {`Object.values(obj).forEach(value => {`}
            <br />
            {`console.log( value);`}
            <br />
            {`}) //1    2      3`}
            <br />
            <br />
            <strong>Object.entires() & forEach:</strong>
            <br />
            <br />
            {`let obj = {a: 1, b:2, c: 3}`}
            <br />
            <br />
            {`Object.entries(obj).forEach(([key, value]) => {`}
            <br />
            {`console.log( key, value);`}
            <br />
            {`}) // a 1        b 2         c 3`}
            <br />
            <br />
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Lists;
