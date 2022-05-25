import React from "react";
import './contact.css';
const Contact = () => {
    return(
        <>
        <form className="formContact">
        <h1>Get In Touch</h1>
        <br/>
        <div className="contact">
            <div>
            <i class='fas fa-phone'> +250780577060</i>
            </div>
            <div>
            <i class='fas fa-envelope '> zatec@gmail.com</i>
            </div>
        </div>
        <br />
    
  <div className="mb-3">
    <label>Your name</label>
    <input type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label>Your email</label>
    <input type="email" className="form-control"  />
  </div>
  <div className="mb-3">
    <label>Message</label>
    <textarea type="text" className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Send</button>
</form>  
        </>
    );
}

export default Contact;