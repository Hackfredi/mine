import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      {items.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
