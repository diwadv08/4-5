import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.css";
import ContextFun from './context/ContextFun';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFun>
    <App />
  </ContextFun>
);

