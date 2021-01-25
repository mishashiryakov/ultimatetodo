import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withHocs from './LoginHoc';

const Login = ({ classes }) => {


    return (
        <div className={classes.container}>
            <div>
                <TextField
                    className={classes.textField}
                    label={"Login"}
                />
                <TextField
                    className={classes.textField}
                    label={"Password"}
                    type="password"
                />
            </div>

            <div>
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
        </div>
    )
}

export default withHocs(Login);