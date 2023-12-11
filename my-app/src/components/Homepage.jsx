import React from "react";
import { Link, Redirect } from "react-router-dom";

const Homepage = ({ isAuthenticated }) => {
  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Welcome to the Homepage!</h2>
      <p>This is the main page of your application.</p>
      <Link to="/login">Go to Login</Link>
      <br />
      <Link to="/signup">Go to Sign Up</Link>
    </div>
  );
};

export default Homepage;
