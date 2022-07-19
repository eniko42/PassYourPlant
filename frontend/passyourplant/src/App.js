import logo from './logo.svg';
import './App.css';
import Navbar from'./Navbar';
import { Title } from './Title';
import { Footer } from './Footer';

function App() {
  const title = "Pass Your Plant";
  return (
    <div className="App">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
