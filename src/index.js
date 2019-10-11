import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login'
import Clock from './Clocks';
import PropsState from './prosAndStates'
import Welcome from './PropsSample'
import PropsSample from './PropsSample'
import ParentClass from './ParentClass'

//ReactDOM.render(<PropsSample/>, document.getElementById('root'));
ReactDOM.render(<ParentClass/>, document.getElementById('root'));

//ReactDOM.render(<PropsState/>, document.getElementById('root'));
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

//setInterval(tick, 1000);

//setInterval(clock, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }

  function clock() {
    
    // highlight-next-line
    ReactDOM.render(<Clock/>, document.getElementById('root'));
  }