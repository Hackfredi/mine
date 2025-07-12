export const fetchPricingData = async () => {
  const response = await fetch("https://api.yoursite.com/pricing");
  return response.json();
};
