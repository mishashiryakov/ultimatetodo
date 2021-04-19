import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
    query userLoginQuery($username: String, $password: String) {
        userLogin(username: $username, password: $password) {
            id
            username
            password
        }
    }
`;

const useUser = (username, password, doQuery, onComplete) => {
  return useQuery(GET_USER, {
    variables: {username, password},
    skip: doQuery,
    onCompleted: (data) => onComplete(data),
    onError: () => console.log('err')
  })
}

export default useUser;