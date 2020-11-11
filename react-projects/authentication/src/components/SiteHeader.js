import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth0Context } from "../contexts/auth0-context";

const SiteHeader = () => {
  // const auth0 = useContext(Auth0Context);
  const { isAuthenticated, login, logout, user } = useContext(Auth0Context);

  return (
    <div className="site-header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div>
        {/* {!auth0.isAuthenticated && (
          <button type="button" onClick={() => auth0.login()}>
            Login
          </button>
        )} */}
        {!isAuthenticated && (
          <button type="button" onClick={login}>
            Login
          </button>
        )}
        {isAuthenticated && user && (
          <>
            <button>{user.name}</button>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SiteHeader;
