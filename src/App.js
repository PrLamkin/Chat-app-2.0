import React, { useState } from "react";
import Chat from "./components/Chat/Chat"
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Login from "./components/Login/Login"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
      <Header />

      <div className="app_body">
        <SideBar />

        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <h1>placeholder</h1>
          </Route>

        </Switch>

      </div>
      </>
    )}
      </Router>
    </div>
  );
}

export default App;
