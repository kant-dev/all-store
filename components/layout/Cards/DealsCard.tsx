import { PercentIcon, TagIcon, TimerResetIcon } from 'lucide-react';
import React from 'react';

const dealsCards = [
  { title: 'Flash Sales', description: '24-hour limited offers', icon: <TimerResetIcon size={40} />, color: '#fef2f2', iconColor: '#ef4444' },
  { title: 'Clearance', description: 'Up to 20% off', icon: <PercentIcon size={40} />, color: '#eff6ff', iconColor: '#3b82f6' },
  { title: 'Bundle Deals', description: 'Save more together', icon: <TagIcon size={40} />, color: '#f0fdf4', iconColor: '#22c55e' },
];

export default function DealsCard() {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dealsCards.map((deal, index) => (
            <div
              key={index}
              className="flex gap-4 items-center p-6 border rounded-lg shadow-md"
              style={{ backgroundColor: deal.color }}
            >
              <div
                className="mb-4 p-3 rounded-full"
                style={{
                  backgroundColor: deal.iconColor + '20', // Fundo do ícone com transparência
                  color: deal.iconColor, // Cor do ícone
                }}
              >
                {deal.icon}
              </div>
              <div className='pb-3'>
                <h3 className="text-2xl font-semibold text-gray-800">{deal.title}</h3>
                <p className="text-md text-gray-600 text-center">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
