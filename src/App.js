import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import LoginScreenContainer from './containers/LoginScreenContainer'
import ListPage from './containers/ListPage'

class App extends Component { // router 설정
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginScreenContainer} />
          <Route path="/list" component={ListPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
