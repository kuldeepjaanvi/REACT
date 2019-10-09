import React , {Component} from 'react'
import ReactDOM from 'react-dom'
class Clock extends Component {

    constructor() {
        super()
        
    }

    render() {
        //JSX = java script XML -> Babel is a compiler that convert JSX into Java Script Object 
        const element = (
            <div>
              <h1>Hello, Clock!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
          );
        return element
        }

}

export default Clock;
/*

this.state = {
          date : new Date()
        }

render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

    componentWillUnmount() {
    clearInterval(this.timerID);
  }
tick() {
    this.setState({
      date: new Date()
    });
  }
*/