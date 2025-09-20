// client/src/context/UserProgressContext.jsx
import React, { createContext, useState, useContext } from "react";

const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState(67);
  const [streak, setStreak] = useState(7);
  const [badges] = useState([
    { icon: '✅', title: 'Grammar Master' },
    { icon: '🚀', title: '7-Day Streak' },
    { icon: '🎧', title: 'Listening Pro' },
    { icon: '💬', title: 'Speaking Star' },
  ]);

  const completeLesson = () => {
    setProgress(prev => Math.min(prev + 5, 100));
    setStreak(prev => prev + 1);
  };

  return (
    <UserProgressContext.Provider value={{ progress, streak, badges, completeLesson }}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;