import React from 'react';
import UserCards from './features/users/UserCards';
import './styles/main.css';

function App() {
  return (
    <div class="h-64">
      <div class="p-4 m-4 bg-green-600">

          <UserCards />

      </div>
      <div class="p-4 m-4 bg-green-300 h-full">

      </div>
    </div>
  );
}

export default App;
