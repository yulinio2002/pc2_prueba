import { Navigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { apiKey } = useAuth()
  if (!apiKey) {
    return <Navigate to="/login" replace />
  }
  return children
}
