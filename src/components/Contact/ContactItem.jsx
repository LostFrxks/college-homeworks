import "./ContactItem.css";

function ContactItem(props) {
    return (
        <div className="contact-item">
            <div className="contact-item__info">
                <div className="contact-item__name">Name: {props.contact.name}</div>
                <div className="contact-item__phone">Phone: +{props.contact.phone}</div>
                <div className="contact-item__email">email: {props.contact.email}</div>
            </div>
            <button className="contact-item__delete" onClick={() => props.onDelete(props.contact.id)}>Delete</button>
        </div>
    )
}
export default ContactItem;
  