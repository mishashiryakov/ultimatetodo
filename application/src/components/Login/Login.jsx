import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withHocs from './LoginHoc';
import { connect } from 'react-redux';

const Login = ({ classes, auth, history, data = {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin = [] } = data;

  const inputHandler = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  const loginHandler = () => {
    data.fetchMore({
      variables: { username, password },
      updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
    })
    
  }

  useEffect(() => {
    if (userLogin.length) {
      auth({username, password});
      history.push({
        pathname: '/'
      })
    }
  }, [username, password, userLogin]);

    return (
        <div className={classes.container}>
                <TextField
                    className={classes.textField}
                    label={"Username"}
                    onChange={inputHandler}
                    name="username"
                    defaultValue=''
                    autoComplete="false"
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    label={"Password"}
                    type="password"
                    onChange={inputHandler}
                    name="password"
                    defaultValue=''
                    autoComplete="false"
                    variant="outlined"
                />
                
                <Button 
                  onClick={loginHandler}
                  variant="contained"
                  color="primary"
                  className={classes.logInButtons}
                >
                  
                  Log in
                </Button>
                
                <Button
                 variant="contained"
                 color="secondary"
                 className={classes.logInButtons}
                >
                  Register
                </Button>
                
          {/* {
            isLogged &&
            <div style={{width: 500, height: 500, backgroundColor: 'yellow'}}>
              <h1>LOGGED IN</h1>
              <p>ID {userLogin[0].id}</p>
              <p>Username {userLogin[0].username}</p>
              <p>Password {userLogin[0].password}</p>
            </div>
          } */}
        </div>
    )
}

  
function mapDispatchToProps(dispatch) {
    return {
      auth: (obj) => dispatch({type: 'authUser', value: obj}),
    }
}

export default connect(null, mapDispatchToProps)(withHocs(Login));