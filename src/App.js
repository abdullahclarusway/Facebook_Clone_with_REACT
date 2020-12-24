import React from 'react'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';



function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
        {/* Feed */}
        {/* Widget */}
    </div>
  );
}

export default App;
