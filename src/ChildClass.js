import React, { Component } from 'react';
class ChildClass extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = { 
            phone:'54533',
            adharNo:'3123143'
         }
    }
    render() { 
        return ( <div>
                <h1>Welcome {this.props.name} your address is {this.props.address}</h1>
                <h1> Phone No: {this.state.phone}</h1>
                <h1>Adhar No: {this.state.adharNo}</h1>
                </div>
             );
    }
}
 
export default ChildClass;