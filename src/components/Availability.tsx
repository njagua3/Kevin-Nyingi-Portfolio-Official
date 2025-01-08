import React from 'react';

export function Availability() {
  const now = new Date();
  const hour = now.getHours();
  const isAvailable = hour >= 9 && hour < 17; // 9 AM - 5 PM

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-green-500 animate-ping' : 'bg-red-500'}`} />
      <span className="text-sm">
        {isAvailable ? 'Available for appointments' : 'Currently unavailable'}
      </span>
    </div>
  );
}