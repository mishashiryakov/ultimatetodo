import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { userLoginQuery } from './mutations';

import { styles } from './styles';

const withGraphQL = compose(
  graphql(userLoginQuery, {
    options: () => ({})
  })
)

export default compose(withStyles(styles), withGraphQL);