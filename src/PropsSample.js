import React, { Component , button} from 'react';
import PropsChild from './PropsChild'
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titleText: 'This is header text'
         }
    }

    changeColor = () => {

        this.setState(
            {titleText:'This is changed header'}
        )
    }
    render() { 
        return ( 
                <div>
                <h1>{this.state.titleText}</h1> 
                <PropsChild name = 'kuldeep' userID = '123'  />
                <button type = "button" onClick = {this.changeColor}  >change header </button>
                </div>
            );
    }
}
 
export default Parent;