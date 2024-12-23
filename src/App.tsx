import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { CostComparison } from './components/CostComparison';
import { ThemeToggle } from './components/ThemeToggle';
import { calculateCosts } from './utils/calculations';
import { DEFAULT_FEES } from './constants/fees';
import type { CalculatorInputs } from './types/calculator';

export function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyTransactions: 100000,
    monthlyAverageValue: 5000,
    pgChargePercentage: DEFAULT_FEES.DEFAULT_PG_PERCENTAGE,
    bbpsFixedFee: DEFAULT_FEES.BBPS_FIXED_FEE,
  });

  const [bbpsFixedFee, setBbpsFixedFee] = useState(DEFAULT_FEES.BBPS_FIXED_FEE);
  const costs = calculateCosts({ ...inputs, bbpsFixedFee });

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="flex items-center mb-4">
            <Calculator className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Payment Gateway vs BBPS Cost Calculator
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Compare the costs between traditional Payment Gateways and BBPS. 
            See how BBPS can significantly reduce your transaction costs with its simple, 
            flat-fee structure instead of percentage-based charges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Monthly Transaction Details
            </h2>
            
            <InputField
              label="Monthly Transactions"
              value={inputs.monthlyTransactions}
              onChange={(value) => setInputs({ ...inputs, monthlyTransactions: value })}
            />
            
            <InputField
              label="Average Transaction Value"
              value={inputs.monthlyAverageValue}
              onChange={(value) => setInputs({ ...inputs, monthlyAverageValue: value })}
              suffix="₹"
            />
            
            <InputField
              label="Payment Gateway Charge"
              value={inputs.pgChargePercentage}
              onChange={(value) => setInputs({ ...inputs, pgChargePercentage: value })}
              suffix="%"
            />
            
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                BBPS Fixed Fee
              </h3>
              <InputField
                label=""
                value={bbpsFixedFee}
                onChange={(value) => setBbpsFixedFee(value)}
                suffix="₹"
              />
            </div>
          </div>

          {/* Results Section */}
          <CostComparison costs={costs} />
        </div>
      </div>
    </div>
  );
}