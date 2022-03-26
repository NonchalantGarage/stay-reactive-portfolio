import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact-me">
       
        <h4>Contact Me</h4>

        <form>
          <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input className="form-control" type="text" id="contact-name" placeholder="Your Name" />

          <label htmlFor="contact-email">Your Email</label>
          <input  className="form-control" type="text" id="email-address" placeholder="Your Email" />

          <label htmlFor="contact-message">Message</label>
          <textarea  className="form-control" id="contact-message" placeholder="Message"></textarea>

          <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Contact;
