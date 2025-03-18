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
                {`"Write Once, Run Anywhere".`}
              </li>
              <li>
                <strong>JavaScript:</strong>{" "}
                {`It is a light-weighted programming
                language (“scripting language”) for developing interactive web
                pages. It can insert dynamic text into the HTML elements.
                JavaScript is also known as the browser’s language.`}
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
          <Typography>Reverse String</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const reverseStr = (str) => {
                  let reverse = ""
                    for( let i =str.length - 1; i >= 0 ; i--){
                      reverse += str[i]
                    }
                  return reverse
                }

                console.log(reverseStr("Apple")) //"elppA"
             `}
            />

            <CodeSnippet
              language="javascript"
              code={`
                const reverseStr = (str) => {
                  return str.split("").reverse().join("");
                }

                console.log(reverseStr("apple")); // "elppa"
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
          <Typography>Palindrome</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions:</strong> <br />
            Given a string, return true if the string is a palindrome or false
            if it is not. Palindromes are strings that form the same word if it
            is reversed. *Do* include spaces and punctuation in determining if
            the string is a palindrome.
            <br />
            <strong>Examples:</strong> <br />
            {`palindrome("abba") === true`}
            <br />
            {`palindrome("abcdefg") === false`}
            <CodeSnippet
              language="javascript"
              code={`
                const palindrome = (str) => {
                  return str.split("").every((char, i) => {
                      return char === str[str.length - i - 1]
                    })
                  }

                  console.log(palindrome("mom")) //"mom"
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const palindrome = (str) => {
                  return str.split("").reverse().join("") === str
                }

                console.log(palindrome("mom")) //"mom"
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function palindrome(str) {
                  let start = 0;
                  let end = str.length -1;
                  while(start < end){
                    if(str[start] !== str[end]){
                      return false;
                    };
                    start++;
                    end--;
                  }
                  return true;
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
          <Typography>Find long word from sentence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const findLongWord = (str) => {
                  let word = ""
                  for (let newStr of str.split(" ")) {
                    console.log("new", word, newStr)
                    if (newStr.length > word.length) {
                      console.log("here")
                      word = newStr
                      }
                    }
                    return word
                  }

                  console.log(findLongWord("I love you too more and more every day!")) //"every"
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
          <Typography>Remove Duplicates from Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const removeDuplicates = (arr) => {
                  let noDuplicateArr = [];
                  for( let i =0; i < arr.length ; i++){
                    if(noDuplicateArr.indexOf(arr[i]) === -1){
                      noDuplicateArr.push(arr[i]);
                    }
                  }
                  return noDuplicateArr;
                }

                console.log(removeDuplicates([2, 6, 1, 6, 3, 1, 4])) //[2, 6, 1, 3, 4]
             `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const removeDuplicates = (arr) => {
                  return [... new Set(arr)];
                }

                console.log(removeDuplicates([2, 6, 1, 6, 3, 1, 4])) //[2, 6, 1, 3, 4]
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
          <Typography>Vowel Count</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const vowelCount = (str) => {
                let vowels = ["a", "e", "i", "o", "u"]
                let count = 0

                for (let char of str.toLowerCase()) {
                  if (vowels.includes(char)) {
                    count++
                  }
                }
                return count
              }

              console.log(vowelCount("hello world")) //3
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
          <Typography>Anagrams</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions:</strong> <br />
            Check to see if two provided strings are anagrams of eachother. One
            string is an anagram of another if it uses the same characters in
            the same quantity. Only consider characters, not spaces or
            punctuation. Consider capital letters to be the same as lower case.
            <br />
            <strong>Examples</strong> <br />
            {`anagrams('rail safety', 'fairy tales') --> True`}
            <br />
            {`anagrams('RAIL! SAFETY!', 'fairy tales') --> True`}
            <br />
            {`anagrams('Hi there', 'Bye there') --> False`}
            <CodeSnippet
              language="javascript"
              code={`
                const anagrams = (str1, str2) => {
                  let first = str1.split("").sort().join("")
                  let second = str2.split("").sort().join("")
                  return first === second
                }

                console.log(anagrams("listen", "silent"));//true
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                  function anagrams(stringA, stringB) {
                    return cleanStr(stringA) === cleanStr(stringB)
                  }

                  const cleanStr = (str) => {
                    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
                  }

                  console.log("anagrams", anagrams('rail safety', 'fairy tales'))  //"anagrams", true
                `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                  function anagrams(stringA, stringB) {
                    const charmap = (str) => {
                      const char = {}
                      for (let val of str.replace(/[^\w]/g, "").toLowerCase()) {
                        if (char[val]) {
                          char[val]++
                        } else {
                          char[val] = 1
                        }
                      }
                      return char
                    }

                    const obj1 = charmap(stringA)
                    const obj2 = charmap(stringB)

                    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                      return false
                    }

                    for (let ch in obj1) {
                      if (obj1[ch] !== obj2[ch]) {
                        return false
                      }
                    }
                    return true
                  }

                  console.log("anagrams", anagrams("rail safety", "fairy tales")) //"anagrams", true

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
          <Typography>Find largest number in array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const findLargestNum = (arr) => {
                  let largeNum = 0
                  for (let num of arr) {
                    if (largeNum < num) {
                      largeNum = num
                    }
                  }
                  return largeNum
                }

                console.log(findLargestNum([2, 8, 1, 7, 4, 9, 10, 23]))  //23
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
          <Typography>Find Prime number and list all prime numbers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                  const isPrime = (n) => {
                    if (n < 2) return false

                    for (let i = 2; i * i <= n ; i++) {
                      if (n % i === 0) {
                        return false
                      }
                    }
                    return true
                  }

                  console.log(isPrime(6)) //false
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`

                const isPrime = (n) => {
                  if (n < 2) return false

                  for (let i = 2; i * i  <= n ; i++) {
                    if (n % i === 0) return false
                  }
                  return true
                }

                const listPrime = (num) => {
                let list = [];

                  for (let i = 2; i < num; i++) {
                    if (isPrime(i)) {
                      list.push(i)
                    }
                  }
                      return list
                }


                console.log(listPrime(10)) //[2, 3, 5, 7]
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
          <Typography>Factorial number</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {` The product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7.`}
            <CodeSnippet
              language="javascript"
              code={`
                const factorialNum = (n) => {

                if( n === 0 || n === 1) return 1;
                return n * factorialNum(n - 1);

                }

                console.log(factorialNum(5)) //120
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
          <Typography>Is even number and list even number</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const isEvenNum = (n) => {

                  if( n % 2 === 0 ) return true;
                  return false;

                  }

                  console.log(isEvenNum(4)) //true
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                //Print all even numbers from 0 – n
                const listEvn = (n) => {
                  let nums = []

                  for (let i = 2; i <= n; i++) {         //for (let i = 2; i <= n; i += 2) {
                    if (i % 2 === 0) {
                      nums.push(i)
                    }
                  }
                  return nums
                }

                console.log(listEvn(9)) //[2, 4, 6, 8]
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
          <Typography> Find large number in nested array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const largestEle = (nestedArr) => {
                  let arr = nestedArr.flat(2)

                    return  Math.max(...arr)
                  }

                  const nestedArray = [1, [3, 5, [7, 9]], 2, [6, 8]];

                  console.log(largestEle(nestedArray)) //[2, 3, 5, 7]
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
          <Typography>Optimize frontend performance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <ul>
              <li>
                <strong>Code Splitting & Lazy Loading:</strong> By splitting the
                code into smaller modules and initially loading only the
                required components, developers can prioritize essential
                functionality and improve perceived performance. Bundling
                multiple files into one file also minimizes the required HTTP
                requests, leading to faster load times. Code-Splitting is a
                feature supported by bundlers like Webpack.
              </li>
              <li>
                <strong>Minify & Compress Assets:</strong>Minification involves
                removing unnecessary characters such as white spaces, comments,
                and line breaks from the code, reducing its size. Conversely,
                compression involves compressing the code files using algorithms
                like Gzip, reducing the overall file size and enhancing download
                speed.
                <ul>
                  <li>Use Webpack/Terser to minify JS & CSS.</li>
                  <li>
                    Gzip/Brotli compression (server-side) reduces bundle sizes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Caching:</strong>Caching involves storing frequently
                accessed data, such as images, scripts, and stylesheets, in the
                user&apos;s browser or a content delivery network (CDN).
                Utilizing browser caching headers, setting appropriate
                expiration times, and employing techniques like CDN caching can
                greatly enhance front-end performance.
              </li>
              <li>
                <strong>Optimize Rendering Performance:</strong>Avoid
                Unnecessary Re-renders by using React.memo to prevent re-renders
                when props don&apos;t change. Use useMemo when an expensive
                function re-runs unnecessarily. Use useCallback to prevent
                function re-creation. Use React.lazy and Suspense for code
                splitting and lazy loading.
              </li>
              <li>
                <strong> Optimize Network Requests: </strong>Reduce API Calls &
                Use Caching by Debounce/throttle API calls to avoid excessive
                requests. Use HTTP/2 or GraphQL for Efficient Data Fetching
              </li>
              <li>
                <strong>Optimize Runtime Performance: </strong> Use GPU
                acceleration and Web Workers for expensive computations.
              </li>
              <li>Optimize images, fonts, and enable compression</li>
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
          <Typography>Fibonacci sequence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                const fibonacci = (num) => {
                    if (num <= 0) {
                      return []
                    }
                    if (num === 1) {
                      return [0]
                    }
                    if (num === 2) {
                      return [0, 1]
                    }

                    let fib = [0, 1]

                    for (let i = 2; i < num; i++) {
                      fib.push(fib[i - 1] + fib[i - 2])
                    }

                    return fib
                  }

                  console.log(fibonacci(8)) //[0, 1, 1, 2, 3, 5, 8, 13]

              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function fib(n) {
                  const result = [0, 1];
                  for (let i = 2; i <= n; i++) {
                    const a = result[i - 1];
                    const b = result[i - 2];
                    result.push(a + b);
                  }
                  return result[result.length - 1];
                }


                console.log("fib", fib(10)) //"fib", 55
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function fib(n) {
                  if (n < 2) {
                    return n;
                  }

                  return fib(n - 1) + fib(n - 2);
                }

                console.log("fib", fib(10)) //"fib", 55
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
          <Typography>Capitalize the first letter of each word</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions:</strong>
            <br />
            Write a function that accepts a string. The function should
            capitalize the first letter of each word in the string then return
            the capitalized string.
            <br />
            <strong>Examples</strong>
            <br />
            {`capitalize('a short sentence') --> 'A Short Sentence'`}
            <br />
            {`capitalize('a lazy fox') --> 'A Lazy Fox'`}
            <br />
            {`capitalize('look, it is working!') --> 'Look, It Is Working!'`}
            <CodeSnippet
              language="javascript"
              code={`
                const titleCase = (str) => {
                  let sent = []
                  for (let word of str.split(" ")) {
                    sent.push(word.charAt(0).toUpperCase() + word.slice(1))
                  }
                  return sent.join(" ")
                }

                console.log(titleCase("this is the first test")) //"This Is The First Test"
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const titleCase = (str) => {
                  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)). join(" ");
                }

                console.log(titleCase("this is the second test")) //"This Is The Second Test"
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function capitalize(str) {
                    const words = [];
                    for (let element of str.split(" ")) {
                      words.push(element[0].toUpperCase() + element.slice(1));
                    }
                    return words.join(" ");
                  }
                  console.log(capitalize("this is the third test")) //"This Is The Third Test"
                `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function capitalize(str) {
                  let words = str[0].toUpperCase();
                  for (let i = 1; i < str.length; i++) {
                    if (str[i - 1] === " ") {
                      words += str[i].toUpperCase();
                    } else {
                      words += str[i];
                    }
                  }
                  return words;
                }
                console.log(capitalize("this is the fourth test")) //"This Is The Fourth Test"
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
          <Typography>Debounce</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Debouncing is a technique used to delay the execution of a function
            until after a certain period of inactivity. It is commonly used in
            scenarios like search inputs, resize events, and button clicks to
            optimize performance and prevent unnecessary function calls.
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
          <Typography>Chunk</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions:</strong> <br />
            Given an array and chunk size, divide the array into many subarrays
            where each subarray is of length size
            <br />
            <strong>Examples:</strong> <br />
            {`chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]`}
            <br />
            {`chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]`}
            <br />
            {`chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]`}
            <br />
            {`chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]`}
            <br />
            {`chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]`}
            <CodeSnippet
              language="javascript"
              code={`
                function chunk(array, size) {
                  const chuncked = [];
                  let index = 0;
                  while (index < array.length) {
                    chuncked.push(array.slice(index, index + size));
                    index += size;
                  }
                  return chuncked;
                }

                console.log("chunk", chunk([1, 2, 3, 4], 2)) //"chunk", [[1, 2], [3, 4]]
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function chunk(array, size) {
                  const chuncked = [];

                  for (let elm of array) {
                    const last = chuncked[chuncked.length - 1];

                    if (!last || last.length === size) {
                      chuncked.push([elm]);
                    } else {
                      last.push(elm);
                    }
                  }
                  return chuncked;
                }

                console.log("chunk", chunk([1, 2, 3, 4], 2)) //"chunk", [[1, 2], [3, 4]]
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
          <Typography>FizzBuzz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions</strong>
            <br />
            Write a program that console logs the numbers from 1 to n. But for
            {` multiples of three print "fizz" instead of the number and for the
            multiples of five print "buzz". For numbers which are multiples of
            both three and five print "fizzbuzz".`}
            <br />
            <strong>Example</strong>
            <br />
            {`fizzBuzz(5);`}
            <br />
            {`1`}
            <br />
            {`2`}
            <br />
            {`fizz`}
            <br />
            {`4`}
            <br />
            {`buzz`}
            <CodeSnippet
              language="javascript"
              code={`
                function fizzBuzz(n) {
                  for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 === 0) {
                      console.log('fizzbuzz');
                    } else if (i % 3 === 0) {
                      console.log("fizz");
                    } else if (i % 5 === 0) {
                      console.log("buzz");
                    } else {
                      console.log("number",i);
                    }
                  }
                }
                fizzBuzz(5);
                //"number", 1
                //"number", 2
                //"fizz"
                //"number", 4
                //"buzz"
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
          <Typography>Matrix</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>Directions:</strong> <br />
            Write a function that accepts an integer N and returns a NxN spiral
            matrix.
            <br />
            <strong>Examples</strong> <br />
            {`matrix(2)`}
            <br />
            {`[[1, 2],`}
            <br />
            {`[4, 3]]`}
            <br />
            {`matrix(3)`}
            <br />
            {`[[1, 2, 3],`}
            <br />
            {`[8, 9, 4],`}
            <br />
            {`[7, 6, 5]]`}
            <br />
            {`matrix(4)`}
            <br />
            {`[[1,   2,  3, 4],`}
            <br />
            {`[12, 13, 14, 5],`}
            <br />
            {`[11, 16, 15, 6],`}
            <br />
            {`[10,  9,  8, 7]]`}
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
          <Typography>Check Phone Number</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Write a function that accepts an array of 10 integers (between 0 and
            9), that returns a string of those numbers in the form of a phone
            number.
            <br />
            <strong>Example: </strong> <br />
            {`createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"`}
            <br />
            <br />
            {"return `(${first}) ${second}-${third}`"}
            <CodeSnippet
              language="javascript"
              code={`
                function createPhoneNumber(numbers) {
                  if (numbers.length !== 10) {
                    return "Not a phone number"
                  }

                  let first = numbers.slice(0, 3).join("")
                  let second = numbers.slice(3, 6).join("")
                  let third = numbers.slice(6, 10).join("")
                  //For the return statement look above
              }

              console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function createPhoneNumber(numbers){
                  var format = "(xxx) xxx-xxxx";

                  for(var i = 0; i < numbers.length; i++)
                  {
                    format = format.replace('x', numbers[i]);
                  }

                  return format;
                }
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function createPhoneNumber(numbers) {
                    numbers = numbers.join("")
                    return (
                      "(" +
                      numbers.substring(0, 3) +
                      ") " +
                      numbers.substring(3, 6) +
                      "-" +
                      numbers.substring(6)
                    )
                  }

                  //Another Method
                  function createPhoneNumber(numbers){
                    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
                    // Or  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
                  }

                  //Another Method
                  createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())
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
          <Typography>Abbreviate a Word Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Write a function to convert a name into initials. This kata strictly
            takes two words with one space in between them.
            <br />
            The output should be two capital letters with a dot separating them.
            <br />
            It should look like this:
            <br />
            {`Sam Harris => S.H`}
            <br />
            {`patrick feeney => P.F`}
            <CodeSnippet
              language="javascript"
              code={`
                function abbrevName(name) {
                  let result = []
                    for (let data of name.split(" ")) {
                      result.push(data[0].toUpperCase())
                    }
                    return result.join(".")
                }

                console.log(abbrevName("Sam harris")) // "S.H"
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function abbrevName(name){
                  var nameArray = name.split(" ");
                  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
                }
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function abbrevName(name){
                  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
                }
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
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
          <Typography>Sentence Smash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Write a function that takes an array of words and smashes them
            together into a sentence and returns the sentence. You can ignore
            any need to sanitize words or add punctuation, but you should add
            spaces between each word. Be careful, there shouldn&apos;t be a
            space at the beginning or the end of the sentence!
            <br />
            <strong>Example:</strong>
            <br />
            {`['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'`}
            <br />
            {`words = ['hello', 'world', 'this', 'is', 'great']`}
            <br />
            {`smash(words) # returns "hello world this is great"`}
            <CodeSnippet
              language="javascript"
              code={`
                function smash (words) {
                  return words.join(" ").trim()
                }
                console.log(smash(["this", "is", "a", "really", "long", "sentence"])) // "this is a really long sentence"
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function smash(words){
                  let result = '';
                  for(let i = 0;i < words.length; i++){
                    if(i == 0){//this is made so there is no space at start
                      result = result + words[i]
                    }else{
                      result = result + ' ' + words[i]
                    }
                  }
                  return result
                };
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function smash(words) {
                  return words.length !== 0 ? words.reduce((res, v) => res + " " + v) : ""
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
          <Typography>Perimeter of squares in a rectangle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2
+ 3 + 5 + 8) = 4 * 20 = 80`}{" "}
            <br />
            <strong>Example:</strong>
            <br />
            {`perimeter(5), 80 ->  1, 1, 2, 3, 5, 8`}
            <br />
            {`perimeter(7), 216) ->  1, 1, 2, 3, 5, 8, 13, 21`}
            <CodeSnippet
              language="javascript"
              code={`
                const perimeter = (n) => {
                  let fib = []
                  if (n === 0) {
                    fib.push(1)
                  } else if (n === 1) {
                    fib.push(1, 1)
                  } else {
                    fib = [1, 1]
                    for (let i = 2; i <= n; i++) {
                      fib.push(fib[i - 1] + fib[i - 2])
                    }
                  }

                  return 4 * fib.reduce((ac, cu) => ac + cu, 0)
                }

                console.log("Fib===", perimeter(0)) // 4
                console.log("Fib===", perimeter(1)) // 8
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const perimeter = (n) => {
                  var fib = [0,1];
                    for(var i = 0; i < n; i++){
                      fib.push(fib[fib.length-1]+fib[fib.length-2]);
                    }
                    return fib.reduce((a,b)=>a+b)*4;
                  }

                  console.log("Fib===", perimeter(5)) // 80
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
          <Typography>Calculate Game points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                function points(games) {
                  let result = 0
                    games.map((nu) => {
                      let test = nu.split(":");
                      if(test[0] > test[1]) {
                      result = result + 3;
                      } else if(test[0] === test[1]) {
                      result = result + 1
                      }
                    })
                    return result
                  }

                  console.log( points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])) // 15
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function points(games) {
                  return games.reduce((current, element) => {
                    let arraySplit = element.split(":")
                    return arraySplit[0] > arraySplit[1]
                      ? (current += 3)
                      : arraySplit[0] < arraySplit[1]
                        ? current
                        : (current += 1)
                  }, 0)
                }
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                const points = a => a.reduce((r, e) => {
                  const x = e[0];
                  const y = e[2];
                  return r + (x > y ? 3 : x < y ? 0 : 1);
                }, 0);

                //Another Methos
                const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

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
          id="panel52-header"
        >
          <Typography>Encrypting Vs Hashing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
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
              {`If the input is "Hello World!" use the hashing algorithm SHA-256
              we allways get the fixed sixe result, it always produces a 256-bit
              (32-byte) hash value. standard cryptographic hashing algorithm
              like SHA-256, you will always get the same output (hash value) for
              the same input. When we use it to store the password we check the
              hash value to match the stored hash value instead of the real
              password.`}
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
          <Typography>HTTP Caching</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            It is a mechanism that helps improve performance and reduce latency
            by storing copies of responses for reuse. It minimizes unnecessary
            requests to the server, saving bandwidth and improving load times.
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
          <Typography>Redis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redis is primarily used for caching, session management, rate
            limiting, and real-time analytics. It is used to store data that
            needs to be accessed frequently and fast. It is not used for storing
            large amounts of data. If you want to store and retrieve large
            amounts of data you need to use a traditional database such as
            MongoDB or MYSQL. Redis provides a variety of data structures such
            as sets, strings, hashes, and lists.
            <ul>
              <li>
                The Redis server is a program that runs and stores data in
                memory.
              </li>
              <li>
                You can just connect to that server and can use it to store and
                retrieve data faster.
              </li>
              <li>
                For that reason, Redis is not used for persistent storing of
                data as complete data will be lost if the system crashes.
              </li>
              <li>
                Redis is scalable as you can run multiple instances of the
                server.
              </li>
              <li>
                It is often used as a cache that stores data temporarily and
                provides faster access to frequently used data.
              </li>
            </ul>
            <strong>Advantages of Redis:</strong>
            <ul>
              <li>High Performance</li>
              <li>Simple and esasy to use API</li>
              <li>
                Supports varity of data structures inlcuding strings, lists,
                sets, hashes and more
              </li>
              <li>
                Supports atomic operations, ensuring consistency and reliability
                when performing multiple steps on data structures.
              </li>
              <li>
                It provides persistence options such as snapshots and
                append-only files.
              </li>
              <li>
                Redis supports master-slave replication, enabling the creation
                of replicas of the master server. This provides high
                availability and fault tolerance in case the master node fails.
              </li>
            </ul>
            <strong>Disadvantages:</strong>
            <ul>
              <li>Persistence Mechanism Complexity</li>
              <li>Limited Query Capability</li>
              <li>Memory Usage</li>
              <li>Single-Threaded Nature</li>
              <li>No Built-in Security Features</li>
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
          <Typography>Content Delivery Network(CDN)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            It is a distributed network of servers that work together to deliver
            content (like images, videos, and static files) to users faster and
            more efficiently.
            <ul>
              <li>
                These servers, called edge servers, which are strategically
                positioned across various geographical locations.
              </li>
              <li>
                CDNs help improve the performance, reliability, and scalability
                of websites and web applications by caching content closer to
                users, reducing latency, and offloading traffic from origin
                servers.
              </li>
            </ul>
            <strong>Importance:</strong>
            <ul>
              <li>Faster Content Delivery</li>
              <li>Improved Website Performance</li>
              <li>Scalability</li>
              <li>
                Redundancy and Reliability: CDNs offer redundancy by storing
                copies of content across multiple servers. If one server fails,
                another server can seamlessly take over, ensuring continuous
                availability of the content.
              </li>
              <li>Cost Savings</li>
              <li>
                Security: It provide additional security features, such as DDoS
                protection, SSL/TLS encryption, and web application firewalls,
                helping to protect websites from various online threats.
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
          <Typography>Base64 images</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Base64 is a widely used method for encoding binary data, such as
            images, into ASCII text. This enables embedding binary data, such as
            images, directly into HTML without needing separate image files. In
            the context of web development, Base64 encoding is often used to
            improve page performance, security, and compatibility by reducing
            the number of external HTTP requests
            <strong>Advantages:</strong>
            <ul>
              <li>Faster Page Loading</li>
              <li>Enhanced Security</li>
              <li>Improved Compatibility</li>
              <li>Improved Compatibility</li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."/>
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
          <Typography>Add space between the came casing string</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
              let test = "camelCasingTest";
              console.log(test.replace(/([a-z])([A-Z])/g, '$1 $2')); //"camel Casing Test"
              console.log(test.replace(/([A-Z])/g, ' $&')); //"camel Casing Test"
              //Another way
              let test = "camelCasingTest"

              let test1 = test.split("").map((ch) => {
                if( ch === ch.toUpperCase()){
                  ch = " "+ ch;
                }
                return ch;
              }).join("");

              console.log(test1); //"camel Casing Test"
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
          <Typography>Superhero find</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                function areYouSuperHero(name) {
                  let chr = ["h", "H"]
                  if( chr.includes(name[0])){
                    return name + " is a super hero."
                  }
                  return name + " is not a super hero.";
                }

                areYouSuperHero("hulk")// hulk is a super hero.

                //Another way
                function areYouSuperHero(name) {
                  let chr = ["r", "R"]
                  if( chr.includes(name[0])){
                    return name + " plays banjo"
                  }
                  return name + " does not play banjo";
                }
                  areYouSuperHero("hulk")// hulk is not a super hero.

                  //Another way
                  function areYouSuperHero(name) {
                    return name + (name[0].toLowerCase() == 'r' ? ' is ' : ' not') + " a super hero";
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
          <Typography>Gift Distribution</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The goal of the function is to find a subset of wishes that adds up
            to n. <br />
            n = 20;
            <br />
            wishes = [2, 4, 3, 5, 6, 10, 12, 100, 20];
            <br />
            {`Output has to be:   [2,3,5,10] or [4,6,10] or [2,6,12] or...    or "Mission failed!"`}
            <CodeSnippet
              language="javascript"
              code={`
                function distributeGifts(n,wishes){
                  let result =[];
                    const backtrack = (index, current, sum) => {
                      if(sum === n) {
                        result = [...current];
                        return true;
                      }
                      if(sum > n || index >=wishes.length) {
                        return false;
                      }

                      if( backtrack(index + 1, [...current, wishes[index]], sum + wishes[index])) {
                        return true;
                      }

                      return backtrack(index + 1, current, sum);
                    };
                    if(backtrack(0, [], 0)) {
                      return result;
                    } else {
                      return "Mission Failed!";
                    }

                  }
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function distributeGifts(n,wishes){
                  let posible = wishes.filter(a => n >= a);
                  for(let a of posible){
                    if(a == n){
                      return [a];
                    } else {
                      const next = distributeGifts(n - a, wishes.filter((_, i) => i != wishes.indexOf(a)));
                      if(Array.isArray(next) && next.reduce((t, c)=> t + c, a) == n)
                        return [a, ...next];
                    }
                  }
                  return 'Mission Failed!';
                }
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function distributeGifts(n,wishes){
                  let end = []
                  for (let i = 0; i < wishes.length; i++ ){
                    if (wishes[i]== n){
                      end.push(wishes[i])
                    }
                    for (let k = 0; k < wishes.length; k++){
                      if (wishes[k]+wishes[i]== n && k !== i){
                        end.push(wishes[i])
                      }
                    }
                  }
                  if (end.length === 0){
                    return "Mission Failed!"
                  } else {
                  return end
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
          <Typography>Find high and low numbers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Need to find the highest and lowest numbers from "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6". Outputs should be "542 -214"`}
            <CodeSnippet
              language="javascript"
              code={`
                function highAndLow(numbers) {
                  let result = []
                  let num = numbers.split(" ").map(Number)
                  let largeNum = num[0];
                  let smallNum = num[0];

                console.log(numbers, num)
                  for (let n in num) {
                    if (largeNum < num[n]) {
                      largeNum = num[n]
                    }
                    if (smallNum > num[n]) {
                      smallNum = num[n]
                    }
                  }
                  result.push(largeNum, smallNum);
                  return result.join(" ");
                }

                console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) "542 -214"
            `}
            />

            {/* return `${Math.max(...numbers)} ${Math.min(...numbers)}`; */}
            <CodeSnippet
              language="javascript"
              code={`
                function highAndLow(numbers) {
                numbers = numbers.split(' ');
                  Please see the top of the snippet for this return
                }
              }
              console.log(highAndLow("1 2 -3 4 5")) // "5 -3"

              function highAndLow(numbers){
                let arr = numbers.split(' ').map(Number);
                return Math.max(...arr) + ' ' + Math.min(...arr);
              }

              function highAndLow(numbers){
                var arr = numbers.split(' ').sort(function(a, b) { return a - b });
                return arr[arr.length -1] + ' ' + arr[0];
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
          <Typography>Double</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Given an array of integers, return a new array with each value
            doubled.
            <CodeSnippet
              language="javascript"
              code={`
                function maps(x){
                  return x.map(n => n*n)
                }

                console.log(maps([1, 2, 3])) //[1, 4, 9]
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
          <Typography>Multiples of 3 or 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Finish the solution so that it returns the sum of all the multiples
            of 3 or 5 below the number passed in.
            <br />
            If we list all the natural numbers below 10 that are multiples of 3
            or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
            <CodeSnippet
              language="javascript"
              code={`
                function solution(number) {
                  let sum = 0
                  for (let i = 1; i < number; i++) {
                    if (i % 3 === 0 || i % 5 === 0) {
                      sum = sum + i
                    }
                  }
                  return sum
                }
                console.log(solution(10)) //23

                //Another method
                const solution = n => {
                  let s = 0;
                  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
                  return s;
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
          <Typography>String jump</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.`}{" "}
            <br />
            <strong>Example:</strong> <br />
            {`pigIt('Pig latin is cool'); // igPay atinlay siay oolcay`}
            <br />
            {`pigIt('Hello world !');     // elloHay orldway !`}
            <CodeSnippet
              language="javascript"
              code={`
                function pigIt(str){
                  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
                }
            `}
            />
            {/* OR return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ") */}
            <CodeSnippet
              language="javascript"
              code={`
                function pigIt(str) {
                  let result = []
                  let str1 = str.split(" ")
                  for (let word in str1) {
                    if (str1[word].match(/^[^a-zA-Z]+$/)){
                      result.push(str1[word])
                    } else {
                      result.push(str1[word].slice(1) + str1[word][0] + "ay")
                    }
                  }
                  return result.join(" ")
                }
                console.log(pigIt("Pig latin is cool"))//"igPay atinlay siay oolcay"
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
          <Typography>Average Test Score</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`You receive an array with your peers' test scores. Now calculate the average and compare your score! Return true if you're better, else false!`}
            <CodeSnippet
              language="javascript"
              code={`
                function betterThanAverage(classPoints, yourPoints) {
                  let avg = classPoints.reduce((ac, cu) => ac + cu, 0) /classPoints.length
                  return avg <= yourPoints
                }
                //console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 85)) //true
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function betterThanAverage(classPoints, yourPoints) {
                  var sum = 0;
                  for (var i = 0; i < classPoints.length; i++){
                    sum += classPoints[i];
                  }
                    sum = sum/classPoints.length
                  if(sum > yourPoints) {
                    return false
                  } else {
                    return true
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
          <Typography>Positive Sum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            You get an array of numbers, return the sum of all of the positives
            ones. <br />
            <strong>Example: </strong>
            {`[1, -4, 7, 12] => 1 + 7 + 12  = 20`}
            <CodeSnippet
              language="javascript"
              code={`
                function positiveSum(arr) {
                  let result = arr.reduce((ac, cu) => {
                  if (cu > 0) {
                    ac = ac + cu;
                  }
                    return ac;
                  }, 0)
                  return result;
                }
            `} //13
            />
            <CodeSnippet
              language="javascript"
              code={`
                  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
                  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
                  return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
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
          <Typography>Square Sum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Complete the square sum function so that it squares each number
            passed into it and then sums the results together. <br />
            For example, for [1, 2, 2] it should return 9 because{" "}
            {`1^2 +2^2+2^2=9`}
            <CodeSnippet
              language="javascript"
              code={`
                function squareSum(numbers) {
                  return numbers.reduce((ac, cu) => ac + cu ** 2, 0)
                }

                console.log(squareSum([0, 3, 4, 5])) //50
                //Another Method

                function squareSum(numbers){
                  return numbers.reduce(function(sum, n){
                  return (n*n) + sum;
                }, 0)
              }

              console.log(squareSum([0, 3, 4, 5])) //50
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
          <Typography>Extend the functionality of built-in classes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Extend the built-in Array class with the following methods:
            square(), cube(), average(), sum(), even() and odd().
            <CodeSnippet
              language="javascript"
              code={`
                Array.prototype.square = function () {
                  return this.map((nu) => nu ** 2)
                }

                Array.prototype.cube = function () {
                  return this.map((nu) => nu ** 3)
                }

                Array.prototype.average = function () {
                  let result =  this.reduce((ac, cu, i) => ac = ac + cu, 0);
                  return result/this.length
                }

                Array.prototype.sum = function () {
                  return this.reduce((ac, cu) => ac + cu, 0)
                }

                Array.prototype.even = function () {
                  return this.filter(nu => (nu % 2) === 0)
                }

                Array.prototype.odd = function () {
                  return this.filter(nu => (nu % 2) !== 0)
                }

                var numbers = [1, 2, 3, 4, 5]

                console.log(numbers.square()) // [1, 4, 9, 16, 25]
                console.log(numbers.cube()) // [1, 8, 27, 64, 125]
                console.log(numbers.average()) // 3
                console.log(numbers.sum());     // 15
                console.log(numbers.even());    // [2, 4]
                console.log(numbers.odd());     // [1, 3, 5]
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                Object.assign(Array.prototype, {
                  square() {return this.map(n => n * n);},
                  cube() {return this.map(n => Math.pow(n, 3));},
                  sum() {return this.reduce((p,n) => p + n, 0);},
                  average() {return this.reduce((p,n) => p + n, 0) / this.length;},
                  even() {return this.filter(n => !(n % 2));},
                  odd() {return this.filter(n => n % 2);}
              });
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
          <Typography>Detect Pangram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).`}{" "}
            <br />
            <strong>example :</strong>
            <br />
            {`let str = 'The quick brown fox jumps over the lazy dog.' //true`}
            <br />
            {`let str1 = 'abcdefghijklmopqrstuvwxyz ' //false`}
            <br />
            {`let str2 = 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ' //true`}
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                function isPangram(string) {
                  let alpabet = ( "a", "b",  "c", "d", "e","f", "g",  "h", "i", "j","k", "l", "m","n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
                  return ( string.trim().includes(" ") || string.includes(",") )?
                      string.toLowerCase().split("").includes(alpabet) :   false
                }

                let str = 'The quick brown fox jumps over the lazy dog.' //true
                let str1 = 'abcdefghijklmopqrstuvwxyz ' //false
                let str2 = 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ' //true
                console.log("***", isPangram(str))
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function isPangram(string){
                  string = string.toLowerCase();
                  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
                    return string.indexOf(x) !== -1;
                  });
                }
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function isPangram(string){
                  return (string.match(/([a-z])(?!.*\\1)/ig) || []).length === 26;
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
          <Typography>Convert a Boolean to a String</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
                function booleanToString(b){
                  return b.toString(); // or return String(b); //or  return b+''; //or we can use template Literal
                }
                  console.log("***", booleanToString(true)) //"true"
            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function booleanToString(b){
                  return b ? 'true' : 'false';
                }

            `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                function booleanToString(b){
                  if (typeof b == 'boolean') {
                    return String(b);
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
          <Typography>Number Order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <CodeSnippet
              language="javascript"
              code={`
            `}
            />
             <CodeSnippet
              language="javascript"
              code={`
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
    </Container>
  );
};

export default InterviewQuestions;
