import { createContext, useState, ReactNode } from "react";

type User = null | object;

type InitialContextType = {
  user: User;
  setUser: React.Dispatch<any>;
};

const initContext: InitialContextType = {
  user: null,
  setUser: () => {},
};

export const AuthContext = createContext(initContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
