import React from "react";

function Login(props) {
  return (
    <div>
      <div>
        <h2>Sign in</h2>
        <form onSubmit={props.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username or email"
              onChange={props.onChangeEmail}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={props.onChangePassword}
            />
          </div>

          <button type="submit" disabled={!props.passwordCheck()}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
