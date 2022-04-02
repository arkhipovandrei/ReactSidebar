import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <section className="home">
        <div className="text">Dashboard Sidebar</div>
      </section>
    </div>
  );
}

export default App;
