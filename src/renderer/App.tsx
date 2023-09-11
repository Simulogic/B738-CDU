import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import DisplayUnit from './displays/DisplayUnit';
import CDU from './displays/CDU';
import DisplayWrapper from './DisplayWrapper';
import Control from './control/Control';
import Settings from './control/Settings';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Control />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/display/:location"
          element={
            <DisplayWrapper>
              <DisplayUnit />
            </DisplayWrapper>
          }
        />
        <Route
          path="/cdu/:location"
          element={
            <DisplayWrapper>
              <CDU />
            </DisplayWrapper>
          }
        />
      </Routes>
    </Router>
  );
}
