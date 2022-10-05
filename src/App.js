import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])


  
  //TODO: Load all contacts on useEffect when component first renders

  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))
    }, []);


  console.log("this is the names ", contacts)


  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */} 
          <li>
            <Link to="/">DashBoard</Link>
          </li>
          <li>
          <Link to="ContactsList">Contacts List</Link> 
          </li>  
           <Link to='ContactsAdd' >
           <li>Add New Contact</li>
           </Link>     
          
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="ContactsList" element={<ContactsList contacts={contacts}/>}/>
          <Route path="ContactsAdd" element={<ContactsAdd contacts={contacts} setContacts={setContacts} />}/>
          {/* TODO: Add routes here  */}
        </Routes>
      </main>
    </>
  )
}
