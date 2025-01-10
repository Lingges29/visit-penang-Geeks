// src/components/Section.js

import React from "react";

const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div className="card-container">{children}</div>
    </section>
  );
};

export default Section;