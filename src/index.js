import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>  {/* Wrap App with BrowserRouter */}
    <App />
  </HashRouter>
);

