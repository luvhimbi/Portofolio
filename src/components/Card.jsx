import React from "react";
import styles from "./Card.module.css";

function Card({ title, image, children }) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Card;
