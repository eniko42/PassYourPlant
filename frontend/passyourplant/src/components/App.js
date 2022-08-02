import React from "react";
import '../style/App.css';
import { Title } from './Title';
import logo from '../images/plant.svg';
import logo2 from '../images/plant-2.svg';
import { Card } from './Card';


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
    const { DataisLoaded, plants, title } = this.state;
    if (!DataisLoaded) return <div>
      <h1>Please wait...</h1>
    </div>
    return (
      <div className="App">
        <header className="App-header">

          <Title title={title}/>
          <div className="logos">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo-2" alt="logo" />
        </div>

        </header>
        <div className="Card-container">
          {plants.map((plant, idx) => (
            <Card key={idx} plant={plant} />
          ))}
        </div>


      </div>
    );
  }
}

export default App;
