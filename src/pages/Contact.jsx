import React from "react";
import Contact from "../components/Contact";
import Card from "../components/Card";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div>
      <Contact />
      <Card title="Let's Connect">
        Feel free to reach out to me via email or social media!
      </Card>
      <Footer />
    </div>
  );
}

export default ContactPage;
