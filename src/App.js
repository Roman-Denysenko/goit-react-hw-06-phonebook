import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import actions from './redux/actions';
import s from './App.module.css';

import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import Filter from './components/filter';

class App extends Component {

  componentDidUpdate(prevProps) {
    const nextContacts = this.props.contacts.items;
    const prevContacts = prevProps.contacts.items;

    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const  filter  = this.props.filter;
    const  contacts = this.props.contacts.items;
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter),
    );
    

    return (
      <div className={s.container}>
        <CSSTransition in={true} appear={true}classNames={s} timeout={500} unmountOnExit>
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm
          onSubmitForm={(data)=>this.props.onAdd(data)}
        />

       <CSSTransition in={contacts.length>0} timeout={250} classNames={s} unmountOnExit>
          <div>
            <h2>Contacts</h2>
            <Filter onFilter={this.handleFindContactsFromInput} />
        <ContactList
          items={visibleContacts}
          onDeleteContact={this.props.onDelete}
            />
            </div>
          </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state,
  filter:state.filter,
});

 const mapDispatchToProps = dispatch => ({
   onAdd: item => dispatch(actions.addContact(item)),
   onDelete: (e) => dispatch(actions.deleteContact(e.target.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

