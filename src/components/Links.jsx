import React from "react";

/**
 * Links Component
 * Generates an accessible, isolated navigation sub-menu or external social utility index.
 * * Key Logic:
 * 1. Receives an optional array mapping item configurations to maintain reusability.
 * 2. Employs the `target="_blank"` specification safely alongside `rel="noreferrer"` 
 * to prevent reverse tab-nabbing security risks during browser executions.
 * 3. Enforces array tracking rules by provisioning unique item identifiers across index transformations.
 */
function Links({ channels = [] }) {
  return (
    <nav className="blog-links">
      <ul>
        {channels.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.platformName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Links;