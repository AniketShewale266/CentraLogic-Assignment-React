import React from "react";

const Contact = () => (
  <section id="contact" className="contact-container">
    <h2>CONTACT ME</h2>
    <div className="main-div">
    <div className="form-div">
      <form
        className="contact-form"
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </div>
    </div>
   
  </section>
);

export default Contact;
