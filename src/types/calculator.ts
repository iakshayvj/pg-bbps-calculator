export interface CalculatorInputs {
  monthlyTransactions: number;
  monthlyAverageValue: number;
  pgChargePercentage: number;
  bbpsFixedFee: number;
}

export interface CostBreakdown {
  pgCost: number;
  bbpsCost: number;
  savings: number;
  savingsPercentage: number;
  monthlyValue: number;
}