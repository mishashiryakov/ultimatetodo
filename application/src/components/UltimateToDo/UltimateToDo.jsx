import React from 'react';
import Login from '../Login/Login';

import withHocs from './UltimateToDoHoc';


const UltimateToDo = ({classes, theme}) => {

    return (
      <div className={classes.container}>
        <Login />
      </div>
    );
}

export default withHocs(UltimateToDo);