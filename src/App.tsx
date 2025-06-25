import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '@pages/Login'
import SelectStudent from '@pages/SelectStudent'
import Dashboard from '@pages/Dashboard'
import Subjects from '@pages/Subjects'
import Absences from '@pages/Absences'
import { ProtectedRoute } from '@router/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/select-student"
        element={
          <ProtectedRoute>
            <SelectStudent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/subjects"
        element={
          <ProtectedRoute>
            <Subjects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/absences"
        element={
          <ProtectedRoute>
            <Absences />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
