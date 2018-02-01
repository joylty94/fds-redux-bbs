import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import LoginScreenContainer from './containers/LoginScreenContainer';
import ListPage from './containers/ListPage';
import withAuth from './hocs/withAuth';
import rootReducer from './ducks';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

const Home = withAuth(() => (
  <Redirect to="list" />
));

class App extends Component { // router 설정
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginScreenContainer} />
            <Route path="/list" component={ListPage} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
