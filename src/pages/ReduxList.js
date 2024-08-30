import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeSnippet from "../CodeSnippet";

const HtmlList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Container>
      <Accordion expanded={expanded}
        onChange={handleExpansion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Redux</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                Redux's capabilities, such as handling asynchronous actions.
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
    </Container>
  );
};

export default HtmlList;
