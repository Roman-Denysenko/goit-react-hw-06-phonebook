import { combineReducers } from 'redux';
import typesActions from './typesActions';

const reducerFilter = (state = '', { type, payload }) => {
    switch (type) {
        case typesActions.FILTER:
            return payload;
        
        default:
            return state;
    }
};

const reducerContactsItems = (state = [], {type, payload}) => {
    switch (type) {
        case typesActions.ADD:
            return [...state,payload];
            
        case typesActions.DELETE:
            return state.filter(({id}) => id !== payload);    
    
        default:
          return state;
    }
};

export default combineReducers({
  items: reducerContactsItems,
  filter: reducerFilter,
});