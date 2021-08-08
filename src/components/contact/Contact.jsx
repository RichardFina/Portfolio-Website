import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm('service_qkwxsd7', 'template_bj2gydj', e.target, 'user_GtNKtovYWdjYTdu8JrWzT')
            .then((result) => {
                console.log(result.text);
      }, (error) => {
                console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}
