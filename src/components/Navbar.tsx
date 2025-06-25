import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

export default function Navbar() {
  const { student, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-primary text-white px-4 py-2 flex justify-between">
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/subjects">Materias</Link>
        <Link to="/absences">Asistencias</Link>
      </div>
      <div className="space-x-2">
        {student && <span>{student.first_name}</span>}
        <button onClick={handleLogout} className="underline">
          Cerrar sesión
        </button>
      </div>
    </nav>
  )
}
