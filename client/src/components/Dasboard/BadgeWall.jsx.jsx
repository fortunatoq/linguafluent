// client/src/components/dashboard/BadgeWall.jsx
import React from "react";

export default function BadgeWall({ badges }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer"
          title={badge.title}
        >
          <div className="text-3xl mb-2">{badge.icon}</div>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{badge.title}</p>
        </div>
      ))}
    </div>
  );
}