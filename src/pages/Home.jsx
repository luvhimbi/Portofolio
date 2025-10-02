import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Card title="Welcome">
        <div>
          <p>
            Are you ready to explore my world? <br />
            <span role="img" aria-label="eyes">
              👀
            </span>{" "}
            Do you like code more than coffee? <br />
            <span role="img" aria-label="coffee">
              ☕
            </span>{" "}
            Can you handle epic projects and dad jokes? <br />
            <span role="img" aria-label="laugh">
              😂
            </span>
          </p>
          <a
            href="/projects"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1.5rem",
              background: "#222",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              border: "1px solid #000",
              fontWeight: "600",
            }}
          >
            Let's Go! 🚀
          </a>
        </div>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
