import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@pages/Login";
import SelectStudent from "@pages/SelectStudent";
import Dashboard from "@pages/Dashboard";
import Subjects from "@pages/Subjects";
import Absences from "@pages/Absences";
import ProtectedRoute from "@router/ProtectedRoute";
import Navbar from "@components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/select-student" element={<SelectStudent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/absences" element={<Absences />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </>
  );
}
