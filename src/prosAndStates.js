import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
   // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(props);
    console.log(this.props);
    
    this.state = {
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.props.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
        </div>
      );
    }
  }
export default Garage