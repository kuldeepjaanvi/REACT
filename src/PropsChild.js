import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h1>Welcome {this.props.name} your user id is {this.props.userID}</h1> );
    }
}
 
export default Child;