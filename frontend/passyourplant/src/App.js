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
      pic: logo,
      available: true
  },
  {
    name: 'Daisy',
    pic: logo,
    available: false
  },
  {
    name: 'Sunflower',
    pic: logo,
    available: true
  },
  {
    name: 'Tulip',
    pic:logo,
    available: true
  },
  {
    name: 'Rose',
    pic: logo,
    available: false
},
{
  name: 'Daisy',
  pic: logo,
  available: false
},
{
  name: 'Sunflower',
  pic: logo,
  available: false
},
{
  name: 'Tulip',
  pic:logo,
  available: false
}
]
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <Title title={title}></Title>
        
      </header>
      <div className="Card-container">
      {plants.map((plant, idx) => (
          <Card key={idx} name={plant.name} pic={plant.pic} available={plant.available}/>
      ))}
      </div>
      
      <Footer />
    
      
    </div>
  );
}

export default App;
