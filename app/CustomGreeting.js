import React, { Component } from 'react';
import Form from './Form'

class CustomGreeting extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      type: "greeting",
      namesArray: []
    }
    this.handleName = this.handleName.bind(this)
    this.handleType = this.handleType.bind(this)
    this.addName = this.addName.bind(this)

  }

  addName(event){
    event.preventDefault();
    let newNamesArray = [...this.state.namesArray, this.state.name]
    this.setState( {namesArray: newNamesArray} )
  }

  handleName(event){
    let newName = event.target.value
    this.setState({ name: newName })
  }

  handleType(event){
    let newType = event.target.value
    this.setState({ type: newType })
  }

  render(){
    let message;
    let id = 0;
    let greetings = this.state.namesArray.map(name => {
      id++;
      if (this.state.type === "greeting"){
        message = `Hello my friend ${name}`
      } else {
        message = `Goodbye my enemy ${name}`
      }
      return(
        <div key={id}>
          {message}
        </div>

      )
    })

    return(
      <div>
        <h1>Custom Greeting Generator</h1>
        <Form handleType={this.handleType} handleName={this.handleName} handleSubmit={this.addName}/>
        {greetings}
      </div>
    )
  }
}

export default CustomGreeting;
