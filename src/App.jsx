
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="dashboard">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <h1>{activePage}</h1>
        <p>Welcome to {activePage} page!</p>
      </main>
    </div>
  );
}

export default App;
