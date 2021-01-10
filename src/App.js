import logo from "./logo.svg";
import "./App.css";
import Login from "./componets/Login";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = "can you see";
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("submitted");
  }
  return (
    <div className="App">
      <header className="App-header">
        <Login
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
          passwordCheck={validateForm}
          handleSubmit={handleSubmit}
        />
        <h1>{email}</h1>
        <h1>{password}</h1>
      </header>
    </div>
  );
}

export default App;
