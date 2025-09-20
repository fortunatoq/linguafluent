// client/src/pages/Dashboard.jsx
import React from 'react';
import ProgressCircle from '../components/ProgressCircle';
import BadgeCard from '../components/BadgeCard';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">¡Hola, Usuario!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tu Progreso</h2>
          <ProgressCircle percentage={67} level="A2" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Insignias Recientes</h2>
          <BadgeCard title="Past Tense Pro" icon="🏅" />
          <BadgeCard title="7-Day Streak" icon="🌟" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lección de Hoy</h2>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Ordering Food 🍔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;