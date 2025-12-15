import './App.css';

import { useState, useEffect } from 'react';
import ContactForm from './components/Contact/ContactForm';
import ContactList from './components/Contact/ContactList';
import ContactItem from './components/Contact/ContactItem';

function App() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [contacts, setContacts] = useState([])

  function addContact(){
    const name1 = name.trim()
    const phone1 = phone.trim()
    const email1 = email.trim()
    if (name1 === "" || phone1 === "" || email1 === "") return;

    const contact = {
      id: Date.now(),
      name: name1,
      phone: phone1, 
      email: email1
    }

    setContacts([...contacts, contact])
    setName("")
    setPhone("")
    setEmail("")
  }

  function deleteContact(id){
      const updatedContacts = contacts.filter(contact => contact.id !== id)
      setContacts(updatedContacts);
  }


  useEffect(() => {
      console.log("Contacts len:", contacts.length);
  }, [contacts]);

  return (
    <div className="app">
      <div className='app__main'>
        <h1 className="app__title">Контакт-менеджер</h1>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          onAddContact={addContact}
        />

        {contacts.length === 0 ? (<p className="app__empty">Список контактов пуст</p>) : (<ContactList contacts={contacts} onDelete={deleteContact} />)}
      </div>
  </div>
  )
}

export default App;
