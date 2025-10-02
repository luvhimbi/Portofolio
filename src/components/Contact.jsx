import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
