import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
