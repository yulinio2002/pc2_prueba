import { createContext, useContext, ReactNode } from "react";
import { useStorageState } from "@hooks/useStorageState";

export interface Student {
  id: number;
  name: string;
  email?: string;
}

interface AuthContextType {
  apiKey: string | null;
  student: Student | null;
  login: (key: string) => void;
  logout: () => void;
  selectStudent: (s: Student) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKey] = useStorageState<string | null>("apiKey", null);
  const [student, setStudent] = useStorageState<Student | null>("student", null);

  const login = (key: string) => setApiKey(key);
  const logout = () => {
    setApiKey(null);
    setStudent(null);
  };
  const selectStudent = (s: Student) => setStudent(s);

  return (
    <AuthContext.Provider value={{ apiKey, student, login, logout, selectStudent }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
