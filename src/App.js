import React from 'react'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';



function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
        
    </div>
  );
}

export default App;
