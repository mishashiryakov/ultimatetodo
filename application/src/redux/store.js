import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';


const initialStore = JSON.parse(localStorage.getItem('auth'))

let store;

if (initialStore) store = createStore(rootReducer, initialStore, composeWithDevTools());
if (!initialStore) store = createStore(rootReducer, composeWithDevTools());


export default store;
