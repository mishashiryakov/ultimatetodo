import React, { useState } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import { authUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';


const GET_USER = gql`
    query userLoginQuery($username: String, $password: String) {
        userLogin(username: $username, password: $password) {
            id
            username
            password
        }
    }
`;

const GetUser = ({username, password, doQuery, history, styles }) => {
    
    // const client = useApolloClient();
    const [userNotFound, setUserNotFound] = useState(false)

    const { loading, error } = useQuery(GET_USER, {
        variables: { username, password },
        skip: doQuery,
        onCompleted: (data) => onComplete(data),
        onError: () => console.log('err')
    });
    
    const dispatch = useDispatch();

    if (loading) return null;
    if (error) return `Error! ${error}`;


    // const { userLogin } = client.readQuery({
    //     query: gql`
    //     query userLoginQuery($username: String, $password: String) {
    //         userLogin(username: $username, password: $password) {
    //             id
    //             username
    //             password
    //         }
    //     }
    //     `,
    //     variables: { username, password },
    // });

    // console.log(userLogin)

    const onComplete = (data) => {
        if(data.userLogin.length > 0) {
            dispatch(authUser({username, password, isLogged: true}));

            history.push({
                    pathname: '/'
            })
        } else {
            console.log('else')
            setUserNotFound(true)
        }
    }

    return (
        <div className={styles}>
        {userNotFound && <div >User not found. Check your username or password</div>}
        </div>
        
    )
}

export default GetUser;