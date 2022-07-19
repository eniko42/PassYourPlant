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
  },
  {
    name: 'Sunflower',
    pic: logo
  },
  {
    name: 'Tulip',
    pic:logo
  },
  {
    name: 'Rose',
    pic: logo
},
{
  name: 'Daisy',
  pic: logo
},
{
  name: 'Sunflower',
  pic: logo
},
{
  name: 'Tulip',
  pic:logo
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
          <Card key={idx} name={plant.name} pic={plant.pic}/>
      ))}
      </div>
      
      <Footer />
    
      
    </div>
  );
}

export default App;
