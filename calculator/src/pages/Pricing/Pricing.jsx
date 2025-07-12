import React from "react";
import PricingTable from "../../components/sections/PricingTable";
import FAQ from "../../components/sections/FAQ";
import CT4Section from "../../components/sections/CT4Section";

const Pricing = () => {
  const faqItems = [
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade at any time.",
    },
    {
      question: "Do you offer annual discounts?",
      answer: "We offer 15% discount for annual subscriptions.",
    },
  ];

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <section className="pricing-header">
        <h1>Choose Your Perfect Plan</h1>
        <p>Flexible pricing designed for teams of all sizes</p>
      </section>

      {/* Pricing Table Section */}
      <section className="pricing-section">
        <PricingTable />
      </section>

      {/* Feature Comparison Section */}
      <section className="feature-comparison">
        <h2>Plan Comparison</h2>
        {/* Comparison content goes here */}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <FAQ items={faqItems} />
      </section>

      {/* CT4 Call-to-Action Section */}
      <CT4Section title="Ready to get started?" buttonText="Choose Your Plan" />
    </div>
  );
};

export default Pricing;
