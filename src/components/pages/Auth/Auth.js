import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div ClassName="Home">
      <div className="loadText">
        <h1>Reduce. Reuse. Reebox</h1>
        </div>
      <div className="Auth">
        <button className="btn btn-dark" id="loadSignin" onClick={this.loginClickEvent}>Sign In</button>
      </div>
      </div>
    );
  }
}

export default Auth;
