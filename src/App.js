import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';



function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar/>
      </div>
      {/* App body */}
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
    </div>
  );
}

export default App;
