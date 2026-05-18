import React from "react";

/**
 * Header Component
 * Displays the main title of the blog.
 * Connected to: App (Parent)
 */
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;