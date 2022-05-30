import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const value = useMemo(() => ({ token, setToken }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
