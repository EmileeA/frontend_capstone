import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import NavBar from '../components/shared/NavBar/NavBar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import MyPickups from '../components/pages/MyPickups/MyPickups';
import SinglePickup from '../components/pages/SinglePickup/SinglePickup';
import PickupForm from '../components/pages/PickupForm/PickupForm';


import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
    <div className="App">
      {/* <NavBar authed={authed} />
    { authed === true ? (<Home />) : (<Auth authed={authed} />) } */}
      <Router>
        <NavBar authed={authed}/>
        <Switch>
          <PrivateRoute path="/" exact component={Home} authed={authed}/>
          <PublicRoute path="/auth" exact component={Auth} authed={authed} />
          <PrivateRoute path="/scheduleapickup" exact component={PickupForm} authed={authed} />
          <PrivateRoute path="/myaccount" exact component={MyPickups} authed={authed} />
          <PrivateRoute path="/myaccount/:pickupId" exact component={SinglePickup} authed={authed} />
          <PrivateRoute path="/myaccount/:pickupId/edit" exact component={PickupForm} authed={authed}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
