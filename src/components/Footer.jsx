import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #eee",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      © {new Date().getFullYear()} Talifhani Luvhimbi
    </footer>
  );
}

export default Footer;
