import { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { saveUser, loadUser, clearUser } from "./utils/auth";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // On mount: restore session from localStorage
  useEffect(() => {
    const savedUser = loadUser();
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Sync currentUser to localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      saveUser(currentUser);
    }
  }, [currentUser]);

  function handleLogin(username, email) {
    const user = { username, email, loginTime: new Date().toISOString() };
    setCurrentUser(user);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    clearUser();
    setCurrentUser(null);
    setIsLoggedIn(false);
  }

  const contextValue = { isLoggedIn, currentUser, handleLogin, handleLogout };

  return (
    <UserContext.Provider value={contextValue}>
      <div className="app">
        <Header />
        <main className="main">
          {isLoggedIn ? <Dashboard /> : <LoginForm />}
        </main>
      </div>
    </UserContext.Provider>
  );
}
