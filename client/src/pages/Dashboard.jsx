import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900">🎯 LinguaFluent</h1>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Iniciar sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Progreso</h2>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full w-1/2"></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">50% completado</p>
        </div>

        {/* Badges Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Insignias</h2>
          <div className="flex space-x-2">
            <span className="bg-green-400 text-black text-xs px-2 py-1 rounded">✅</span>
            <span className="bg-purple-400 text-black text-xs px-2 py-1 rounded">🚀</span>
          </div>
        </div>

        {/* Next Lesson Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Siguiente Lección</h2>
          <p className="text-sm text-gray-700 mb-4">"Present Perfect Tense"</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Comenzar
          </button>
        </div>
      </main>
    </div>
  );
}
