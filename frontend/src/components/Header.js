import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; // Corrected import

const Header = (pros) => {
  return (
    <Navbar bg="dark" variant="dark"> {/* Adjusted variant to 'dark' to match the 'bg' */}
      <Navbar.Brand href="/">{pros.title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
