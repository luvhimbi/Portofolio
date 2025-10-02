import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Skills & Tools</h2>
      <div className={styles.skillsCategory}>
        <h3>Languages & Frameworks</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skill}>
            <span>☕</span> Java
          </div>
          <div className={styles.skill}>
            <span>🌱</span> Spring Boot
          </div>
          <div className={styles.skill}>
            <span>🦄</span> Laravel
          </div>
          <div className={styles.skill}>
            <span>🐘</span> PHP
          </div>
          <div className={styles.skill}>
            <span>🌐</span> HTML
          </div>
          <div className={styles.skill}>
            <span>🎨</span> CSS
          </div>
          <div className={styles.skill}>
            <span>🟨</span> JavaScript
          </div>
          <div className={styles.skill}>
            <span>⚛️</span> React
          </div>
          <div className={styles.skill}>
            <span>🅰️</span> Angular
          </div>
          <div className={styles.skill}>
            <span>🅱️</span> Bootstrap
          </div>
        </div>
      </div>
      <div className={styles.skillsCategory}>
        <h3>Databases</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skill}>
            <span>🐘</span> Postgres
          </div>
          <div className={styles.skill}>
            <span>🛢️</span> MySQL
          </div>
          <div className={styles.skill}>
            <span>🛢️</span> Microsoft SQL Server
          </div>
        </div>
      </div>
      <div className={styles.skillsCategory}>
        <h3>Tools</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skill}>
            <span>🖥️</span> VSCode
          </div>
          <div className={styles.skill}>
            <span>💡</span> IntelliJ
          </div>
          <div className={styles.skill}>
            <span>🗄️</span> pgAdmin
          </div>
          <div className={styles.skill}>
            <span>📊</span> AppDynamics
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
