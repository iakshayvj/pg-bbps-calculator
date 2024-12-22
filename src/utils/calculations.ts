export const calculateCosts = (inputs: {
  monthlyTransactions: number;
  monthlyAverageValue: number;
  pgChargePercentage: number;
  bbpsFixedFee: number;
}) => {
  const monthlyValue = inputs.monthlyTransactions * inputs.monthlyAverageValue;
  
  // PG Cost calculation (percentage based only)
  const pgCost = (monthlyValue * inputs.pgChargePercentage) / 100;
  
  // BBPS Cost calculation (flat fee per transaction)
  const bbpsCost = inputs.monthlyTransactions * inputs.bbpsFixedFee;
  
  // Calculate savings
  const savings = pgCost - bbpsCost;
  const savingsPercentage = (savings / pgCost) * 100;
  
  return {
    pgCost,
    bbpsCost,
    savings,
    savingsPercentage,
    monthlyValue,
  };
};