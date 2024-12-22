import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CostBreakdown } from '../types/calculator';
import { TrendingUp } from 'lucide-react';

interface CostComparisonProps {
  costs: CostBreakdown;
}

export const CostComparison: React.FC<CostComparisonProps> = ({ costs }) => {
  const data = [
    {
      name: 'Monthly Costs',
      'Payment Gateway': costs.pgCost,
      'BBPS': costs.bbpsCost,
    },
  ];

  const formatCurrency = (value: number) => 
    `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-card">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <TrendingUp className="w-5 h-5 mr-2 text-primary-500" />
        Cost Analysis
      </h2>
      
      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#6B7280"
              className="dark:text-gray-300"
            />
            <YAxis 
              tickFormatter={formatCurrency} 
              stroke="#6B7280"
              className="dark:text-gray-300"
            />
            <Tooltip 
              formatter={formatCurrency}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg)',
                border: '1px solid var(--tooltip-border)',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                color: 'var(--tooltip-text)',
              }}
            />
            <Legend />
            <Bar dataKey="Payment Gateway" fill="#6B7280" />
            <Bar dataKey="BBPS" fill="#1F56C3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <h3 className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
            Monthly Savings
          </h3>
          <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {formatCurrency(costs.savings)}
          </p>
        </div>
        <div className="p-6 bg-success-50 dark:bg-success-900/20 rounded-lg">
          <h3 className="text-sm font-medium text-success-600 dark:text-success-300 mb-2">
            Savings Percentage
          </h3>
          <p className="text-2xl font-bold text-success-500 dark:text-success-400">
            {costs.savingsPercentage.toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Monthly Transaction Value: {' '}
          <span className="font-semibold">{formatCurrency(costs.monthlyValue)}</span>
        </p>
      </div>
    </div>
  );
};