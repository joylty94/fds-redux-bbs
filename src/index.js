import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBqfBhUTQpeVLoBFi1obtknWjCwMPiuIWg',
  authDomain: 'fds-redux-bbs-cf3e2.firebaseapp.com',
  databaseURL: 'https://fds-redux-bbs-cf3e2.firebaseio.com',
  projectId: 'fds-redux-bbs-cf3e2',
  storageBucket: '',
  messagingSenderId: '468057419445',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
