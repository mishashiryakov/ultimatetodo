import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';


const Register = ({classes}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors]  = useState({username});

    const inputHandler = (e) => {
        e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
    }

    const validationUser = (event) => {
        const { target: { value } } = event;
        
        setErrors({ username: '' });
        setUsername(value);
        if(value.length <= 5) { 
            setErrors({username: 'Should be more than 5 symbols'})
        } 
        
        if(value.length == 0) {
            setErrors({ username: '' });
        }

    }

    return (
        <div>
            <TextField
                    className={classes.textField}
                    label={"Username"}
                    name="username"
                    value={username}
                    onChange={validationUser}
                    autoComplete="false"
                    variant="outlined"
                    error={Boolean(errors && errors.username)}
                    helperText={(errors && errors.username)}
                    autoComplete="off"
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
                <TextField
                    className={classes.textField}
                    label={"Confirm Password"}
                    type="password"
                    name="password"
                    defaultValue=''
                    onChange={inputHandler}
                    autoComplete="false"
                    variant="outlined"
                />
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

export default Register;