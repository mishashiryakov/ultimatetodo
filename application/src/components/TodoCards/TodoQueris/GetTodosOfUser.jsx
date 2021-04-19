import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { authUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const GET_TODOS = gql`
    query GetTodosOfUser($username: String) {
        user(username: $username) {
          id
          username
          password
          todos {
            id
            type
            year
            month
            day
            title
            backgroundColor
            color
          }
        }
    }
`;


const GetTodosOfUser = ({username, doCheck, classes}) => {
    
    const [userNotFound, setUserNotFound] = useState(false)

    const { loading, error } = useQuery(GET_TODOS, {
        variables: { username },
        skip: doQuery,
        onCompleted: (data) => onComplete(data),
        onError: () => console.log('err')
    });
    
    const dispatch = useDispatch();

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const onComplete = (data) => {
        console.log(data)
        if(data.userLogin.length > 0) {
            dispatch(authUser({username, password, isLogged: true}));
        } else {
            console.log('else')
            setUserNotFound(true)
        }
    }

    return (
        <div>
        
        </div>
    )
}

export default GetTodosOfUser;