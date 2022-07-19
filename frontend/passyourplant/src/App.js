import './App.css';
import Navbar from'./Navbar';
import { Title } from './Title';
import { Footer } from './Footer';
import {Card} from './Card';
import logo from './logo.svg';

function App() {
  const title = "Pass Your Plant";
  const plants = [
    {
      name: 'Rose',
      pic: logo
  },
  {
    name: 'Daisy',
    pic: logo
  }
]
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <Title title={title}></Title>
        
      </header>
      {plants.map((plant, idx) => (
          <Card key={idx} name={plant.name} pic={plant.pic}/>
      ))}
      <Footer />
    
      
    </div>
  );
}

export default App;
