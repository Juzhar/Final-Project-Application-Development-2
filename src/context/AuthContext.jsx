import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = user !== null;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("recipefinder_user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username, password, role = "regular") => {
    if (!username || !password) {
      throw new Error("Missing credentials");
    }

    const mockToken = `mock_token_${Date.now()}`;

    const userData = {
      username,
      role,
      token: mockToken,
    };

    setUser(userData);

    localStorage.setItem("recipefinder_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("recipefinder_user");
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        hasRole,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}