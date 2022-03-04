import React, { Component } from 'react';
class ListContacts extends Component {
    state = {  } 
    render() {             
        console.log('cons', this.props)

        return (
            <ul className='contacts-list'>
                {this.props.cons.map(x=>
                    <li key={x.id}>{x.name}</li>
                )}
                
            </ul>
        );
    }
}
 
export default ListContacts;