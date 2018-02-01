import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function withAuth(WrappedComponent) { // 고차 컴포넌트를 반환하는 함수
  return class extends Component { // 익명 클래스
    state = {
      currentUser: null,
      loading: false,
      redirectToLogin: false,
    }
    componentWillMount() { // component가 마운트 되기 직전에 실행된다.
      const currentUser=firebase.auth().currentUser;
      if (currentUser) { // 사용자가 있을 때.
        this.setState({
          currentUser,
        });
      } else { // ?
        this.setState({
          loading: true,
        });
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => { // loading 구독
          unsubscribe(); // 구독취소.(사용되는 곳이 많아서 한번만 구독할 수 있게 구독 취소 해주어야된다.)
          if (user) {
            this.setState({
              currentUser: user,
              loading: false,
            });
          } else {
            this.setState({
              redirectToLogin: true,
            });
          }
        });
      }
    }
    render() {
      if (this.state.redirectToLogin) {
        return (
          <Redirect to="/login" />
        );
      } else if (this.state.loading) {
        return (
          <Dimmer active inverted={this.state.loading}>
            <Loader>Loading</Loader>
          </Dimmer>
        );
      }
      return (
          <WrappedComponent {...this.props} /> // 실제 Main을 render하는 곳.
      ); // hocs를 사용할 때 hocs의 모든 props를 Main에게 반환 하도록 해야된다.

    }
  };
}
