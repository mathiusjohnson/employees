import React from 'react';
import UserCards from './features/users/UserCards';
import './styles/main.css';

function App() {
  return (
    <div class="h-64 font-sans">
      <div class="p-4 m-4">
        <UserCards />
      </div>
    </div>
  );
}

export default App;
