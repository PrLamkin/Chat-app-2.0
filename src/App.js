import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className="app_body">
        <SideBar />

      </div>

    </div>
  );
}

export default App;
