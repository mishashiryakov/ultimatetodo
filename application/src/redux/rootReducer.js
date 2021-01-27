const initialState = {
    usernameStore: 'test',
    passwordStore: 'test',
    isLogged: false
  }
  
  export default function rootReducer(state = initialState, action) {
    
    switch(action.type) {
      case 'authUser':
        return {
          usernameStore: action.value.username,
          passwordStore: action.value.password,
          isLogged: true
        };
      default:      
    }
    
    return state
  }