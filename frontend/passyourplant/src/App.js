import React from "react";
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
          //console.log(this.state.plants);
      })
}
  render() {
    const { DataisLoaded, plants} = this.state;
    if(!DataisLoaded) return <div>
      <h1>Please wait...</h1>
    </div>
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <Title title={this.state.title}></Title>
        
      </header>
      <div className="Card-container">
      {this.state.plants.map((plant, idx) => (
          <Card key={idx} name={plant.plant_name} pic={plant.photo}/>
      ))}
      </div>
      
      <Footer />
    
      
    </div>
  );
      }
}

export default App;
