// client/src/pages/Dashboard.jsx
import React, { useState, useEffect, useContext } from "react";
import { UserProgressContext } from "../context/UserProgressContext";
import useConfetti from "../hooks/useConfetti";
import ProgressRing from "../components/dashboard/ProgressRing";
import StreakCounter from "../components/dashboard/StreakCounter";
import BadgeWall from "../components/dashboard/BadgeWall";

export default function Dashboard() {
  const { progress, streak, badges, completeLesson } = useContext(UserProgressContext);
  const [darkMode, setDarkMode] = useState(false);
  const { showConfetti, Confetti } = useConfetti();

  // Simular confeti al cargar si el progreso es > 90%
  useEffect(() => {
    if (progress > 90) {
      showConfetti();
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleCompleteLesson = () => {
    completeLesson();
    showConfetti();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      <Confetti />

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="LinguaFluent Logo" className="w-10 h-10 rounded-full border-2 border-blue-500" />
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 LinguaFluent Pro
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Perfil
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-2xl mb-8 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold">¡Hola, Campeón! 👋</h2>
          <p className="mt-2 text-blue-100">Hoy es un gran día para dominar el inglés.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Progress Ring */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">📊 Tu Progreso</h3>
            <div className="flex flex-col items-center">
              <ProgressRing radius={80} stroke={8} progress={progress} />
              <p className="mt-4 text-2xl font-bold text-blue-600 dark:text-blue-400">{progress}%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Nivel B1</p>
            </div>
          </div>

          {/* Streak Counter */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">🔥 Racha Actual</h3>
            <div className="flex flex-col items-center">
              <StreakCounter count={streak} />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Días consecutivos</p>
            </div>
          </div>

          {/* Next Lesson */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">📚 Siguiente Lección</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-gray-800 dark:text-white">Phrasal Verbs: Take Off, Look Up, Break Down</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Nivel B1 • 15 min</p>
              </div>
              <button
                onClick={handleCompleteLesson}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                ✅ Completar Lección
              </button>
            </div>
          </div>
        </div>

        {/* Badge Wall */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">🏆 Tus Insignias</h3>
          <BadgeWall badges={badges} />
        </div>

        {/* Weekly Activity (Mini Chart) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">📈 Actividad Semanal</h3>
          <div className="flex justify-between items-end h-32">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, i) => (
              <div key={day} className="flex flex-col items-center space-y-2">
                <div
                  className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-500 hover:from-blue-600"
                  style={{ height: `${Math.max(10, (i + 1) * 10)}%` }}
                ></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}