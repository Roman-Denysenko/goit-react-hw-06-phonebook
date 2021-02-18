import typesActions from './typesActions';

const addContact = item => ({
    type: typesActions.ADD,
    payload: item,
});

const deleteContact = id => ({
    type: typesActions.DELETE,
    payload: id,
});

const filter = value => ({
    type: typesActions.FILTER,
    payload: value,
});

export default { addContact, deleteContact, filter };