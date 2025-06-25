import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, Student } from "@contexts/AuthContext";
import { api } from "@services/api";

export default function SelectStudent() {
  const { apiKey, selectStudent } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!apiKey) return;
    api.getStudents(apiKey)
      .then(setStudents)
      .catch(console.error);
  }, [apiKey]);

  const handleSelect = (id: number) => {
    const s = students.find((st) => st.id === id);
    if (s) {
      selectStudent(s);
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-4">
      <h1 className="title mb-4">Seleccionar Estudiante</h1>
      <ul className="space-y-2">
        {students.map((s) => (
          <li key={s.id}>
            <button className="underline" onClick={() => handleSelect(s.id)}>
              {s.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
