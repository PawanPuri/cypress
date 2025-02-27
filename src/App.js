import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password123") {
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      {loggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default App;
