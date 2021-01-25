import React from 'react';
// import { makeStyles } from '@material-ui/core/styles'
import Login from '../Login/Login';


// const useStyles = makeStyles((theme) => ({
//   container: {
//     // display: 'flex'
//     backgroundColor: 'red'
//   }
// }))

const UltimateToDo = () => {

  const classes = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

    return (
      <div style={classes.container}>
        <Login />
      </div>
    );
  
}

export default UltimateToDo;
