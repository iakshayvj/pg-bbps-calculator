import React, { useState } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';
import { InputField } from './components/InputField';
import { CostComparison } from './components/CostComparison';
import { ThemeToggle } from './components/ThemeToggle';
import { calculateCosts } from './utils/calculations';
import type { CalculatorInputs } from './types/calculator';

export default function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyTransactions: 1000,
    monthlyAverageValue: 1000,
    pgChargePercentage: 2.5,
    bbpsFixedFee: 10,
  });

  const costs = calculateCosts(inputs);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="flex items-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              PG vs BBPS Cost Calculator
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Compare the costs between traditional Payment Gateways and BBPS. 
            See how BBPS can significantly reduce your transaction costs with its simple, 
            flat-fee structure instead of percentage-based charges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
              <IndianRupee className="w-5 h-5 mr-2" />
              Monthly Transaction Details
            </h2>
            
            <InputField
              label="Monthly Transactions"
              value={inputs.monthlyTransactions}
              onChange={(value) => setInputs({ ...inputs, monthlyTransactions: value })}
              tooltip="Number of transactions per month"
            />
            
            <InputField
              label="Average Transaction Value"
              value={inputs.monthlyAverageValue}
              onChange={(value) => setInputs({ ...inputs, monthlyAverageValue: value })}
              suffix="₹"
              tooltip="Average amount per transaction"
            />
            
            <InputField
              label="PG Charge Percentage"
              value={inputs.pgChargePercentage}
              onChange={(value) => setInputs({ ...inputs, pgChargePercentage: value })}
              suffix="%"
              tooltip="Payment Gateway percentage charge (typically 2-3%)"
            />
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                BBPS Fixed Fee
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Fixed ₹{inputs.bbpsFixedFee} per transaction
              </p>
            </div>
          </div>

          {/* Results Section */}
          <CostComparison costs={costs} />
        </div>
      </div>
    </div>
  );
}