// src/components/sections/PricingTable/PricingTable.jsx
import React from "react";
import styles from "./PricingTable.module.css";

const PricingTable = ({ plans }) => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$9",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      name: "Pro",
      price: "$29",
      features: ["All Basic features", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <div className={styles.pricingTable}>
      {pricingPlans.map((plan) => (
        <div key={plan.id} className={styles.pricingCard}>
          <h3>{plan.name}</h3>
          <div className={styles.price}>
            {plan.price}
            <span>/month</span>
          </div>
          <ul className={styles.features}>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
