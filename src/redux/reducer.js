import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import typesActions from './typesActions';

const reducerContactsItems = createReducer([], {
    [typesActions.ADD]: (state, { payload }) => ([...state, payload]),
    [typesActions.DELETE]: (state, { payload }) => (state.filter(({id}) => id !== payload))   
})

const reducerFilter = createReducer('', {
    [typesActions.FILTER]: (_, { payload }) =>payload,   
})

export default combineReducers({
  items: reducerContactsItems,
  filter: reducerFilter,
});