import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom'

import LoginScreenContainer from './containers/LoginScreenContainer'
import ListPage from './containers/ListPage'
import withAuth from './hocs/withAuth'

const Home = withAuth(() => (
  <Redirect to ="list" />
))

class App extends Component { // router 설정
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginScreenContainer} />
          <Route path="/list" component={ListPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
