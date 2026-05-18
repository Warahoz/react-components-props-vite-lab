import React from "react";

/**
 * About Component
 * Renders contextual profile metadata inside a structural HTML5 aside block.
 * * Key Logic:
 * 1. Uses ES6 destructuring parameters with a default value fallback configuration.
 * If `image` evaluates to undefined, the runtime automatically loads the placeholder image string.
 * 2. Assigns a literal semantic string ("blog logo") to the `alt` property to enforce accessibility compliance.
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* Dynamically source image path via prop injection; protected by a default URL fallback */}
      <img src={image} alt="blog logo" />
      
      {/* Injects text safely directly into standard block text wrappers */}
      <p>{about}</p>
    </aside>
  );
}

export default About;