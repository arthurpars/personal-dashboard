import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/UserContext";
import Layout from "./components/Layout";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import WriteArticle from "./components/WriteArticle";
import NotFound from "./components/NotFound";
import { saveUser, loadUser, clearUser } from "./utils/auth";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: "/", element: <LoginForm /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/user/:id", element: <Dashboard /> },
          { path: "/article", element: <WriteArticle /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

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

  function handleLogin(username, email, id) {
    const user = { id, username, email, loginTime: new Date().toISOString() };
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
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
