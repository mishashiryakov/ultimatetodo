import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withHocs from './LoginHoc';
import { authUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Login = ({ classes, history, data = {} }) => {
  const dispatch = useDispatch();
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
    if (userLogin.length && username) {
      dispatch(authUser({username, password, isLogged: true}));
      history.push({
        pathname: '/'
      })
    }
  }, [userLogin]);

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

        </div>
    )
}

export default withHocs(Login);
