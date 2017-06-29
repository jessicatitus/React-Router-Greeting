import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Greeting from './Greeting'
import Goodbye from './Goodbye'
import NavBar from './NavBar'
import CustomGreeting from './CustomGreeting'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute
            component={CustomGreeting}
          />
          {/* index route will be the default first page you get directed to */}
          <Route path='/CustomGreeting'
          component={CustomGreeting}
          />
          <Route path='/Greeting'
          component={Greeting}
          />
          <Route path='/Goodbye'
          component={Goodbye}
          />

        </Route>
      </Router>
    )
  }
}

export default App;
