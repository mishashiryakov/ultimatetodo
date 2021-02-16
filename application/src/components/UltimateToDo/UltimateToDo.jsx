import React, { useEffect } from 'react';
import Login from '../Login/Login';
import ToDoApp from '../MyDay/MyDay';
import Calendar from '../Calendar/Calendar'
import Starred from '../Starred/Starred';
import TomatoTimer from '../TomatoTimer/TomatoTimer';
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

          {isLogged && <Route exact path="/tasks/myday" component={ToDoApp}/>}
          {isLogged && <Route exact path="/tasks/calendar" component={Calendar}/>}
          {isLogged && <Route exact path="/tasks/tomatotimer" component={TomatoTimer}/>}
          {isLogged && <Route exact path="/tasks/starred" component={Starred}/>}


          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    );
}

export default withHocs(UltimateToDo);
