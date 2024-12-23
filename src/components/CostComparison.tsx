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
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <TrendingUp className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
        Cost Analysis
      </h2>
      
      <div className="h-72 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis 
              dataKey="name" 
              stroke="currentColor"
              className="text-gray-600 dark:text-gray-400"
              fontSize={12}
              tickSize={0}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              tickFormatter={formatCurrency} 
              stroke="currentColor"
              className="text-gray-600 dark:text-gray-400"
              fontSize={12}
              tickSize={0}
              axisLine={false}
              width={100}
            />
            <Tooltip 
              formatter={formatCurrency}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg)',
                border: '1px solid var(--tooltip-border)',
                borderRadius: '0.5rem',
                color: 'var(--tooltip-text)',
                padding: '8px 12px',
              }}
              labelStyle={{ marginBottom: '4px' }}
            />
            <Legend 
              wrapperStyle={{ 
                fontSize: '12px',
                paddingTop: '20px' 
              }}
              iconSize={12}
              iconType="circle"
            />
            <Bar 
              dataKey="Payment Gateway" 
              fill="#6366f1" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="BBPS" 
              fill="#818cf8" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Monthly Savings
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white truncate" title={formatCurrency(costs.savings)}>
            {formatCurrency(costs.savings)}
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Savings Percentage
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {costs.savingsPercentage.toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Monthly Transaction Value:{' '}
          <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">
            {formatCurrency(costs.monthlyValue)}
          </span>
        </p>
      </div>
    </div>
  );
};