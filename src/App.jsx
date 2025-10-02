import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import ContactPage from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {/* Remove <Footer /> here to avoid repetition */}
    </Router>
  );
}

export default App;
