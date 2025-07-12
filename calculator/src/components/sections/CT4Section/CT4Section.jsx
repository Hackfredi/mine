import React from "react";

const CT4Section = ({ title, buttonText }) => {
  return (
    <section className="ct4-section">
      <h2>{title}</h2>
      <button className="ct4-button">{buttonText}</button>
    </section>
  );
};

export default CT4Section;
