import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm a Developer</h1>
      <p className={styles.subtitle}>
        Welcome to my portfolio! I build modern web applications and love
        solving problems with code.
      </p>
    </section>
  );
}

export default Hero;
