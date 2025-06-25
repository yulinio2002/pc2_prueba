import { createContext, useContext } from 'react'
import { useStorageState } from '@hooks/useStorageState'
import { Student } from '@interfaces/students/Student'

interface AuthState {
  apiKey: string | null
  student: Student | null
  login: (key: string) => void
  logout: () => void
  setStudent: (s: Student | null) => void
}

const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKey] = useStorageState<string | null>('apiKey', null)
  const [student, setStudent] = useStorageState<Student | null>('student', null)

  const login = (key: string) => {
    setApiKey(key)
  }

  const logout = () => {
    setApiKey(null)
    setStudent(null)
    window.localStorage.removeItem('apiKey')
    window.localStorage.removeItem('student')
  }

  const value: AuthState = {
    apiKey,
    student,
    login,
    logout,
    setStudent,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('AuthContext not found')
  return ctx
}
