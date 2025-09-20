// client/src/App.js
import React from 'react';
import { UserProgressProvider } from './context/UserProgressContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <UserProgressProvider>
      <Dashboard />
    </UserProgressProvider>
  );
}

export default App;