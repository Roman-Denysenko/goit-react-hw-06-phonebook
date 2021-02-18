import { createStore } from 'redux';
import contactsReducer from './reducer';

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
};

const preloadedState = {items:
    JSON.parse(
        localStorage.getItem('contacts'),
    )
};

const store = createStore(contactsReducer,preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;