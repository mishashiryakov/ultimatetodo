import React, { useEffect } from 'react';
import Login from '../Login/Login';
import ToDoApp from '../ToDoApp/ToDoApp'
import Layout from '../../hoc/Layout/Layout';
import {Route, Switch, Redirect } from 'react-router-dom';
import withHocs from './UltimateToDoHoc';
import { useSelector } from 'react-redux';

const UltimateToDo = ({classes, theme}) => {
   const { username, password, isLogged } = useSelector(store => store.auth)

  useEffect(() => {
    window.onunload = () => {
      const jsonState = JSON.stringify({auth : {username, password, isLogged}});
      localStorage.setItem('auth', jsonState);
    };
  });

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

export default withHocs(UltimateToDo);
