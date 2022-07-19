import logo from './logo.svg';
import './App.css';
import { Title } from './Title';

function App() {
  const title = "Pass Your Plant";
  return (
    <div className="App">
      <header className="App-header">

        <Title title={title}></Title>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
