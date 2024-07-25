// // src/Home.js
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <Button component={Link} to="/lists" color="inherit">
//         Lists
//       </Button>
//       <p>Click on the Lists link above to see the Questions lists page.</p>
//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
import {
  Container,
  Accordion,
  // AccordionActions,
  AccordionSummary,
  AccordionDetails,
  // Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Fade from "@mui/material/Fade";
import CodeSnippet from "./CodeSnippet";

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
            {/* <CodeSnippet
              language="javascript"
              code={` `}
            /> */}
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
            <ul>
              <li>Number</li>
              <li>boolean</li>
              <li>string</li>
              <li>undefined</li>
              <li>null </li>
              <li>symbol Eg: const key = Symbol('unique');</li>
            </ul>
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
                Adding test4.firstName = "sumi"; only modifies test4, leaving
                test3 unchanged.
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel7-header"
        >
          <Typography>
            map() vs filter() vs reduce() and Flatting Array
          </Typography>
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
                (which accumulates the callback's return values), the current
                element, the current index, and the array being traversed.
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
              const flatArray = nestedArray.reduce((accumulator, currentValue) => {
                return accumulator.concat(currentValue);
              }, []);

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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Flat map</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            <CodeSnippet
              language="javascript"
              code={`
                //array.splice(start, deleteCount, item1, item2, ..., itemN);

                const numbers = [1, 2, 3, 14, 5];
                const sliced = numbers.slice(1);
                console.log(sliced); // Output: [ 2, 3, 14, 5 ]

                const numbers = [1, 2, 3, 14, 5];
                const sliced = numbers.slice(3);
                console.log(sliced); // Output: [ 14, 5 ]

                let arr = [1, 2, 3, 4];
                arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
                // Removes 2 elements starting at index 1, and adds 'a' and 'b'

                const fruits = ['apple', 'banana', 'grape'];
                fruits.splice(2, 0, 'orange', 'kiwi');
                console.log(fruits); // Output: ['apple', 'banana', 'orange', 'kiwi', 'grape']

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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Split()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id=""
        >
          <Typography>Slice()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            In this example, because username is an empty string (falsy),
            displayName is assigned the value "Guest".
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
            executed.<br />
            <strong>Global Context:</strong><br />
            When this is used in the global scope
            (outside of any function), it refers to the global object. In a
            browser environment, the global object is window. Ex:
            console.log(this === window) //true
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
            In JavaScript, arrays are a type of object. Therefore, when you use
            typeof with an array, it returns 'object'.
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
      <Accordion>
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
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel32-header"
        >
          <Typography>Object.getOwnPropertyNames()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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

            Object.defineProperty(obj, 'c', {
              value: 3,
              enumerable: false
            });

            const symbolKey = Symbol('key');
            obj[symbolKey] = 'value';
            console.log(Object.keys(obj)) //[ 'a', 'b' ]
            console.log(Object.getOwnPropertyNames(obj)); //[ 'a', 'b', 'c' ]
            console.log(Object.getOwnPropertySymbols(obj));  //[ Symbol(key) ]
            console.log(Reflect.ownKeys(obj)); //[ 'a', 'b', 'c', Symbol(key) ]
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel33-header"
        >
          <Typography>Empty Arrays</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel34-header"
        >
          <Typography>MUL Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel35-header"
        >
          <Typography>Create Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            const arrayFromFunction = Array.from({ length: 5 }, (v, i) => i * 2);
            // [0, 1, 2, 3, 4]
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel36-header"
        >
          <Typography>Sequence generator (range)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel37-header"
        >
          <Typography>Undefined vs Null</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                  It's also the default value of uninitialized properties in
                  objects.
                </li>
                let variable; // variable is declared but not assigned, so its
                value is undefined console.log(variable); // Output: undefined
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
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
                the value of a variable explicitly set to "no value".
              </li>
              <li>
                It's often used as a placeholder or to indicate that a variable
                is intentionally empty or has no value.
              </li>
              <li>
                It's distinct from undefined, which is the default value for
                uninitialized variables.
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel38-header"
        >
          <Typography>Number Issues</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            working with numbers can sometimes lead to unexpected behavior due
            to the way numbers are represented and handled internally
            <CodeSnippet
              language="javascript"
              code={`
              console.log(0.1 + 0.2 === 0.3); // Output: false
              console.log(0.2+0.4) //0.6000000000000001
              console.log((0.2+0.4).toFixed(1)) //"0.6"
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel39-header"
        >
          <Typography>Instanceof</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
              `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel40-header"
        >
          <Typography>IIFE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Immediately Invoke Function Expression JavaScript function that is
            executed immediately after it is defined. It's often used to create
            a new scope for variables and avoid polluting the global scope, as
            well as to encapsulate code and create modules.
            <CodeSnippet
              language="javascript"
              code={`
            ( function () {
              //code here excuse immediately
            })()

            ( function () {
              console.log("test");
            })();
            //test

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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel41-header"
        >
          <Typography>JSON.stringify() vs JSON.parse()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel42-header"
        >
          <Typography>Maintaining State & Local Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel43-header"
        >
          <Typography>HTML 5 APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
            <strong>Web Storage (localStorage and sessionStorage):</strong>{" "}
            Provides a way to store data locally in the user's browser.
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
            <strong>Geolocation API:</strong> Allows web applications to access
            the user's geographical location information (with user consent),
            enabling location-based services and functionalities.
            <br />
            <strong>File API:</strong> Enables web applications to interact with
            files on the user's local system, including reading, writing, and
            manipulating files.
            <br />
            <strong>Drag and Drop API:</strong> Allows users to drag and drop
            elements on a web page, facilitating intuitive interaction with web
            content.
            <br />
            <strong>History API:</strong> Enables manipulation of the browser's
            session history, allowing for dynamic updates to the URL without
            full page reloads and facilitating the implementation of single-page
            applications (SPAs).
            <br />
            <strong>WebRTC (Real-Time Communication):</strong> Provides APIs for
            real-time communication between web browsers, enabling peer-to-peer
            audio, video, and data sharing without the need for plugins or
            third-party software.
            <br />
            <strong>Media Capture and Streams API:</strong> Allows web
            applications to access audio and video streams from the user's
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel44-header"
        >
          <Typography>Destructuring Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Destructuring in JavaScript allows you to extract data from arrays
            and objects into distinct variables, making it easier to work with
            complex data structures.
            <CodeSnippet
              language="javascript"
              code={`
                const arr = [10, 20, 2024]
                console.log(arr); //[10, 20, 2024]

                const [month, day, year] = [10, 20, 2024];
                console.log(month/day/year); //“10/20/2024"

                Using alias
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel45-header"
        >
          <Typography>Rest & Spread Operator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                display(5) //5

                If we pass more then one argument also we get display(5, 6, 7, 8)
                //5 But if you do this
                const display = (...num) => {
                  console.log("num", num);
                }

                display(5, 6, 7, 8) //"num", [5, 6, 7, 8]
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
                const numbers = [1, 2, 3];
                console.log(Math.max(...numbers)); // Output: 3 (equivalent to Math.max(1, 2, 3))

                const arr1 = [1, 2, 3];
                const arr2 = [4, 5, 6];
                const mergedArray = [...arr1, ...arr2];
                console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

                const obj1 = { x: 1, y: 2 };
                const obj2 = { ...obj1, z: 3 };
                console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
              `}
            />
            <strong>
              spread syntax is the opposite of rest syntax. Spread syntax
              "expands" an array into its elements, while rest syntax collects
              multiple elements and "condenses" them into a single element.
            </strong>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel46-header"
        >
          <Typography>Arrow Function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel47-header"
        >
          <Typography>NaN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            NaN stands for "Not-a-Number" in JavaScript. It is a special value
            of the Number type that represents the result of an operation that
            cannot produce a meaningful numerical result.
            <CodeSnippet
              language="javascript"
              code={`
                const result = 'hello' / 5;
                console.log(result); // Output: NaN
                const result = parseInt('hello');
                console.log(result); // Output: NaN
              `}
            />
            It's important to note that NaN is considered a numeric value but is
            not equal to any other value, including itself:
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel48-header"
        >
          <Typography>Undeclared vs Undefined</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel49-header"
        >
          <Typography>DOM Selectors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            DOM (Document Object Model) selectors are used to interact with HTML
            elements in a web page. They allow you to retrieve and manipulate
            elements dynamically.
            <CodeSnippet
              language="javascript"
              code={`
                const element = document.getElementById('myElement');
              `}
            />
            getElementsByClassName, getElementsByTagName
            <CodeSnippet
              language="javascript"
              code={`
                const element = document.querySelector('.myClass'); //Selects the first element that matches a specified CSS selector.
                const elements = document.querySelectorAll('div.myClass');
                getElementById() Shortcut -> const element = document.myElement;
                matches() method: checks if an element matches a specified CSS selector. Returns a boolean
                const matches = element.matches('.myClass'
              `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel50-header"
        >
          <Typography>How to Copy an Object</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
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
          <Typography>
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
                Usage: It's essential for modern software that needs to support
                multiple languages, emojis, and diverse symbols. It's used in
                websites, apps, and systems where internationalization
                (supporting different languages) is important.
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
                number. For example, the letter 'A' is represented by the number
                65.
              </li>
              <li>
                Limitations: ASCII only covers English characters and some basic
                symbols. It doesn't support other languages, accents, or special
                characters.
              </li>
              <li>
                Usage: It's used in older systems, simple programs, and where
                only basic English characters are needed.
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel52-header"
        >
          <Typography>Encrypting Vs Hashing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Encrypting</strong>
            <ul>
              <li>
                Purpose: Encryption is used to protect sensitive data by
                converting it into an unreadable format (cipher text) that can
                only be decoded (decrypted) back into its original form (plain
                text) with a specific key or password.
              </li>
              <li>
                Process: Encryption algorithms (such as AES, DES, RSA) use
                mathematical transformations to scramble data according to a
                secret key. The encrypted data can only be decrypted by someone
                who has the correct key.
              </li>
              <li>
                Characteristics:
                <ul>
                  <li>
                    Reversibility: Encryption is reversible, meaning you can
                    decrypt the encrypted data back to its original form if you
                    have the decryption key.
                  </li>
                  <li>
                    Security: The security of encryption depends on the strength
                    of the encryption algorithm and the secrecy of the
                    encryption key.
                  </li>
                  <li>
                    Usage: Commonly used to protect sensitive information in
                    transit (e.g., during communication over the internet) and
                    at rest (e.g., stored data on disk).
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <strong>Hashing</strong>
            <ul>
              <li>
                Purpose: Hashing is used to verify data integrity and to
                generate fixed-size, unique representations (hash values) of
                data, typically for storing passwords securely or validating
                data.
              </li>
              <li>
                Process: Hash functions (such as SHA-256, MD5, bcrypt) take an
                input (message) and produce a fixed-size hash value. This value
                is deterministic (same input produces the same hash), but it is
                not reversible back to the original data.
              </li>{" "}
              <li>
                Characteristics:
                <ul>
                  <li>
                    Irreversibility: Hashing is a one-way process; you cannot
                    reverse the hash value back to the original data.
                    Deterministic: The same input always produces the same hash
                    value.
                  </li>
                  <li>
                    Security: A secure hash function makes it computationally
                    impractical to reverse-engineer the original data from the
                    hash value.
                  </li>
                  <li>
                    Usage: Commonly used for password storage (storing hashed
                    passwords instead of plain text), data integrity
                    verification, and digital signatures.
                  </li>
                </ul>
              </li>
            </ul>
            <strong>Note</strong>
            <p>
              If the input is "Hello World!" use the hashing algorithm SHA-256
              we allways get the fixed sixe result, it always produces a 256-bit
              (32-byte) hash value. standard cryptographic hashing algorithm
              like SHA-256, you will always get the same output (hash value) for
              the same input. When we use it to store the password we check the
              hash value to match the stored hash value instead of the real
              password.
            </p>
            <br />
            <strong>Key Differences</strong>
            <ul>
              <li>
                Reversibility: Encryption is reversible (plaintext ↔ ciphertext
                with key), while hashing is irreversible (plaintext → hash).
              </li>
              <li>
                Security Focus: Encryption focuses on confidentiality
                (protecting data from unauthorized access), while hashing
                focuses on data integrity (ensuring data has not been altered).
              </li>
              <li>
                Output Size: Encryption output (ciphertext) size depends on
                input size and algorithm, while hashing produces fixed-size
                outputs regardless of input size.
              </li>
              <li>
                Use Cases: Encryption is used for securing data in transit and
                at rest, while hashing is used for storing passwords securely
                and verifying data integrity.{" "}
              </li>
            </ul>
            <strong>Conclusion</strong> <br />
            In summary, encryption and hashing are both essential techniques in
            data security, each serving distinct purposes. Encryption protects
            data confidentiality by reversible transformation, while hashing
            ensures data integrity through irreversible, fixed-size
            representations. Understanding when and how to use each technique is
            crucial for implementing effective data protection strategies in
            software and systems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel53-header"
        >
          <Typography>Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel54-header"
        >
          <Typography>Enumerable vs Non-enumerable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel55-header"
        >
          <Typography>Compare 2 Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel56-header"
        >
          <Typography>Services workers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel57-header"
        >
          <Typography>Removing Duplicates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel58-header"
        >
          <Typography>HTTP Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel59-header"
        >
          <Typography>HTTP Status Code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel60-header"
        >
          <Typography>REST</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel61-header"
        >
          <Typography>Rest vs GraphQL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            REST and GraphQL are both popular approaches for building APIs, but
            they have different philosophies and characteristics. Here's a
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel62-header"
        >
          <Typography>Synchronous vs Asynchronous</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel63-header"
        >
          <Typography>Timers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel64-header"
        >
          <Typography>Promises</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                You create a new promise using the Promise constructor, which
                takes a function as an argument. This function, called the
                "executor function," has two parameters: resolve and reject.
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel65-header"
        >
          <Typography>Every</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel66-header"
        >
          <Typography>Finding array length with out length</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel67-header"
        >
          <Typography>Async/Await</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            async/await is a modern approach to handle asynchronous code, making
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel68-header"
        >
          <Typography>HOF</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Higher-order functions (HOFs) are a powerful concept in JavaScript
            that allow you to work with functions in new and innovative ways.
            Here's a breakdown of what they are and how they're used:
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                  the value of undefined and it's type is also undefined.
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
      <Accordion>
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
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel70-header"
        >
          <Typography>ES6 vs ES7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel71-header"
        >
          <Typography>debugger</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The debugger for the browser must be activated in order to debug the
            code. Built-in debuggers may be switched on and off, requiring the
            user to report faults. The remaining section of the code should stop
            execution before moving on to the next line while debugging.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel69-header"
        >
          <Typography>Different data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel70-header"
        >
          <Typography>Unicode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Container>
  );
};

export default Lists;
