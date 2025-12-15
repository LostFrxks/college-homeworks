import ContactItem from "./ContactItem";
import "./ContactList.css"

function ContactList(props) {
  return (
    <div className="contact-list">
      {props.contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={props.onDelete} />
      ))}
    </div>
  )
}

export default ContactList;
