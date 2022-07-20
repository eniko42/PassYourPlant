import './App.css';
import Navbar from'./Navbar';
import { Title } from './Title';
import { Footer } from './Footer';
import {Card} from './Card';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "Pass Your Plant",
        plants: [],
        DataisLoaded: false
    };
}

componentDidMount() {
  fetch("/api/plants")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              plants: json,
              DataisLoaded: true
          });
      })
}
  render() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <Title title={this.title}></Title>
        
      </header>
      <div className="Card-container">
      {plants.map((plant, idx) => (
          <Card key={idx} name={plant.name} pic={plant.photo}/>
      ))}
      </div>
      
      <Footer />
    
      
    </div>
  );
      }
}

export default App;
