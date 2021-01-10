import logo from "./logo.svg";
import "./App.css";
import Login from "./componets/Login";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);
  const [home, setHome] = useState(false);
  const user = { email: email, password: password };
  const data = "can you see";
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function authfuntion(response) {
    if (
      response.email === "wroung Email" ||
      response.password === "wrongPassword"
    ) {
      setAuth(false);
    } else {
      setHome(true)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch("/check", requestOptions)
      .then((response) => response.json())
      .then((response) => authfuntion(response));
  }
  return (
    <div className="App">
      <header className="App-header">
        {home?<h1>home</h1>:
        <Login
        display={auth}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
          passwordCheck={validateForm}
          handleSubmit={handleSubmit}
        />}
        <h1>{email}</h1>
        <h1>{password}</h1>
      </header>
    </div>
    
  );
}

export default App;
