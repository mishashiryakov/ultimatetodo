import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import withHocs from './LoginHoc';
import GetUser from './GetUser';
import RegisterModal from './RegisterModal'
import Register from './Register'

const Login = ({ classes, history }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [doQuery, setDoQuery] = useState(true);
  const [activeModal, setActiveModal]  = useState(true) 

  const inputHandler = (e) => {
    setDoQuery(true);
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  const loginHandler = () => {
      setDoQuery(false);
  }

    return (
        <div className={classes.container}>
                <GetUser 
                  doQuery={doQuery} 
                  username={username} 
                  password={password} 
                  history={history}
                  styles={classes.userError}
                  />                
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
                <RegisterModal 
                  activeModal={activeModal} 
                  setActiveModal={setActiveModal} 
                  classes={classes}
                >
                    <Register classes={classes} />
                </RegisterModal>
        </div>
    )
}

export default withHocs(Login);
