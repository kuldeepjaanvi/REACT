import React, { Component } from 'react';
import ChildClass from './ChildClass'
class ParentClass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerText:'This is header'
         }
    }
    //Arrow 
    changeHeader = () => {

        this.setState(
            {
                headerText:'Changed Header'
            }
        )
    }
    render() { 
        return ( <div>    
            <h1>{this.state.headerText}</h1> 
            <ChildClass name= 'Ram' address = 'KR Puram'/>
            <button type = "button" onClick = {this.changeHeader}  >change header </button>
        </div>
            );
    }
}
 
export default ParentClass;