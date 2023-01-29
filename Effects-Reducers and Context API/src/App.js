import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context-store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check Local Storage
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    // Store the Data
    localStorage.setItem("userData", "1");
  };

  const logoutHandler = () => {
    // Remove data from localStorage
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  return (
      /* Using AuthContext */
      /* WRAP Around the Components and Their Childrens in Which we Need the AuthContext with the Help of Provider*/
      // Add Value Prop
      <AuthContext.Provider value={{
        isLogggedIn: isLoggedIn,
        onLogout: logoutHandler,
    }}>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
  );
}

export default App;
