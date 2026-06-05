import { useState } from "react";
import Login from "./components/Login";
import { getToken, removeToken } from "./api";
import "./App.css";

import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";

function App() {
  const [logged, setLogged] = useState(getToken() !== null);

  function handleLogin() {
    setLogged(true);
  }

  function handleLogout() {
    removeToken();
    setLogged(false);
  }

  if (!logged) {
    return (
      <div className="App">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>TaskManager</h1>

      <Profile />
      <Projects />
      <Tasks />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
