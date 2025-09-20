// client/src/hooks/useConfetti.js
import { useEffect, useState } from "react";

export default function useConfetti() {
  const [show, setShow] = useState(false);

  const showConfetti = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  const Confetti = () => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          >
            {['🎉', '🎊', '⭐', '✨', '💥'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    );
  };

  return { showConfetti, Confetti };
}