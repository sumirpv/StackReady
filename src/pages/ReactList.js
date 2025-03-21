import { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import CodeSnippet from "../CodeSnippet";

const ReactList = () => {
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
        React Concepts Overview
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
        // slots={{ transition: Fade }}
        // slotProps={{ transition: { timeout: 400 } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Features of React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            ReactJS is a JavaScript library used to build reusable components
            for the view layer in MVC architecture. It is highly efficient and
            uses a virtual DOM to render components. It works on the client side
            and is written in JSX.
            <ul>
              <li>
                <strong>JSX:</strong>
                JSX is a syntax extension to JavaScript. JSX stands for
                JavaScript XML. JSX allows us to write HTML in React. JSX makes
                it easier to write and add HTML in React.
                <br />
                Web browsers cannot read JSX directly. This is because they are
                built to only read regular JS objects and JSX is not a regular
                JavaScript object. <br />
                For a web browser to read a JSX file, the file needs to be
                transformed into a regular JavaScript object. For this, we use
                Babel
              </li>
              <CodeSnippet
                language="javascript"
                code={`
                  const name = 'Josh Perez';
                  const element = <h1>Hello, {name}</h1>;
                 `}
              />
              <li>
                <strong>Components:</strong> Components are independent and
                reusable bits of code. They serve the same purpose as JavaScript
                functions, but work in isolation and return HTML. Components
                come in two types, Class components and Function components, in
                this tutorial we will concentrate on Function components.
              </li>
              <li>
                <strong>Virtual DOM:</strong> React keeps a lightweight
                representation of the real DOM in the memory, and that is known
                as the virtual DOM. When the state of an object changes, virtual
                DOM changes only that object in the real DOM, rather than
                updating all the objects.
                <br />
                <br />
                <TableContainer component={Paper} variant="outlined">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Real DOM</TableCell>
                        <TableCell>Virtual DOM</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          when the actual structure of the web page (which is
                          not lightweight) or document is represented by DOM.
                        </TableCell>
                        <TableCell>
                          The virtual DOM is a lightweight and in-memory
                          representation
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Any change causes the entire DOM tree to be updated.
                        </TableCell>
                        <TableCell>
                          Any change only affects the corresponding node in the
                          tree.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          It is an HTML abstraction of a page.
                        </TableCell>
                        <TableCell>It is an HTML DOM abstraction.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          It is capable of manipulating items on the screen.
                        </TableCell>
                        <TableCell>
                          It is unable to manipulate the elements displayed on
                          the screen.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Every modification updates the complete DOM tree,
                          which is a laborious and slow operation.
                        </TableCell>
                        <TableCell>
                          Because the update is tailored to the modified nodes,
                          its update operation is quick and effective.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </li>
              <li>
                <strong>One-way data-binding:</strong> One-way means that the
                binding happens in one direction. In this case, changes in the
                data automatically update the UI, but changes in the UI do not
                automatically update the data. That’s why it is referred to as
                one-way data binding.
                <br />
                React achieves one-way data binding by using state and props.
              </li>
              <li>
                <strong>High performance:</strong> React updates only those
                components that have changed, rather than updating all the
                components at once. This results in much faster web
                applications.
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
          <Typography>MVC architecture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The Model-View-Controller (MVC) framework is an architectural/design
            pattern that separates an application into three main logical
            components Model, View, and Controller. Each architectural component
            is built to handle specific development aspects of an application.
            It isolates the business, logic, and presentation layer from each
            other
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
          <Typography>Class Component</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.`}
            <br />
            {`The component also requires a render() method, this method returns HTML.`}
            <CodeSnippet
              language="javascript"
              code={`
                class Car extends React.Component {
                  render() {
                    return <h2>Hi, I am a Car!</h2>;
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
          <Typography>Function Component</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`Here is the same example as above, but created using a Function component instead.`}
            <br />
            {`A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.`}
            <CodeSnippet
              language="javascript"
              code={`
                function Car() {
                  return <h2>Hi, I am a Car!</h2>;
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
          <Typography>Event React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            An event is an action that a user or system may trigger, such as
            pressing a key, a mouse click, etc.
          </Typography>
          <ul>
            <li>
              React events are named using camelCase, rather than lowercase in
              HTML.
            </li>
            <li>
              With JSX, you pass a function as the event handler, rather than a
              string in HTML.
            </li>
          </ul>
          <CodeSnippet
            language="javascript"
            code={`
                <Button onPress={lightItUp} />
              `}
          />
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
          <Typography>React.js vs Angular.js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Field</TableCell>
                    <TableCell>React.js</TableCell>
                    <TableCell>Angular</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Used as</TableCell>
                    <TableCell>
                      React.js is a JavaScript library. As it indicates react js
                      updates only the virtual DOM is present and the data flow
                      is always in a single direction.
                    </TableCell>
                    <TableCell>
                      Angular is a framework. Angular updates the Real DOM and
                      the data flow is ensured in the architecture in both
                      directions.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Architecture</TableCell>
                    <TableCell>
                      React.js is more simplified as it follows MVC ie., Model
                      View Control.
                    </TableCell>
                    <TableCell>
                      The architecture is complex as it follows MVVM models ie.,
                      Model View-ViewModel.{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Scalability</TableCell>
                    <TableCell>It is highly scalable.</TableCell>
                    <TableCell>It is less scalable than React JS.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data Binding</TableCell>
                    <TableCell>
                      It supports Uni-directional data binding which is one-way
                      data binding.
                    </TableCell>
                    <TableCell>
                      It supports Bi-directional data binding which is two way
                      data binding.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>DOM</TableCell>
                    <TableCell>It has a virtual DOM.</TableCell>
                    <TableCell>It has regular DOM.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography>SyntheticEvent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            SyntheticEvent is a cross-browser wrapper around the native browser
            event. React uses it to handle events in a consistent way across
            different browsers. Synthetic events are normalized, meaning they
            have the same properties and methods as native events but behave
            consistently across different environments.
            <br />
            For example in onMouseLeave event.nativeEvent will point to a
            mouseout event. The specific mapping is not part of the public API
            and may change at any time.
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
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>React vs React Native</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>React</TableCell>
                    <TableCell>React Native</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Purpose</TableCell>
                    <TableCell>
                      React (also known as React.js or ReactJS) is a JavaScript
                      library for building user interfaces, specifically for
                      building web applications.
                    </TableCell>
                    <TableCell>
                      React Native is a framework for building mobile
                      applications using React.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Platform</TableCell>
                    <TableCell>
                      It is used for developing web applications that run in a
                      web browser.
                    </TableCell>
                    <TableCell>
                      It is used for developing native mobile apps for iOS and
                      Android.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rendering</TableCell>
                    <TableCell>{`In React, components render to HTML elements (like <div>, <span>, etc.). These components are manipulated in the browser's DOM.`}</TableCell>
                    <TableCell>
                      React Native components do not render to HTML elements.
                      Instead, they render to native components like View, Text,
                      Image, which are then translated into native UI elements
                      on the iOS and Android platforms.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Component Libraries</TableCell>
                    <TableCell>
                      React has a vast ecosystem of libraries for web
                      development, such as Material-UI, Bootstrap, Ant Design,
                      etc.
                    </TableCell>
                    <TableCell>
                      React Native has its own ecosystem of components designed
                      for mobile development, like View, Text, TouchableOpacity,
                      FlatList, etc. It also has libraries like React Native
                      Elements, NativeBase, and others for building mobile UIs.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Styling</TableCell>
                    <TableCell>
                      In React, CSS is used for styling. You can use traditional
                      CSS, CSS-in-JS, or pre-processors like Sass and Less.
                    </TableCell>
                    <TableCell>
                      You use JavaScript objects to style components, which is
                      somewhat similar to inline styles in React but with a
                      different set of styling properties. React Native uses
                      StyleSheet.create to define these styles.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Navigation</TableCell>
                    <TableCell>
                      It uses libraries like React Router for handling routing
                      and navigation within web applications.
                    </TableCell>
                    <TableCell>
                      It uses libraries like React Navigation or native
                      navigation solutions to handle navigation between
                      different screens in a mobile app.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Development Experience</TableCell>
                    <TableCell>
                      {" "}
                      Development is focused on the browser, and you can use
                      browser developer tools for debugging. Hot reloading and
                      fast refresh are commonly used.
                    </TableCell>
                    <TableCell>
                      Development happens in a mobile simulator/emulator or on a
                      physical device. React Native also supports hot reloading
                      and fast refresh, and debugging can be done with tools
                      like Flipper or through the React Native Debugger.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography>Render()</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In React, the render() method is used in class components to define
            what the UI should look like. It returns the HTML-like structure
            (written in JSX) that React will display on the screen.
            <ul>
              <li>
                <strong>Purpose:</strong>It tells React what to display.
              </li>
              <li>
                <strong>Return Value:</strong>
                {`It must return a single element, like a <div>, or a group of elements wrapped in a single parent or a fragment.`}
              </li>
              <li>
                <strong>Re-rendering:</strong>Whenever the component’s state or
                props change, render() is called again to update the UI.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import React, { Component } from 'react';

                class MyComponent extends Component {
                  render() {
                    return (
                      <div>
                        <h1>Hello, {this.props.name}!</h1>
                      </div>
                    );
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
          <Typography>State in React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In React, state is an object that stores dynamic data and determines
            how a component behaves and what it displays. Unlike props, which
            are passed to a component from its parent, state is managed within
            the component itself and can change over time, typically in response
            to user actions, network responses, or other events.
            <ul>
              <li>
                <strong>Mutable:</strong>Unlike props, which are read-only,
                state can be updated. When the state changes, the component
                re-renders to reflect the new state.
              </li>
              <li>
                <strong>Initialization:</strong>In class components, the state
                is initialized in the constructor, while in functional
                components, it’s initialized using the useState hook.
              </li>
              <li>
                <strong>Changing State: </strong>State should be updated using
                the setState method (in class components) or the setState
                function provided by useState (in functional components).
                Directly modifying the state (like this.state.someValue =
                newValue) is discouraged because it won’t trigger a re-render
              </li>
            </ul>
            <strong>Example in a Class Component:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                class MyComponent extends Component {
                  constructor(props) {
                    super(props);
                    this.state = {
                      count: 0
                    };
                  }

                  incrementCount = () => {
                    this.setState({ count: this.state.count + 1 });
                  };

                  render() {
                    return (
                      <div>
                        <p>Count: {this.state.count}</p>
                        <button onClick={this.incrementCount}>Increment</button>
                      </div>
                    );
                  }
                }
              `}
            />
            <strong>Example in a Functional Component with useState:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React, { useState } from 'react';

                function MyComponent() {
                  const [count, setCount] = useState(0);

                  return (
                    <div>
                      <p>Count: {count}</p>
                      <button onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                  );
                }
              `}
            />
            <ul>
              <li>
                State is used to manage dynamic data in a React component.
              </li>
              <li>
                Updating State triggers a re-render, allowing the UI to reflect
                the new data.
              </li>
              <li>
                Class Components use this.state and this.setState, while
                Functional Components use the useState hook to manage state.
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
          <Typography>SetState</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            setState is an asynchronous call means if a synchronous call gets
            called it may not get updated at the right time like to know the
            current value of an object after an update using setState it may not
            give the current updated value on the console. To get some behavior
            of synchronous need to pass function instead of object to setState.
            <br />
            <CodeSnippet
              language="javascript"
              code={`
                setState({ stateName : updatedStateValue })
                // OR
                setState((prevState) => ({
                  stateName: prevState.stateName + 1
                }))
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
          <Typography>Ref in React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Refs are a function provided by React to access the DOM element and
            the React element that you might have created on your own. They are
            used in cases where we want to change the value of a child
            component, without making use of props and all. They have wide
            functionality as we can use callbacks with them.
            <br />
            The syntax to use ref is
            <CodeSnippet
              language="javascript"
              code={`
                const node = this.myCallRef.current;
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
          <Typography>Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Hooks are a new addition in React 16.8. They let developers use
            state and other React features without writing a class. Hooks
            doesn’t violate any existing React concepts. Instead, Hooks provide
            a direct API to react concepts such as props, state, context, refs
            and life-cycle.
            <br />
            They provide a cleaner and more concise way to handle state and side
            effects in React applications.
            <br />
            Although Hooks generally replace class components, no plans exist to
            remove classes from React.
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
          <Typography>UseState</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The most used hook in React is the useState() hook. It allows
            functional components to manipulate DOM elements before each render.
            Using this hook we can declare a state variable inside a function
            but only one state variable can be declared using a single
            useState() hook. Whenever the useState() hook is used, the value of
            the state variable is changed and the new variable is stored in a
            new cell in the stack.
            <br />
            We have to import this hook in React using the following syntax.
            <CodeSnippet
              language="javascript"
              code={`
                import {useState} from 'react'
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
          <Typography>UseEffect</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The useEffect hook in React eliminates the side effect of using
            class based components. It is used as an alternative to
            componentDidUpdate() method. The useEffect hook accepts two
            arguments where second argument is optional.
            <CodeSnippet
              language="javascript"
              code={`
                useEffect(function, dependency)
              `}
            />
            The dependency decides when the component will be updated again
            after rendering.
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
          <Typography>React Fragments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            when we are trying to render more than one root element we have to
            put the entire content inside the ‘div’ tag which is not loved by
            many developers. So since React 16.2 version, Fragments were
            introduced, and we use them instead of the extraneous ‘div’ tag. The
            following syntax is used to create fragment in react.
            <CodeSnippet
              language="javascript"
              code={`
                <React.Fragment>
                    <h2>Child-1</h2>
                    <p> Child-2</p>
                </React.Fragment>
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
          <Typography>Custom hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            We know that hooks like useState, and useEffect are reusable
            components. Sometimes we make components that we have to reuse again
            and again in the application. In this case, we can convert the
            component to hooks by extracting logic from it.
            <br />
            The main reason why you should be using Custom hooks is to maintain
            the concept of DRY(Don’t Repeat Yourself) in your React apps.
            <strong>Building a custom hook</strong>
            Creating a custom hook is the same as creating a JavaScript function
            whose name starts with “use”. It can use other hooks inside it,
            return anything you want it to return, take anything as parameters.
            <br />
            <strong>Note:</strong> It is important to name your custom hooks
            starting with “use”, because without it React can’t realize that it
            is a custom hook and therefore can’t apply the rules of hooks to it.
            So, you should name it starting with “use”.
            <br />
            <strong>Create a React Component</strong>
            <CodeSnippet
              language="javascript"
              code={`
                Let us first create a component where we are not creating custom hook
                // Filename - src/components/FirstComponent.js

                import React , {useState ,useEffect} from "react";

                function FirstComponent(props){

                    const [counter , setCounter] = useState(initializer);

                    // Increases the value of counter by 1
                      function resetCounter(){
                        setCounter(counter + 1):
                    }

                    useEffect(() => {
                        // Some logic
                        console.log(counter);
                    } , [counter]);

                    const clickedButton = resetCounter;

                    return (
                        <div>
                            <h1> This is the First Component</h1>
                            <button onClick={clickedButton}>
                              Click here!
                            </button>
                        </div>
                    );
                }

                export default FirstComponent;
              `}
            />
            Suppose we have to use this counter in multiple components then we
            would require a custom hook that can perfrom the same function
            multiple times.
            <br />
            <br />
            <strong>Creating a custom hook</strong>
            <br />
            Create the custom hook as shown in the example below
            <CodeSnippet
              language="javascript"
              code={`
                // Filename- src/components/useCustomHook.js

                import {useState , useEffect} from "react";

                // Remember to start the name of your custom hook with "use"
                function useCustomHook(initializer , componentName){
                    const [counter , setCounter] = useState(initializer);

                    // Increases the value of counter by 1
                      function resetCounter(){
                        setCounter(counter + 1);
                    }

                    useEffect(() => {
                        // Some logic that will be used in multiple components
                        console.log("The button of the "
                        + componentName + " is clicked "
                        + counter + " times.");
                    } , [counter , componentName]);

                    // Calls the useEffect hook if the counter updates
                    return resetCounter;
                }

                export default useCustomHook;
              `}
            />
            <strong>Using the custom hook in components</strong>
            <br />
            To use the custom hook in your components just import the
            “useCustomHook” function from “useCustomHook.js” file in the “src”
            folder.
            <ul>
              <li>
                <strong>src/components/FirstComponent.js:</strong> This
                component will import customHook
              </li>
              <li>
                <strong>src/components/SecondComponent.js:</strong> This
                component will also import customHook
              </li>
              <li>
                <strong>src/App.js:</strong> We will render the components in
                this file
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                // Filename - First Component
                import React from "react";

                // importing the custom hook
                import useCustomHook from "./useCustomHook";

                function FirstComponent(props){

                    // ClickedButton = resetCounter;
                    const clickedButton = useCustomHook(0 , "FirstComponent");

                    return (
                        <div>
                            <h1> This is the First Component</h1>
                            <button onClick={clickedButton}>
                                  Click here!
                            </button>
                        </div>
                    );
                }

                export default FirstComponent;
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
          <Typography>Optimize the performance of React app</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <a
              href="https://www.geeksforgeeks.org/how-to-optimize-the-performance-of-react-app/"
              target="_blank"
              rel="noreferrer"
            >
              Optimize the performance of React app
            </a>
            <br />
            We can improve our react code by following these practices:
            <ul>
              <li>Using binding functions in constructors</li>
              <li>
                Eliminating the use of inline attributes as they slow the
                process of loading
              </li>
              <li>Avoiding extra tags by using React fragments</li>
              <li>Lazy loading</li>
              <li>Avoid inline function in the render method</li>
              <li>Avoid bundling all of the front end code in a single file</li>
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
          <Typography>Props</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`In React, props (short for "properties") are used to pass data from
            a parent component to a child component. They allow you to make
            components dynamic and reusable by letting you pass different data
            to them.`}
            <ul>
              <li>
                <strong>Read-Only:</strong> Props are immutable, meaning they
                cannot be changed by the component that receives them. They are
                passed down from a parent component and are used to render or
                configure the child component.
              </li>
              <li>
                <strong>Passed from Parent to Child:</strong> Props are passed
                to a child component as attributes in the JSX syntax. The child
                component can then access these props using this.props in class
                components or directly as arguments in functional components.
              </li>
              <li>
                <strong>Dynamic Data:</strong> Props make components flexible by
                allowing them to display different data based on what is passed
                from the parent.
              </li>
            </ul>
            <strong>In a Class Component:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React, { Component } from 'react';

                class Greeting extends Component {
                  render() {
                    return <h1>Hello, {this.props.name}!</h1>;
                  }
                }

                export default Greeting;
              `}
            />
            <strong>In a Functional Component:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React from 'react';

                function Greeting(props) {
                  return <h1>Hello, {props.name}!</h1>;
                }

                export default Greeting;
              `}
            />
            <strong>Passing props:</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React from 'react';
                import Greeting from './Greeting';

                function App() {
                  return (
                    <div>
                      <Greeting name="Alice" />
                      <Greeting name="Bob" />
                    </div>
                  );
                }

                export default App;
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
          <Typography> State vs Props</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Props</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Use</TableCell>
                    <TableCell>
                      Holds information about the components
                    </TableCell>
                    <TableCell>
                      Allows to pass data from one component to other components
                      as an argument
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mutability</TableCell>
                    <TableCell>Is mutable</TableCell>
                    <TableCell>Are immutable</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Read-Only</TableCell>
                    <TableCell>Can be changed</TableCell>
                    <TableCell>Are read-only</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child components</TableCell>
                    <TableCell>Child components cannot access</TableCell>
                    <TableCell>Child component can access</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Stateless components</TableCell>
                    <TableCell>Cannot have state</TableCell>
                    <TableCell>Can have props</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography>Higher-order Component</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A Higher-Order Component is a function that takes a component and
            returns a new component. Essentially, it’s a function that enhances
            a component by adding additional functionality or props.
            <CodeSnippet
              language="javascript"
              code={`
                const EnhancedComponent = higherOrderComponent(WrappedComponent);
              `}
            />
            <ul>
              <li>
                <strong> Code reuse, logic, and bootstrap abstraction:</strong>
                HOCs can extract common logic that can be shared among multiple
                components.
              </li>
              <li>
                <strong>State management:</strong> HOCs can manage state and
                pass it as props to the wrapped component.
              </li>
              <li>
                <strong>Enhancing UI:</strong> HOCs can modify the behavior or
                appearance of a component.
              </li>
            </ul>
            <strong>Create the HOC</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React from 'react';

                function withLogging(WrappedComponent) {
                  return class extends React.Component {
                    componentDidMount() {
                      console.log('Component Mounted:', WrappedComponent.name);
                    }

                    render() {
                      return <WrappedComponent {...this.props} />;
                    }
                  };
                }
              `}
            />
            <strong>Use the HOC</strong>
            <CodeSnippet
              language="javascript"
              code={`
                import React from 'react';
                import withLogging from './withLogging';

                class MyComponent extends React.Component {
                  render() {
                    return <div>Hello, {this.props.name}!</div>;
                  }
                }

                export default withLogging(MyComponent);
              `}
            />
            <strong>Summary:</strong>
            <ul>
              <li>
                Higher-Order Components are functions that take a component and
                return a new component with added functionality.
              </li>
              <li>
                They are used to reuse component logic, manage state, and handle
                cross-cutting concerns.
              </li>
              <li>
                HOCs follow the principle of composability and do not alter the
                original component, making them a powerful pattern in React
                development.
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
          <Typography>React Router</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            React Router is a popular library for handling routing in React
            applications. It allows you to build single-page applications (SPAs)
            with navigation and URL management.
            <strong>Router:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> The router is a component that
                keeps track of the current URL and determines which components
                should be rendered based on that URL.
              </li>
              <li>
                <strong>Usage:</strong>BrowserRouter: Uses the HTML5 history API
                to keep the UI in sync with the URL. <br />
                HashRouter: Uses URL hash fragments to manage the history and
                state of the URL.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { BrowserRouter } from 'react-router-dom';

                function App() {
                  return (
                    <BrowserRouter>
                      {/* Routes and components go here */}
                    </BrowserRouter>
                  );
                }
              `}
            />
            <strong>Route:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> A Route defines a path and the
                component to render when the URL matches that path.
              </li>
              <li>
                <strong>Usage:</strong> You use the Route component to define
                what should be rendered for different URL paths.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { Route, Switch } from 'react-router-dom';

                function App() {
                  return (
                    <BrowserRouter>
                      <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        {/* Other routes */}
                      </Switch>
                    </BrowserRouter>
                  );
                }
              `}
            />
            <strong>Link:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> The Link component is used to
                navigate to different routes without reloading the page.
              </li>
              <li>
                <strong>Usage:</strong>{" "}
                {`It renders an anchor (<a>) tag with a href attribute that changes the URL when clicked.`}
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { Link } from 'react-router-dom';

                function Navigation() {
                  return (
                    <nav>
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                    </nav>
                  );
                }
              `}
            />
            <strong>Switch:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> The Switch component renders the
                first Route or Redirect that matches the current location. It
                ensures that only one route is rendered at a time.
              </li>
              <li>
                <strong>Usage:</strong> Use Switch to group Route components and
                render only the first matching route.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { Switch, Route } from 'react-router-dom';

                function App() {
                  return (
                    <BrowserRouter>
                      <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route component={NotFoundPage} />
                      </Switch>
                    </BrowserRouter>
                  );
                }
              `}
            />
            <strong>Redirect:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> The Redirect component allows you
                to redirect users to a different route programmatically.
              </li>
              <li>
                <strong>Usage:</strong> You can use it to redirect users based
                on certain conditions, like authentication status.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { Redirect } from 'react-router-dom';

                function PrivateRoute({ component: Component, ...rest }) {
                  const isAuthenticated = /* logic to check authentication */;
                  return (
                    <Route
                      {...rest}
                      render={props =>
                        isAuthenticated ? (
                          <Component {...props} />
                        ) : (
                          <Redirect to="/login" />
                        )
                      }
                    />
                  );
                }
              `}
            />
            <strong>useParams, useLocation, useHistory:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> Hooks provided by React Router for
                accessing routing information in functional components.
              </li>
              <ul>
                <li>
                  <strong>useParams():</strong> Access URL parameters.
                </li>
                <li>
                  <strong>useLocation():</strong> Access the current location
                  object.
                </li>
                <li>
                  <strong>useHistory():</strong> Access the history instance to
                  programmatically navigate.
                </li>
              </ul>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { useParams, useLocation, useHistory } from 'react-router-dom';

                function ExampleComponent() {
                  const { id } = useParams();
                  const location = useLocation();
                  const history = useHistory();

                  const goHome = () => {
                    history.push('/');
                  };

                  return (
                    <div>
                      <p>ID: {id}</p>
                      <p>Current Path: {location.pathname}</p>
                      <button onClick={goHome}>Go Home</button>
                    </div>
                  );
                }
              `}
            />
            <strong>Summary:</strong>
            <ul>
              <li>
                React Router is a library for managing navigation and routing in
                React applications.
              </li>
              <li>
                <strong>Key Components:</strong> BrowserRouter, Route, Link,
                Switch, Redirect.
              </li>
              <li>
                <strong>Hooks:</strong> useParams, useLocation, useHistory for
                accessing routing information in functional components.
              </li>
              <li>
                <strong>Usage:</strong> Set up routing by defining routes and
                linking to them, and handle navigation programmatically with
                hooks.
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
          <Typography>Styling in ReactJS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Styling in ReactJS can be done using various methods, each offering
            different levels of control and flexibility.
            <br />
            <strong>CSS Stylesheets:</strong>
            <br />
            Traditional CSS files are imported into your React components. How
            Create a .css file and import it into your component file.
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
            <strong>Inline Styles</strong>
            <br />
            Inline styles are applied directly to elements using the style
            attribute.Pass a JavaScript object to the style attribute.
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
            <strong>CSS Modules</strong>
            <br />
            CSS Modules allow for locally scoped CSS, preventing style
            conflicts. Create a .module.css file and import it as a module.
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
            <strong>Styled Components</strong>
            <br />
            Styled Components is a library for writing CSS-in-JS, allowing you
            to style components using JavaScript. Install styled-components and
            create styled components.
            <CodeSnippet
              language="javascript"
              code={`
                npm install styled-components
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                // Component.js
                import React from 'react';
                import styled from 'styled-components';

                const Container = styled.div
                  background-color: lightblue;
                  padding: 20px;

                function MyComponent() {
                  return <Container>Hello, World!</Container>;
                }

                export default MyComponent;
              `}
            />
            <strong>Emotion</strong>
            <br /> Emotion is another CSS-in-JS library for styling React
            components with a powerful API. Install @emotion/react and
            @emotion/styled, then use them for styling.
            <CodeSnippet
              language="javascript"
              code={`
                npm install @emotion/react @emotion/styled
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                // Component.js
                /** @jsxImportSource @emotion/react */
                import { css } from '@emotion/react';
                import styled from '@emotion/styled';

                const containerStyle = css
                  background-color: lightblue;
                  padding: 20px;

               const Container = styled.div
                padding: 20px;
                background-color: lightblue;


                function MyComponent() {
                  return (
                    <div css={containerStyle}>
                      Hello, World!
                    </div>
                    // or use <Container>Hello, World!</Container>
                  );
                }

                export default MyComponent;
              `}
            />
            <strong>Tailwind CSS</strong>
            <br />
            Tailwind CSS is a utility-first CSS framework that provides
            low-level utility classes to build custom designs. Install Tailwind
            CSS and use utility classes in your JSX.
            <CodeSnippet
              language="javascript"
              code={`
                npm install tailwindcss
              `}
            />
            <CodeSnippet
              language="javascript"
              code={`
                // Component.js
                function MyComponent() {
                  return <div className="p-5 bg-blue-200">Hello, World!</div>;
                }

                export default MyComponent;
              `}
            />
            <strong>CSS-in-JS</strong>
            <br />
            Usage: Various libraries (like styled-components and emotion)
            provide the ability to write CSS directly in JavaScript files.
            <br />
            Benefits: Scoped styles, dynamic styling based on props, etc.
            <br />
            <strong>Summary:</strong>
            <br />
            <ul>
              <li>CSS Stylesheets: Traditional approach; globally scoped.</li>
              <li>
                Inline Styles: Directly in the component; limited functionality.
              </li>
              <li>CSS Modules: Locally scoped styles; avoids conflicts.</li>
              <li>
                Styled Components & Emotion: CSS-in-JS solutions for scoped and
                dynamic styling.
              </li>
              <li>Tailwind CSS: Utility-first framework for fast styling.</li>
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
          <Typography>Conditional rendering in React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Conditional rendering in React involves selectively rendering
            components based on specified conditions. By evaluating these
            conditions, developers can control which components are displayed,
            allowing for dynamic and responsive user interfaces in React
            applications. <br />
            Let us look at this sample code to understand conditional rendering.
            <CodeSnippet
              language="javascript"
              code={`
                {isLoggedIn == false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
                 `}
            />
            Here if the boolean isLoggedIn is false then the DisplayLoggedOut
            component will be rendered otherwise DisplayLoggedIn component will
            be rendered.
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
          <Typography>Lifecycle methods of components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A React Component can go through four stages of its life as follows.
            <ul>
              <li>
                <strong>Initialization:</strong> This is the stage where the
                component is constructed with the given Props and default state.
                This is done in the constructor of a Component Class.
              </li>
              <li>
                <strong>Mounting:</strong> Mounting is the stage of rendering
                the JSX returned by the render method itself.
              </li>
              <li>
                <strong>Updating:</strong> Updating is the stage when the state
                of a component is updated and the application is repainted.
              </li>
              <li>
                <strong>Unmounting:</strong> As the name suggests Unmounting is
                the final step of the component lifecycle where the component is
                removed from the page.
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
          <Typography>Useref vs CreateRef</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>useRef</TableCell>
                    <TableCell>createRef</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>It is a hook.</TableCell>
                    <TableCell>It is a function.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>It uses the same ref throughout.</TableCell>
                    <TableCell>It creates a new ref every time.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      It saves its value between re-renders in a functional
                      component.
                    </TableCell>
                    <TableCell>
                      It creates a new ref for every re-render.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>It returns a mutable ref object.</TableCell>
                    <TableCell>It returns a read-only ref object.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      The refs created using the useRef can persist for the
                      entire component lifetime.
                    </TableCell>
                    <TableCell>
                      The refs created using the createRef can be referenced
                      throughout the component.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>It is used in functional components.</TableCell>
                    <TableCell>It is used in class components.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
          <Typography>Lifting State Up</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            State lifting in React refers to moving state from a child component
            to a common parent component to share it among multiple child
            components. This allows better coordination and data flow between
            sibling components.
            <strong>Why Lift State Up?</strong>
            <ul>
              <li>
                To avoid redundant or duplicate state in child components.
              </li>
              <li>
                To enable sibling components to share and react to the same data
                changes.
              </li>
            </ul>
            <strong>How It Works</strong>
            <ul>
              <li>
                <strong>Identify Shared State:</strong> Find the state needed by
                multiple child components.
              </li>
              <li>
                <strong>Move State Up:</strong> Transfer the state and its
                handler functions to the nearest common parent.
              </li>
              <li>
                <strong>Pass Props Down:</strong> Provide the state and update
                functions to child components as props.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                function Parent() {
                  const [count, setCount] = React.useState(0);

                  return (
                    <div>
                      <Child1 count={count} />
                      <Child2 increment={() => setCount(count + 1)} />
                    </div>
                  );
                }

                function Child1({ count }) {
                  return <div>Count: {count}</div>;
                }

                function Child2({ increment }) {
                  return <button onClick={increment}>Increment</button>;
                }
              `}
            />
            <strong>Recap</strong>
            <ul>
              <li>
                When you want to coordinate two components, move their state to
                their common parent.
              </li>
              <li>
                Then pass the information down through props from their common
                parent.
              </li>
              <li>
                Finally, pass the event handlers down so that the children can
                change the parent&apos;s state.
              </li>
              <li>
                It&apos;s useful to consider components as “controlled” (driven
                by props) or “uncontrolled” (driven by state).
              </li>
            </ul>
            <strong>Benefits: </strong>Simplifies debugging and maintenance.
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
          <Typography> React 19</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            React 19 is more than just a version bump — it’s a serious
            game-changer.
            <ul>
              <li>
                <strong> React Server Components (RSC) — </strong>Split
                components into client and server parts seamlessly.
              </li>
              <li>
                <strong> Streaming SSR — </strong>Faster page loads with
                incremental rendering.
              </li>
              <li>
                <strong> Actions — </strong>Mutate data directly from components
                without extra boilerplate.
              </li>
              <li>
                <strong> Improved Suspense — </strong>Better data fetching and
                lazy loading.
              </li>
              <li>
                <strong> Hooks Improvements — </strong>Cleaner state management
                with fewer re-renders.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                //Server Component (no Client-side JS here)
                async function UserProfile({ userId }) {
                  const user = await fetch('/api/user/$\\{userId}').then((res) => res.json());
                  return (
                    <div>
                      <h1>{user.name}</h1>
                      <p>{user.bio}</p>
                    </div>
                  )
                }
            `}
            />
            <ul>
              <li>No loading states. </li>
              <li>No useEffect() spaghetti. </li>
              <li>Server does the heavy lifting.</li>
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
          <Typography>The Magic of React.memo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            React.memo is a higher-order component (HOC) that memoizes
            functional components. It ensures a component only re-renders when
            its props change, reducing unnecessary rendering.
            <CodeSnippet
              language="javascript"
              code={`
              import React from 'react';

               const ExpensiveComponent = React.memo(({ data }) => {
                console.log('Rendered!');
                return <div>{data}</div>;
              });

              const App = () => {
                const [count, setCount] = React.useState(0);

                return (
                  <div>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <ExpensiveComponent data="Hello, React.memo!" />
                  </div>
                );
              };

              export default App;
            `}
            />
            <ul>
              <li>
                Without `React.memo`, `ExpensiveComponent` would re-render every
                time the parent updates.
              </li>
              <li>
                With `React.memo`, it skips re-rendering if the `data` prop
                hasn’t changed.
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
          <Typography>Optimize Computations with useMemo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Sometimes, components need to perform expensive calculations.
            `useMemo` caches the result of a computation, only recalculating
            when dependencies change.
            <CodeSnippet
              language="javascript"
              code={`
                import React, { useMemo, useState } from 'react';

                const ExpensiveCalculation = ({ number }) => {
                  const result = useMemo(() => {
                    console.log('Calculating...');
                    return number ** 2; // Simulate an expensive calculation
                  }, [number]);

                  return <div>Result: {result}</div>;
                };

                const App = () => {
                  const [count, setCount] = useState(0);
                  const [number, setNumber] = useState(2);

                  return (
                    <div>
                      <button onClick={() => setCount(count + 1)}>Increment Count</button>
                      <button onClick={() => setNumber(number + 1)}>Change Number</button>
                      <ExpensiveCalculation number={number} />
                    </div>
                  );
                };

                export default App;
            `}
            />
            <ul>
              <li>Prevents unnecessary recalculations.</li>
              <li>Saves CPU cycles for complex operations.</li>
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
          <Typography>Debouncing Events with useCallback</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In React, inline event handlers can lead to new function instances
            on every render. `useCallback` memoizes these functions, ensuring
            the same instance is reused unless dependencies change.
            <CodeSnippet
              language="javascript"
              code={`
                import React, { useCallback, useState } from 'react';

                const Button = React.memo(({ onClick }) => {
                  console.log('Button rendered!');
                  return <button onClick={onClick}>Click Me</button>;
                });

                const App = () => {
                  const [count, setCount] = useState(0);

                  const handleClick = useCallback(() => {
                    setCount((prevCount) => prevCount + 1);
                  }, []);

                  return (
                    <div>
                      <Button onClick={handleClick} />
                      <p>Count: {count}</p>
                    </div>
                  );
                };

                export default App;
            `}
            />
            <ul>
              <li>
                Inline handlers are recreated on every render, causing child
                components to re-render.
              </li>
              <li>
                `useCallback` solves this by keeping the same function instance
                unless its dependencies change.
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
          <Typography>300% Performance Boost</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Get performance boost:
            <ul>
              <li>
                1. Use `React.memo` to prevent unnecessary re-renders of
                components.
              </li>
              <li>
                2. Use `useMemo` to optimize expensive calculations in your
                components.
              </li>
              <li>
                3. Use `useCallback` to memoize event handlers and avoid child
                component
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import React, { useState, useMemo, useCallback } from 'react';

                const ExpensiveList = React.memo(({ items }) => {
                  console.log('Rendering List');
                  return (
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                });

                const App = () => {
                  const [count, setCount] = useState(0);
                  const [numbers, setNumbers] = useState([1, 2, 3]);

                  const squaredNumbers = useMemo(() => {
                    console.log('Calculating squares');
                    return numbers.map((num) => num ** 2);
                  }, [numbers]);

                  const addNumber = useCallback(() => {
                    setNumbers((prev) => [...prev, prev.length + 1]);
                  }, []);

                  return (
                    <div>
                      <button onClick={() => setCount(count + 1)}>Increment Count</button>
                      <button onClick={addNumber}>Add Number</button>
                      <ExpensiveList items={squaredNumbers} />
                    </div>
                  );
                };

                export default App;
            `}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ReactList;
