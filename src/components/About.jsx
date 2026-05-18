import React from "react";

/**
 * About Component
 * Renders an aside sidebar with a profile image and blog details.
 * Connected to: App (Parent)
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;