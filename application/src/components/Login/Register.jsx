import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import CheckExistingUsers from './CheckExistingUsers';

const Register = ({classes, history}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors]  = useState({username: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const [doCheck, setDoCheck] = useState(true)

   
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const inputHandler = (e) => {

        switch(e.target.name) {
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                break;
            default:
        }
    }

    const registerValidation = () => {
        setErrors({username: '', password: ''});

        if (username.length <= 5) {
            setErrors(prevState =>  ({username: 'Should be more than 5 symbols', password: ''}));
        }
        
        if (password !== confirmPassword) {
            setErrors(prevState =>  ({username: prevState.username, password: 'Passwords should be qual'}))
        }

        if (password.length === 0) {
            setErrors(prevState => ({username: prevState.username, password: 'Shouldnt be empty'}))
        }

        if(password === confirmPassword && username.length > 5 && password.length > 0) {
            console.log('true')
            setDoCheck(false)
        }
    }

    return (
        <div className={classes.register__content}>
            <CheckExistingUsers
                doCheck={doCheck} 
                username={username}
                password={password} 
                history={history}
                classes={classes}
            />
            <TextField
                    className={classes.textField}
                    label={"Username"}
                    name="username"
                    value={username}
                    onChange={inputHandler}
                    autoComplete="false"
                    variant="outlined"
                    error={Boolean(errors && errors.username)}
                    helperText={(errors && errors.username)}
                     
                />
                
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={inputHandler}
                        error={Boolean(errors && errors.password)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <FormHelperText id="component-error-text">{errors && errors.password}</FormHelperText>
                </FormControl>
                
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        name="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={inputHandler}
                        error={Boolean(errors && errors.password)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={130}
                    />
                    <FormHelperText id="component-error-text">{errors && errors.password}</FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.logInButtons}
                    onClick={registerValidation}
                >
                  Register
                </Button>
        </div>
    )
}

export default Register;