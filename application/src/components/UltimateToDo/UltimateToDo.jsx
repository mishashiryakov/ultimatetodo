import React from 'react';
import Login from '../Login/Login';
import ToDoApp from '../ToDoApp/ToDoApp'
import Layout from '../../hoc/Layout/Layout';
import {Route, Switch, Redirect } from 'react-router-dom';
import withHocs from './UltimateToDoHoc';
import { connect } from 'react-redux';

const UltimateToDo = ({classes, theme, isLogged}) => {
    return (
      <Layout>
        <Switch>
          {!isLogged && <Route exact path="/">
              <Redirect to="/login"/>
          </Route>}

          {isLogged && <Route exact path="/" component={ToDoApp}/>}

          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    );
}

function mapStateToProps(state) {
  return {
    usernameStore: state.usernameStore,
    passwordStore: state.passwordStore,
    isLogged: state.isLogged
  }
}

export default connect(mapStateToProps)(withHocs(UltimateToDo));