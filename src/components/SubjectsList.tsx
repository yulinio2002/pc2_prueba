import { useEffect, useState } from "react";
import { api } from "@services/api";
import { useAuth } from "@contexts/AuthContext";

interface Subject {
  id: number;
  name: string;
  code: string;
  location?: string;
}

export default function SubjectsList({ preview }: { preview?: boolean }) {
  const { apiKey, student } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    if (!apiKey || !student) return;
    api.getEnrollments(apiKey, student.id)
      .then(setSubjects)
      .catch(console.error);
  }, [apiKey, student]);

  const shown = preview ? subjects.slice(0, 2) : subjects;

  return (
    <div className="home-section">
      <h2 className="title mb-2">Materias</h2>
      <ul className="list-disc list-inside">
        {shown.map((s) => (
          <li key={s.id}>{s.name} ({s.code})</li>
        ))}
      </ul>
    </div>
  );
}
