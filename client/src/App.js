import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Coding gfg
        </a>

        <Button variant="primary">Test BUtton</Button>
      </header>
    </div>
  );
} */

export default App;
