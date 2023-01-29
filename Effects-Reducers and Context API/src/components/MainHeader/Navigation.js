import React, { useContext } from "react";
import AuthContext from "../../context-store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // Using Context Hook
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // // Consuming the AuthContext
  // <AuthContext.Consumer>
  //   {/* the Return Function is Required */}
  //   {(ctx) => {
  //     return (
  // <nav className={classes.nav}>
  //   <ul>
  //     {ctx.isLoggedIn && (
  //       <li>
  //         <a href="/">Users</a>
  //       </li>
  //     )}
  //     {ctx.isLoggedIn && (
  //       <li>
  //         <a href="/">Admin</a>
  //       </li>
  //     )}
  //     {ctx.isLoggedIn && (
  //       <li>
  //         <button onClick={props.onLogout}>Logout</button>
  //       </li>
  //     )}
  //   </ul>
  // </nav>
  //     );
  //   }}
  // </AuthContext.Consumer>
  // );
};

export default Navigation;
