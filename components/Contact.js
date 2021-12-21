import React from "react";
import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <div className={classes.ContactContainer}>
      <div>
        <h3>Contact us</h3>
        <input type="text" placeholder="Enter your email" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
