import { createAction } from '@reduxjs/toolkit';
import typesActions from './typesActions';

const addContact = createAction(typesActions.ADD);
const deleteContact = createAction(typesActions.DELETE);
const filter = createAction(typesActions.FILTER);


export default { addContact, deleteContact, filter };