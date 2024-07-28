import React from 'react'
import ContactCards from '../ContactCards/ContactCards'

const ContactList = ({dataMook}) => {

    return (
        <>
            {
                dataMook.map((contacts) => {
                    return (
                        <ContactCards contactData={contacts} key={contacts.id} />
                    )
                })
            }
        </>
    )
}

export default ContactList
