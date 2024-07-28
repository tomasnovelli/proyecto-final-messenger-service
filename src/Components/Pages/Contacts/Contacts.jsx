import React from 'react'
import { DATA_CONTACTOS } from '../../dataMook'
import ContactList from '../../ContactList/ContactList'
import './contacts.css'


const Contacts = () => {

    return (
        <div className='contacts'>
            <ContactList dataMook={DATA_CONTACTOS}/>
        </div>
    )
}

export default Contacts
