import React from "react";
import './contact.css';
const Contact = () => {
    return(
        <>
        <form className="formContact">
        <h1>Get In Touch</h1>
        <div className="contact">
            <div>
            <h6><strong>Tel:</strong> +250780577060</h6>
            </div>
            <div>
            <h6><strong>Email:</strong> zatec@gmail.com</h6>
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