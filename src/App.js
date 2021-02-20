import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import s from './App.module.css';

import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import Filter from './components/filter';


 const App=({items})=>{
    
    return (
      <div className={s.container}>
        <CSSTransition in={true} appear={true}classNames={s} timeout={500} unmountOnExit>
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

       <CSSTransition in={items.length>0} timeout={250} classNames={s} unmountOnExit>
          <div>
            <h2>Contacts</h2>
            <Filter />
        <ContactList
            />
            </div>
          </CSSTransition>
      </div>
    );
  }

App.propTypes = {
  items: PropTypes.array,
};


const mapStateToProps = state => ({
  items: state.contacts.items,
});

export default connect(mapStateToProps)(App);

