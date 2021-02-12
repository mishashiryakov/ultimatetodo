import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { authUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const GET_USER = gql`
    query CheckExistingUsers($username: String) {
        user(username: $username) {
          id
          username
          password
        }
    }
`;

const REGISTER_USER = gql`
    mutation addUserLoginMutation($username: String, $password: String) {
        addUser(username: $username, password: $password) {
            username
            password
        }
    }
`;

const CheckExistingUsers = ({username, password, doCheck, history, classes}) => {
    
    const [addUser] = useMutation(REGISTER_USER);
    const [userExists, setUserExists] = useState(false)


    const { loading, error } = useQuery(GET_USER, {
        skip: doCheck,
        variables: { username },
        onCompleted: (data) => onComplete( data),
        onError: () => console.log('err')
    });
    
    const dispatch = useDispatch();

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const onComplete = (data) => {
        if(data.user.length > 0) {
            setUserExists(true)
        } else {
            console.log('else')
            addUser({ variables: {username, password} });
            dispatch(authUser({username, password, isLogged: true}));
            history.push({
                    pathname: '/'
            })
        }
    }

    return (
        <div className={classes.userError}>
        {userExists && <div >Such username exists. Log in or choose another one. Faggot!</div>}
        </div>
    )
}

export default CheckExistingUsers;