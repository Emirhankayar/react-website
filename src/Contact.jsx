import './Contact.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

// npm i @emailjs/browser

export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vclqgca",
        "template_1no7sem",
        form.current,
        "4nWsEhKsS8RPDKVQe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <body className="contactall">
        <Navbar/>
        <h2 className="contacttitle">Contact</h2>
        <div className='crazy'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Company</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"  className='msg'/>
                <input type="submit" value="Send" />
            </form>
        </div>
        <Footer/>

    </body>
  );
};
