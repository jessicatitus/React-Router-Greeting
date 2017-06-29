import React from 'react';

const Form = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleName}/>
      <select onChange={props.handleType}>
        <option value="greeting">Greeting</option>
        <option value="goodbye">Goodbye</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default Form;
