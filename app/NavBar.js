import React, { Component } from 'react';
import { Link } from 'react-router';
import Greeting from './Greeting';
import CustomGreeting from './CustomGreeting';
import Goodbye from './Goodbye'

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
          <Link to='/Greeting'>Greeting</Link><br/>
          <Link to='/Goodbye'>Goodbye</Link><br/>
          <Link to='/'>Custom Greeting</Link>
      <center>
        {this.props.children}
      </center>
      </div>
    )
  }
}

export default NavBar;
