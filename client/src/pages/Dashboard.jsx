import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">🎯 LinguaFluent</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Iniciar sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Progreso</h2>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full w-1/2"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">50% completado</p>
          </div>

          {/* Badges Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Insignias</h2>
            <div className="flex space-x-2">
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">✅</span>
              <span className="bg-green-400 text-black text-xs px-2 py-1 rounded">🚀</span>
            </div>
          </div>

          {/* Next Lesson */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Siguiente Lección</h2>
            <p className="text-sm text-gray-700">"Present Perfect Tense"</p>
            <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Comenzar</button>
          </div>
        </div>
      </main>
    </div>
  );
}
