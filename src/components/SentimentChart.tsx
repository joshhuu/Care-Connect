import React from 'react';

const mockData = [
  { sentiment: 'Positive', value: 65, color: 'bg-green-500' },
  { sentiment: 'Neutral', value: 25, color: 'bg-yellow-500' },
  { sentiment: 'Negative', value: 10, color: 'bg-red-500' },
];

export default function SentimentChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Sentiment Distribution</h3>
      <div className="space-y-4">
        {mockData.map(({ sentiment, value, color }) => (
          <div key={sentiment}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">{sentiment}</span>
              <span className="text-sm font-medium">{value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${color} h-2 rounded-full`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}