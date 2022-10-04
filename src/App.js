import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import contacts from "../db/db.json"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])

  console.log(contacts)
  
  //TODO: Load all contacts on useEffect when component first renders

  useEffect((contacts) => {
    return fetch('http://localhost:3333/list')
    .then(data => data.json())
  },[] );


  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <li>Contacts List</li>
          <li>Add New Contact</li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="ContactsList"/>
          <Route path="ContactsAdd"/>
          <Route/>
          {/* TODO: Add routes here  */}
        </Routes>
      </main>
    </>
  )
}
