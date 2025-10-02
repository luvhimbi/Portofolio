import React from "react";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <About />
      <Card title="More About Me">
        {/* Add more details or interests here if needed */}I love collaborating
        on open-source projects and continuously improving my skills.
      </Card>
      <Footer />
    </div>
  );
}

export default AboutPage;
