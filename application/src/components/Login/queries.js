import { gql } from 'apollo-boost';


export const userLoginQuery = gql`
    query userLoginQuery($username: String, $password: String) {
        userLogin(username: $username, password: $password) {
            id
            username
            password
        }
    }
`;
