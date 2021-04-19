import React, { useState, useEffect } from 'react';
import {TextField, Button} from '@material-ui/core';
import withHocs from './LoginHoc';
// import GetUser from './GetUser';
import ModalWindow from '../Modal/ModalWindow';
import Register from './Register';
import useUser from '../../hooks/useUser';
import { authUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Login = ({ classes, history }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [doQuery, setDoQuery] = useState(true);
  const [activeModal, setActiveModal]  = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  
  useEffect(() => {
    console.log('RENDER')
  })

  const inputHandler = (e) => {
    setDoQuery(true);
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  const dispatch = useDispatch();

  const onComplete = (data) => {
    console.log(data)
    if(data.userLogin.length > 0) {
        dispatch(authUser({username, password, isLogged: true}));
        history.push({
                pathname: '/tasks/myday'
        })
    } else {
        console.log('else')
        setUserNotFound(true)
    }
  } 

  const { loading, data, error } = useUser(username, password, doQuery, onComplete);

  console.log('Data', data);

  if(loading) return null;

  if(error) return `Error ${error}`;

  const loginHandler = () => {
      setDoQuery(false);
  }

    return (
        <div className={classes.container}>
{/* 
                <GetUser 
                  doQuery={doQuery} 
                  username={username} 
                  password={password} 
                  history={history}
                  styles={classes.userError}
                  />       */}

                <TextField
                    className={classes.textField}
                    label={"Username"}
                    name="username"
                    defaultValue=''
                    onChange={inputHandler}
                    autoComplete="false"
                    variant="outlined"
                />

                <TextField
                    className={classes.textField}
                    label={"Password"}
                    type="password"
                    name="password"
                    defaultValue=''
                    onChange={inputHandler}
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
                 onClick={() => setActiveModal(true)}
                >
                  Register
                </Button>

                <ModalWindow 
                  activeModal={activeModal} 
                  setActiveModal={setActiveModal}
                >
                    <Register classes={classes} history={history} />
                </ModalWindow>
        </div>
    )
}

export default withHocs(Login);
