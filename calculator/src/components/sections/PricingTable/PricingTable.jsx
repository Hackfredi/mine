import React, { useEffect, useState } from "react";
import { fetchPricingData } from "../../../services/api";
import "./PricingTable.css"; // Optional styling

const PricingTable = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPricingData();
        setPlans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading plans...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pricing-table">
      {plans.map((plan) => (
        <div key={plan.id} className="pricing-card">
          <h3>{plan.name}</h3>
          <p>${plan.price}/month</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Select Plan</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
