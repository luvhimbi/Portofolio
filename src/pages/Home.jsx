import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Card title="Welcome">
        This is my portfolio website. Explore my projects and learn more about
        me!
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
