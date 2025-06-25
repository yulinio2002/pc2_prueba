import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export default function Navbar() {
  const { apiKey, student, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!apiKey) return null;

  return (
    <nav className="bg-secondary p-2 flex gap-4">
      <Link to="/dashboard">Inicio</Link>
      <Link to="/subjects">Materias</Link>
      <Link to="/absences">Asistencias</Link>
      <span className="ml-auto">{student?.name}</span>
      <button onClick={handleLogout} className="underline">Cerrar sesión</button>
    </nav>
  );
}
