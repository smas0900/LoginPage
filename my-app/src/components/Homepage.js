import React from "react";
import { Link, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./signup";

export function Homepage() {
  return (
    <>
      <div>
        <h2>Welcome to the Homepage!</h2>
        <p>This is the main page of your application.</p>
        <Link to="/Login">Go to Login</Link>
        <br />
        <Link to="/signup">Go to Sign Up</Link>
      </div>
    </>
  );
}
