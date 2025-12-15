import "./ContactForm.css";

function ContactForm(props) {
    return (
        <div className="contact-form">
            <div className="contact-form__field">
                <input className="contact-form__input" placeholder="Name" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
            </div>

            <div className="contact-form__field">
                <input className="contact-form__input" placeholder="Phone" value={props.phone} onChange={(e) => props.setPhone(e.target.value)}/>
            </div>
            <div className="contact-form__field">
                <input className="contact-form__input" placeholder="Email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
            </div>

            <button className="contact-form__btn" onClick={props.onAddContact}>Add</button>
        </div>
    )
}
export default ContactForm