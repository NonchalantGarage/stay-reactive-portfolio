import React from "react";

function Footer() {
  return (
    <div>
      <div className="contact-me">
       
        <h4>Contact Me</h4>

        <form>
          <div className="form-group">
          <label for="contact-name">Your Name</label>
          <input className="form-control" type="text" id="contact-name" placeholder="Your Name" />

          <label for="contact-email">Your Email</label>
          <input  className="form-control" type="text" id="email-address" placeholder="Your Email" />

          <label for="contact-message">Message</label>
          <textarea  className="form-control" id="contact-message" placeholder="Message"></textarea>

          <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
