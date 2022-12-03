import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear} Birk Development</p>
    </footer>
  );
}

export default Footer;