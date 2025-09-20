// client/src/components/dashboard/StreakCounter.jsx
import React from "react";

export default function StreakCounter({ count }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-orange-500 mb-2">
        {count}
        <span className="ml-1 animate-pulse">🔥</span>
      </div>
    </div>
  );
}