import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withHocs from './LoginHoc';

const Login = ({ classes, data = {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
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
      console.log(userLogin)
      setLogged(true);
    }
  }, [username, password, userLogin]);


    return (
        <div className={classes.container}>
            <div>
                <TextField
                    className={classes.textField}
                    label={"Login"}
                    onChange={inputHandler}
                    name="username"
                    defaultValue=''
                    autoComplete="false"
                />
                <TextField
                    className={classes.textField}
                    label={"Password"}
                    type="password"
                    onChange={inputHandler}
                    name="password"
                    defaultValue=''
                    autoComplete="false"
                />
            </div>

            <div>
                <Button onClick={loginHandler}>Login</Button>
                <Button>Register</Button>
            </div>

          {
            logged &&
            <div style={{width: 500, height: 500, backgroundColor: 'yellow'}}>
              <h1>LOGGED IN</h1>
              <p>ID {userLogin[0].id}</p>
              <p>Username {userLogin[0].username}</p>
              <p>Password {userLogin[0].password}</p>
            </div>
          }
        </div>
    )
}

export default withHocs(Login);