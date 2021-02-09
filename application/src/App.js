import React, { Component } from 'react';
import UltimateToDo from './components/UltimateToDo/UltimateToDo';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import { ApolloClient, InMemoryCache }  from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
  cache: new InMemoryCache()
});
class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
         <MuiThemeProvider theme={theme}>
            <UltimateToDo />
         </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;

