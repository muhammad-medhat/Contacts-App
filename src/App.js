import React, { Component } from 'react';

import './App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount = () => {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => {
          contacts
        })
      })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({

      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
      
    }))
  }
  // removeContact(c){
  //   this.setState( (currState) =>{
  //     state.contacts: currState.contacts.filter(con =>{
  //       return con.id!==c.id
  //     } )
  //   })
  // }
  render() {
      return (
        <div className="App">
          <ListContacts 
            cons={this.state.contacts} 
            onDelete={this.removeContact}
            />
        </div>
    );
  }

}

export default App;
