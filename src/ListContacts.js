import React, {Component} from 'react';
import PropTypes from 'proptypes';


class ListContacts extends Component {

    static propTypes = {
        cons: PropTypes.array.isRequired, 
        onDelete: PropTypes.func.isRequired
    }
    state = { 
        query: ''
    } 
    updateQuery(q){
        this.setState(
            ()=>({
                query: q.trim()
            })
        )
    }

    render() {    
        const {query} = this.state
        const { cons, onDelete} = this.props
        const show = query === '' ? cons: cons.filter(c=> c.name.toLowerCase().includes(query))
        
        console.log('cons', this.props)    
        return ( 
            <>
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts' 
                        type='text'
                        placeholder='Search a contact'
                        value={this.state.query}
                        onChange={(e)=>{this.updateQuery(e.target.value)}}
                        
                        />
                </div>
{
    JSON.stringify(this.state)
}
            </div>
                    <ul className='contact-list'>
                        {show.map(x=>
                        <li key={x.id} className='contact-list-item'>     
                            <div 
                                className='contact-avatar'
                                style={{
                                    backgroundImage:`url(${x.avatarURL})`
                                }}
                                >                            
                            </div>

                            <div className='contact-details'>
                                <p>{x.name}</p>
                                <p>{x.handle}</p>
                            </div>
                            <button 
                                className='contact-remove'
                                onClick={()=>onDelete(x)}>
                                remove
                            </button>
                        </li>
                        )}
                    </ul>            
            </>

        );
    }
}
export default ListContacts;








// class ListContacts extends Component {
//     state = {  } 
//     render() {             
//         console.log('cons', this.props)

//         return (
//             <ul className='contact-list'>
//                 {this.props.cons.map(x=>
//                     <li key={x.id} className='contact-list-item'>     
//                         <div 
//                             className='contact-avatar'
//                             style={{
//                                 backgroundImage:`url(${x.avatarURL})`
//                             }}
//                             >                            
//                         </div>

//                         <div className='contact-details'>
//                             <p>{x.name}</p>
//                             <p>{x.handle}</p>
//                         </div>
//                         <button className='contact-remove'>
//                             remove
//                         </button>
//                     </li>
//                 )}
                
//             </ul>
//         );
//     }
// }
 
// export default ListContacts;