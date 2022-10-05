import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {

  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [street, setStreetName] = useState([])
  const [city, setCityName] = useState([])

  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props

  
 

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const handleSubmit =(e) => {
    e.preventDefault()
    const contact ={firstName,lastName,street,city }

    setFirstName('')
    setLastName ('')
    setStreetName('')
    setCityName('')


    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(contact)
    })
    // .then(response => response.json())
    // .then(data => setContacts(data));


    //  console.log(contacts)


  }

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" value={street} onChange={(e) => setStreetName(e.target.value)}  required/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" value={city} onChange={(e) => setCityName(e.target.value)} required/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{street}</p>
      <p>{city}</p>
    </form>

    
  )
}

export default ContactsAdd
