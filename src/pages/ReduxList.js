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
        Redux Concepts Overview
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
          <Typography>Redux</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux is an open-source, JavaScript library used to manage the
            application state. React uses Redux to build the user interface. It
            is a predictable state container for JavaScript applications and is
            used for the entire application’s state management.
            <strong>Store</strong>
            <ul>
              <li>
                <strong>Definition:</strong> The store is a central repository
                that holds the entire state of the application.
              </li>
              <li>
                <strong>Usage:</strong> There is typically one store per
                application. It is created using the createStore function from
                Redux.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { createStore } from 'redux';
                import rootReducer from './reducers';

                const store = createStore(rootReducer);
              `}
            />
            <strong>Actions:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> Actions are plain JavaScript
                objects that represent an intention to change the state. Each
                action has a type property and can also include additional data
                (payload).
              </li>
              <li>
                <strong>Usage:</strong> Actions are dispatched to signal that
                something has happened that should update the state.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const incrementAction = {
                  type: 'INCREMENT'
                };

                const setUserAction = (user) => ({
                  type: 'SET_USER',
                  payload: user
                });
              `}
            />
            <strong>Reducers:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> Reducers are pure functions that
                specify how the state changes in response to actions. They take
                the current state and an action as arguments and return a new
                state.
              </li>
              <li>
                <strong>Usage:</strong> Reducers are combined to form the root
                reducer, which is used to create the store.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const counterReducer = (state = 0, action) => {
                  switch (action.type) {
                    case 'INCREMENT':
                      return state + 1;
                    default:
                      return state;
                  }
                };

                const rootReducer = combineReducers({
                  counter: counterReducer,
                  // other reducers
                });
              `}
            />
            <strong>Dispatch:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> dispatch is a method used to send
                actions to the store. This triggers the reducers to process the
                action and update the state.
              </li>
              <li>
                <strong>Usage:</strong> Components or other parts of the
                application use dispatch to send actions.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                store.dispatch(incrementAction);
              `}
            />
            <strong>Selectors:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> Selectors are functions that
                extract and return a specific part of the state from the store.
                They are used to retrieve and compute derived data from the
                state.
              </li>
              <li>
                <strong>Usage:</strong> Selectors help encapsulate and reuse
                logic for accessing the state.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const selectCounter = (state) => state.counter;
              `}
            />
            <strong>Middleware:</strong>
            <ul>
              <li>
                <strong>Definition:</strong> Middleware is a way to extend
                Redux&apos;s capabilities, such as handling asynchronous actions.
                Common middleware includes Redux Thunk and Redux Saga.
              </li>
              <li>
                <strong>Usage:</strong> Middleware can be applied when creating
                the store to handle things like side effects or logging.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import thunk from 'redux-thunk';

                const store = createStore(rootReducer, applyMiddleware(thunk));
              `}
            />
            <strong>Summary:</strong>
            <ul>
              <li>
                Redux provides a predictable state container for JavaScript
                apps, helping manage and centralize state.
              </li>
              <li>
                Core Concepts: Store, Actions, Reducers, Dispatch, Selectors,
                Middleware.
              </li>
              <li>
                Integration: Redux can be integrated with React using the
                react-redux library, enabling components to access and update
                the state.
              </li>
            </ul>
            <strong>benfits of using react-redux</strong>
            <ul>
              <li>
                It provides centralized state management i.e. a single store for
                whole application
              </li>
              <li>
                It optimizes performance as it prevents re-rendering of
                component
              </li>
              <li>Makes the process of debugging easier</li>
              <li>
                Since it offers persistent state management therefore storing
                data for long times become easier
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
          <Typography>Store</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A store in Redux serves as the container for the entire state of a
            web application. A store holds the application&apos;s state, and Redux
            provides a consistent way to access and update this state.
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
          <Typography>Action</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            An action in Redux is a plain JavaScript object that represents an
            intention to change the state. An action in Redux plays a crucial
            role in state management by dispatching these actions to trigger
            state updates.
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
          <Typography>Reducer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A reducer in Redux is a function that determines how the state will
            change in response to actions. A reducer in Redux takes the previous
            state and an action as arguments and returns the new state.
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
          <Typography>Connect a React component to a Redux store</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            To connect a React component to a Redux store, you use the connect
            function from the react-redux library. The connect function connects
            the component to the Redux store, allowing it to access the state
            and dispatch actions.
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
          <Typography>Immutability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The significance of immutability in Redux lies in ensuring a
            predictable state and simplifying state management. The immutable
            state allows for easier tracking of changes and debugging.
            <b />
            Immutability in Redux enhances performance optimization.
            Immutability enables efficient state updates and comparison,
            reducing the overhead of complex operations and ensuring predictable
            state evolution.
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
          <Typography>Redux vs React&apos;s local state.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The difference between Redux and React&apos;s local state is that Redux
            provides a global state for the entire application, whereas React&apos;s
            local state is confined to individual components.
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
          <Typography>Middleware</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Middleware in Redux is a layer that intercepts actions before they
            reach the reducers. An example of its use is logging actions for
            debugging purposes or handling asynchronous operations.
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
          <Typography>Managing the state of an application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux helps in managing the state of an application by providing a
            centralized store that maintains consistency and predictability
            across the application.
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
          <Typography>Pure functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Pure functions in the context of Redux are functions that, given the
            same input, always return the same output without any side effects.
            Pure functions are essential in reducers for predictable state
            transitions.
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
          <Typography>MapStateToProps vs MapDispatchToProps</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <strong>mapStateToProps</strong>
            <ul>
              <li>
                <strong>Purpose:</strong>Provides the component access to the
                part of the Redux store state it needs.
              </li>
              <li>
                <strong>Function:</strong>Receives the entire Redux store state
                and returns an object that represents the portion of the state
                that the component needs as props.
              </li>
              <li>
                <strong>Usage:</strong>This function is used when the component
                needs to read from the Redux store.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const mapStateToProps = (state) => {
                  return {
                    someData: state.someData,
                    anotherPiece: state.anotherPiece
                  };
                };
              `}
            />
            In a UserList component, if you want to access the list of users
            stored in the Redux state, you would use mapStateToProps to map the
            users state to props.
            <b />
            <strong>mapDispatchToProps</strong>
            <ul>
              <li>
                <strong>Purpose:</strong>Provides the component access to action
                dispatchers, allowing it to send actions to the Redux store.
              </li>
              <li>
                <strong>Function:</strong>Receives the dispatch function and
                returns an object where each function is a wrapped action
                dispatcher that the component can call directly.
              </li>
              <li>
                <strong>Usage:</strong>Used when the component needs to modify
                the state by dispatching actions.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                  const mapDispatchToProps = (dispatch) => {
                    return {
                      fetchData: () => dispatch(fetchDataAction()),
                      addItem: (item) => dispatch(addItemAction(item)),
                    };
                  };
                `}
            />
            In a TodoList component, if you want to add a new item to the list,
            you’d use mapDispatchToProps to provide a addItem prop that
            dispatches the action.
            <b />
            <strong>Connecting a Component with Both</strong>
            <CodeSnippet
              language="javascript"
              code={`
                  import { connect } from "react-redux";

                  const MyComponent = ({ someData, addItem }) => {
                    // Component logic here
                  };

                  export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
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
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography>CombineReducers function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            In Redux, combineReducers is a utility function that combines
            multiple reducer functions into a single reducing function. This is
            especially useful when you have multiple pieces of state in your
            application and want to handle updates to each part of the state
            independently through different reducers.
            <ul>
              <li>
                combineReducers takes an object where each key corresponds to a
                specific slice of the state and each value is a reducer that
                manages that slice.
              </li>
              <li>
                It returns a single root reducer that you can pass to
                createStore.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import { combineReducers } from 'redux';

                // Reducer for managing user data
                const userReducer = (state = {}, action) => {
                  switch (action.type) {
                    case 'SET_USER':
                      return { ...state, user: action.payload };
                    default:
                      return state;
                  }
                };

                // Reducer for managing posts
                const postsReducer = (state = [], action) => {
                  switch (action.type) {
                    case 'ADD_POST':
                      return [...state, action.payload];
                    default:
                      return state;
                  }
                };

                // Combine the reducers
                const rootReducer = combineReducers({
                  user: userReducer,   // State slice 'user' managed by userReducer
                  posts: postsReducer, // State slice 'posts' managed by postsReducer
                });

                export default rootReducer;
              `}
            />
            <strong>Usage:</strong>
            <ul>
              <li>
                <strong>State Structure:</strong>After combining the reducers,
                the state will have a structure like this:
              </li>
              <CodeSnippet
                language="javascript"
                code={`
                  {
                    user: { user: 'John Doe' }, // Managed by userReducer
                    posts: [ { id: 1, content: 'Hello world!' } ] // Managed by postsReducer
                  }
                `}
              />
              <li>
                <strong>Dispatching Actions:</strong> Actions dispatched to the
                store will be routed to the appropriate reducer based on the
                state slice that is being updated.
              </li>
              <CodeSnippet
                language="javascript"
                code={`
                  store.dispatch({ type: 'SET_USER', payload: { name: 'Jane Doe' } });
                  store.dispatch({ type: 'ADD_POST', payload: { id: 2, content: 'Another post' } });
                `}
              />
            </ul>
            <strong>Help:</strong>
            <ul>
              <li>
                <strong>Separation of Concerns:</strong> Each reducer is
                responsible for its own part of the state, making it easier to
                maintain and scale your application.
              </li>
              <li>
                <strong>Modular:</strong> It allows you to break down your
                reducer logic into smaller pieces that are easier to reason
                about.
              </li>
              <li>
                <strong>Scalable:</strong> As your application grows, you can
                add more slices of state and reducers without complicating the
                existing ones.
              </li>
            </ul>
            combineReducers is a very useful utility in Redux that helps manage
            and organize large applications by allowing you to break down the
            state management into smaller, more manageable pieces. Each reducer
            can focus on a particular slice of the state, making it easier to
            develop, test, and maintain.
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
          <Typography>Asynchronous Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Handling asynchronous actions in Redux typically involves using
            middleware like Redux Thunk or Redux Saga. The tools allow for
            dispatching actions that can perform asynchronous operations before
            updating the state.
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
          <Typography>Action creator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`An "action creator" in Redux is a function that creates and returns
            an action object. An "action creator" simplifies the process of
            dispatching actions and ensures consistency in action structure.`}
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
          <Typography>Principles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The principles that Redux follows for state management include
            having a single source of truth, states being read-only, and changes
            made through pure functions.
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
          <Typography>Debug a Redux application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            To debug a Redux application, developers use tools like Redux
            DevTools. These tools provide features like state inspection and
            time-travel debugging.
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
          <Typography>Redux Thunk</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux Thunk is middleware for Redux that allows for dispatching
            functions instead of action objects. Redux Thunk is useful for
            handling asynchronous actions within a Redux application.
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
          <Typography>Beneficial</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            A real-world scenario where Redux would be beneficial is in a
            large-scale web application with complex state interactions and
            updates, where centralized state management simplifies development
            and maintenance.
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
          <Typography>Role of the dispatch function</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The role of the dispatch function in Redux is to send actions to the
            store. The dispatch function in Redux triggers the state update
            process within the Redux ecosystem.
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
          <Typography>Single source of truth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            {`The concept of "single source of truth" in Redux refers to having
            the entire application state stored in one place. The concept of
            "single source of truth" ensures consistency and predictability of
            the application's state.`}
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
          <Typography>Advantages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The advantages of using Redux over local component state include
            better state predictability, easier debugging, and the ability to
            maintain a consistent state across the entire application.
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
          <Typography>Traditional Flux</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux differs from traditional Flux architecture primarily in how it
            handles data flow. Redux has a single store and promotes
            unidirectional data flow, making it simpler and more predictable.
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
          <Typography>Predictable state containers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux helps in creating predictable state containers by enforcing
            the use of pure functions in reducers and maintaining a single state
            tree, which simplifies state management and debugging.
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
          <Typography>Selectors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Selectors in Redux are functions that extract specific parts of the
            state. Selectors in Redux are used for efficiently computing derived
            data from the Redux store and preventing unnecessary renders.
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
          <Typography>Time-travel debugging</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Time-travel debugging in Redux allows developers to step back and
            forth through the state changes of the application. This feature
            enables easier tracking of bugs by observing how state evolves over
            time.
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
          <Typography>Code splitting </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Implement code splitting in a Redux application by dividing reducers
            and middleware into separate chunks. Load them asynchronously as
            needed, improving load times and efficiency.
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
          <Typography>Structuring large Redux stores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Best practices for structuring large Redux stores include
            normalizing data, modularizing reducers, and avoiding deeply nested
            structures. This approach ensures scalability and maintainability.
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
          <Typography>Middleware</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Redux integrates with middleware like Redux-Saga or Redux-Observable
            by enhancing dispatch functionality. Middleware intercepts actions
            to handle asynchronous operations or complex logic before reaching
            reducers.
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
          <Typography>Server-side rendering </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Server-side rendering with Redux in a React application involves
            initializing the Redux store on the server. The initial state is
            then passed to the client for a seamless transition between server
            and client rendering.
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
          <Typography>Side-effects </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Strategies for handling side-effects in Redux include using
            middleware like Redux Thunk for asynchronous actions and Redux Saga
            for more complex scenarios. These tools manage side-effects outside
            reducers.
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
          <Typography>Higher-order reducers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Higher-order reducers in Redux enhance or modify the behavior of
            existing reducers. Higher-order reducers are used for reusing
            reducer logic, managing cross-cutting concerns, and improving code
            modularity.
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
          <Typography>Optimize the performance of mapStateToProps</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Optimize the performance of mapStateToProps functions by memoizing
            expensive calculations and minimizing state traversal. Memoizing
            reduces unnecessary re-renders and improves application
            responsiveness.
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
          <Typography>Normalized state shape</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Using a normalized state shape in Redux simplifies data management.
            Using a normalized state shape avoids data duplication, eases
            updates, and improves querying efficiency, particularly in
            applications with complex data structures.
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
          <Typography>Implications of using multiple stores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Using multiple stores in Redux deviates from the single source of
            truth principle. Using multiple stores leads to challenges in state
            synchronization but may be useful in isolating independent parts of
            an application.
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
          <Typography>Reselect enhance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Selector libraries like Reselect enhance Redux state management by
            providing memoization. Reselect helps in computing derived data
            efficiently, reducing the need for recalculations and optimizing
            performance.
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
          <Typography>Pros and Cons of using Immutable.js </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Using Immutable.js with Redux ensures immutability, enhancing
            predictability and performance. Immutable.js introduces learning
            curve complexities and potential overheads in integrating with
            existing JavaScript objects.
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
          <Typography>Local state vs Global state</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            The concepts of local state and global state represent two different
            approaches to managing state in an application. Each serves a
            distinct purpose, and understanding when to use each is important
            for building scalable and maintainable applications.
            <strong>1. Local State</strong>
            <b />
            Local state refers to the state that is managed within a specific
            component of the application, typically using React`s useState or
            useReducer hooks. It is local to that component and is only
            accessible to it (and its children, if passed as props).
            <b />
            <strong>Characteristics:</strong>
            <ul>
              <li>
                <strong>Component-specific:</strong> Managed within a single
                component or its children.
              </li>
              <li>
                <strong>Short-lived:</strong> Typically used for transient
                UI-related data like form inputs, modal visibility, or toggling
                a dropdown.
              </li>
              <li>
                <strong>No global access:</strong> It cannot be accessed or
                modified from other components unless passed down as props.
                Simple: Ideal for state that doesn’t need to be shared globally,
                like toggling UI elements.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                import React, { useState } from 'react';

                const Counter = () => {
                  const [count, setCount] = useState(0);

                  const increment = () => setCount(count + 1);

                  return (
                    <div>
                      <p>Count: {count}</p>
                      <button onClick={increment}>Increment</button>
                    </div>
                  );
                };
             `}
            />
            <ul>
              <li>When the state is only relevant to a specific component.</li>
              <li>
                For managing small, temporary data like toggles, form input
                values, or animation state.
              </li>
              <li>
                When you don&apos;t need the state to persist across the entire
                application or across different routes/views.
              </li>
            </ul>
            <strong>2. Global State (in Redux)</strong>
            <b />
            Global state, on the other hand, refers to the state that is managed
            in a centralized store (like Redux) and can be accessed by any part
            of the application. This state is global in scope and typically
            represents data that needs to be shared across multiple components,
            such as user authentication data, application settings, or global
            themes.
            <b />
            <strong>Characteristics:</strong>
            <ul>
              <li>
                <strong>Centralized:</strong>
                Managed in a global store (like Redux) rather than within
                individual components.
              </li>
              <li>
                <strong>Long-lived:</strong> Typically used for global or
                app-wide data that persists throughout the application&apos;s
                lifecycle.
              </li>
              <li>
                <strong>Global access:</strong> Can be accessed and modified
                from any component in the application that connects to the Redux
                store.
              </li>
              <li>
                <strong>Complex:</strong> Suitable for managing data that needs
                to be accessed by multiple components, or when you need to
                synchronize state across different views or routes.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                  // Action Types
                  const SET_USER = 'SET_USER';

                  // Action Creators
                  const setUser = (user) => ({
                    type: SET_USER,
                    payload: user,
                  });

                  // Reducer
                  const userReducer = (state = {}, action) => {
                    switch (action.type) {
                      case SET_USER:
                        return { ...state, user: action.payload };
                      default:
                        return state;
                    }
                  };

                  // Store
                  import { createStore } from 'redux';
                  const store = createStore(userReducer);

                  // Component
                  import React from 'react';
                  import { useSelector, useDispatch } from 'react-redux';

                  const UserProfile = () => {
                    const user = useSelector((state) => state.user);
                    const dispatch = useDispatch();

                    const updateUser = () => {
                      dispatch(setUser({ name: 'Jane Doe' }));
                    };

                    return (
                      <div>
                        <p>{user.name}</p>
                        <button onClick={updateUser}>Update User</button>
                      </div>
                    );
                  };
              `}
            />
            <ul>
              <li>
                When you need to share data across multiple components or even
                different routes/views.
              </li>
              <li>
                For application-wide settings like authentication information,
                theme preferences, language settings, or other global state.
              </li>
              <li>
                When state changes need to trigger actions across the app (e.g.,
                loading indicators, API responses).
              </li>
              <li>
                When state needs to persist beyond the lifecycle of a single
                component (e.g., user login status).
              </li>
            </ul>
            <strong>Choosing Between Local State and Global State:</strong>
            <ul>
              <li>
                <strong>Use local state</strong> for small, isolated data that
                doesn’t need to be shared across different parts of the app.
              </li>
              <li>
                <strong>Use global state (Redux)</strong> when the data needs to
                be accessible by multiple components, or when you need to manage
                complex, persistent state that affects different parts of the
                app.
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
          <Typography>Testing Redux applications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Challenges in testing Redux applications include mocking stores and
            asynchronous actions. Overcome these by using tools like Redux Mock
            Store and Jest, and writing modular, testable code.
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
          <Typography>Handle form state management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            Handle form state management in Redux by storing form state in the
            Redux store. Use actions to update form fields and reducers to
            manage the form state, ensuring a consistent and predictable form
            behavior.
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
          <Typography>
            Differences and similarities between Redux Thunk and Redux Saga
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 300 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Aspect</TableCell>
                    <TableCell>Redux Thunk</TableCell>
                    <TableCell>Redux Saga</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Primary Approach</TableCell>
                    <TableCell>
                      Uses functions (thunks) to handle async logic by
                      dispatching actions inside functions.
                    </TableCell>
                    <TableCell>
                      Uses generator functions to handle async flows in a more
                      declarative way.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ease of Use</TableCell>
                    <TableCell>
                      Simple and easy to set up, especially for beginners; ideal
                      for straightforward async logic.
                    </TableCell>
                    <TableCell>
                      More complex to set up and learn but powerful for handling
                      complex async logic with greater control.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Control over Flow</TableCell>
                    <TableCell>
                      Limited flow control; async logic is often nested within
                      action creators.
                    </TableCell>
                    <TableCell>
                      High control with generators and yield statements,
                      enabling step-by-step flow control.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Error Handling</TableCell>
                    <TableCell>
                      Relies on try-catch blocks within async code but doesn’t
                      have built-in error handling specific to middleware.
                    </TableCell>
                    <TableCell>
                      Built-in error handling at multiple levels of the saga
                      flow, allowing structured error management across async
                      processes.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Side Effects</TableCell>
                    <TableCell>
                      Not specifically built for side effects beyond basic async
                      tasks; can become complex with multiple effects.
                    </TableCell>
                    <TableCell>
                      Specifically designed for handling complex side effects
                      (API calls, debouncing, throttling, etc.).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dependencies</TableCell>
                    <TableCell>
                      Minimal; no special dependencies are required beyond the
                      middleware itself.
                    </TableCell>
                    <TableCell>
                      Depends on redux-saga and leverages a variety of helper
                      functions (takeEvery, takeLatest, etc.) to manage effects.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Code Readability</TableCell>
                    <TableCell>
                      Straightforward with shorter async logic but can become
                      harder to read with nested thunks.
                    </TableCell>
                    <TableCell>
                      Sagas can improve readability for complex async logic but
                      require familiarity with generators and redux-saga syntax.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Use Cases</TableCell>
                    <TableCell>
                      Best suited for simple async actions, like single API
                      requests or small workflows.
                    </TableCell>
                    <TableCell>
                      Better for complex workflows like orchestrating multiple
                      requests, conditional side effects, debouncing, and
                      retries.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <strong>Similarities</strong>
            <ul>
              <li>
                <strong>Middleware for Redux:</strong> Both Redux Thunk and
                Redux Saga are middleware solutions used to handle asynchronous
                actions and side effects in Redux applications.
              </li>
              <li>
                <strong>Async Handling:</strong> Both allow you to manage
                asynchronous operations, such as API calls, with Redux. They
                ensure that these async tasks do not block the main Redux flow.
              </li>
              <li>
                <strong>State Management in Redux:</strong> Both work alongside
                Redux, allowing developers to update the Redux state
                asynchronously, based on responses from API calls or other async
                events.
              </li>
              <li>
                <strong>Decoupling of Logic:</strong> Both solutions help to
                decouple side effect logic from the main application logic,
                providing a cleaner structure for handling async tasks and
                keeping Redux actions pure.
              </li>
            </ul>
            <strong>Redux Thunk:</strong>
            <ul>
              <li>Making a single API request on a button click.</li>
              <li>
                Dispatching a simple sequence of actions based on the outcome of
                a promise.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                const fetchUser = (userId) => (dispatch) => {
                  dispatch({ type: 'FETCH_USER_REQUEST' });
                  fetch(\`/api/users/\${userId}\`)
                    .then((response) => response.json())
                    .then((data) => dispatch({ type: 'FETCH_USER_SUCCESS', payload: data }))
                    .catch((error) => dispatch({ type: 'FETCH_USER_FAILURE', error }));
                };
              `}
            />
            <strong>Redux Saga:</strong>
            <ul>
              <li>
                Handling complex side effects, like calling multiple APIs and
                waiting for all to resolve.
              </li>
              <li>
                Implementing debouncing or throttling, e.g., for user search
                inputs.
              </li>
            </ul>
            <CodeSnippet
              language="javascript"
              code={`
                  function* fetchUserSaga(action) {
                    try {
                      const response = yield call(fetch, \`/api/users/\${action.payload}\`);
                      const data = yield response.json();
                      yield put({ type: 'FETCH_USER_SUCCESS', payload: data });
                    } catch (error) {
                      yield put({ type: 'FETCH_USER_FAILURE', error });
                    }
                  }

                  function* watchFetchUser() {
                    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga);
                  }
              `}
            />
            <strong>When to Use Which</strong>
            <b />
            <ul>
              <li>
                <strong>Choose Redux Thunk</strong> for simple asynchronous
                logic where the complexity of side effects is minimal, and
                readability is a priority.
              </li>
              <li>
                <strong>Choose Redux Saga</strong> when you need more
                sophisticated control over async flows, like handling
                cancellations, retries, or multi-step processes.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default HtmlList;
