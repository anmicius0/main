import React from "react";

const Signup = () => {
  return (
    <div className={"hero is-primary signup-page"}>
      <div className={"container"}>
        <h2>Sign up</h2>
        <div className={"field"}>
          <div className={"control"}>
            <input
              type="email"
              className={"input"}
              placeholder="Email"
              required
            ></input>
          </div>
          <div className={"control"}>
            <input
              type="password"
              className={"input"}
              placeholder="Password"
              required
            ></input>
          </div>
          <div className={"control"}>
            <button className={"button"}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
