import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

// import { graphql } from 'react-apollo';
// import { userLoginQuery } from './queries';

import { styles } from './styles';

// const withGraphQL = compose(
//   graphql(userLoginQuery, {
//     options: ({ username = '', password = '' }) => ({
//       variables: { username, password }
//     })
//   })
// )

export default compose(withStyles(styles));
