import React, { useState } from "react";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";

const sections = [
  { key: "about", label: "About Talifhani" },
  { key: "education", label: "Education" },
  { key: "experience", label: "Professional Experience" },
];

function AboutPage() {
  const [active, setActive] = useState("about");

  return (
    <div style={{ display: "flex", minHeight: "70vh" }}>
      <nav
        style={{
          minWidth: "180px",
          borderRight: "2px solid #000",
          padding: "2rem 1rem 2rem 0",
          background: "#fff",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {sections.map((section) => (
            <li key={section.key} style={{ marginBottom: "1.5rem" }}>
              <button
                style={{
                  background: active === section.key ? "#222" : "#fff",
                  color: active === section.key ? "#fff" : "#000",
                  border: "1px solid #000",
                  borderRadius: "6px",
                  padding: "0.5rem 1rem",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                onClick={() => setActive(section.key)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ flex: 1, padding: "2rem" }}>
        {active === "about" && (
          <>
            <About />
            <Card title="More About Me">
              I love collaborating on open-source projects and continuously
              improving my skills.
            </Card>
          </>
        )}
        {active === "education" && (
          <Card title="Education">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                position: "relative",
                paddingLeft: "24px",
              }}
            >
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#222",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  Azwifarwi Secondary School
                </div>
                <div style={{ color: "#555" }}>
                  Grade 12 Matric -Completed in 2019
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#222",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  Tshwane University of Technology
                </div>
                <div style={{ color: "#555" }}>
                  Diploma in Computer Science (2020 - 2024)
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#fff",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  Future Plans
                </div>
                <div style={{ color: "#555" }}>
                  Intend to pursue my Advanced Diploma soon!
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "-16px",
                  top: "24px",
                  width: "2px",
                  height: "calc(100% - 24px)",
                  background: "#000",
                  zIndex: 0,
                }}
              ></div>
            </div>
          </Card>
        )}
        {active === "experience" && (
          <Card title="Professional Experience">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                position: "relative",
                paddingLeft: "24px",
              }}
            >
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#222",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  full stack Java development Learner at Geeks4learning
                </div>
                <div style={{ color: "#555" }}>July 2023 - July 2024</div>
                <div style={{ marginTop: "0.5rem" }}>
                  Worked on web applications, backend APIs, and team
                  collaboration.
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#222",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  Java developer Intern at First National Bank
                </div>
                <div style={{ color: "#555" }}>August 2024 - July 2025</div>
                <div style={{ marginTop: "0.5rem" }}>
                  Built modern UIs, optimized performance, and improved user
                  experience.
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "#fff",
                    borderRadius: "50%",
                    border: "2px solid #000",
                  }}
                ></span>
                <div style={{ fontWeight: "bold", color: "#222" }}>
                  Your Company?
                </div>
                <div style={{ color: "#555" }}>Next Experience</div>
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontStyle: "italic",
                    color: "#222",
                  }}
                >
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>{" "}
                  Your company could be my next experience!
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "-16px",
                  top: "24px",
                  width: "2px",
                  height: "calc(100% - 24px)",
                  background: "#000",
                  zIndex: 0,
                }}
              ></div>
            </div>
          </Card>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
