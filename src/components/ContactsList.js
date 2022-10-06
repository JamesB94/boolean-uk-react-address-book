import { useState } from "react"

import { Link, useSearchParams } from "react-router-dom"



function ContactsList(props) {
  
  //"contacts" must be passed as prop to this component
  const { contacts } = props

  console.log('checking id in contact list number 1', contacts.firstName)

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          console.log('checking id in contact list number 2', contact.id)
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                { /** TODO: Make a Link here to view contact */}
                {/* <Link to='/'>
                View
                </Link> */}
                {/* <Link to={'ContactsView'} >View</Link> */}
                <Link to={`ContactsView ${contact.id}` } >View</Link>
                
              </p>
              

            </li>
          )
        })}
      </ul>
              {/* <Routes>
                <Route path="ContactsView" element={<ContactsView />}/>
              </Routes> */}
        

    </>
  )
}

export default ContactsList
