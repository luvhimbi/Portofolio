import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Talifhani Luvhimbi</div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
      </button>
      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link to="/" className={styles.link} onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          to="/projects"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
