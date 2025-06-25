import { useEffect, useState } from "react";
import { api } from "@services/api";
import { useAuth } from "@contexts/AuthContext";

interface Absence {
  id: number;
  date: string;
  subject: string;
  reason?: string;
}

export default function AbsencesTable() {
  const { apiKey, student } = useAuth();
  const [absences, setAbsences] = useState<Absence[]>([]);

  useEffect(() => {
    if (!apiKey || !student) return;
    api.getAbsences(apiKey, student.id)
      .then(setAbsences)
      .catch(console.error);
  }, [apiKey, student]);

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border px-2">Fecha</th>
          <th className="border px-2">Materia</th>
          <th className="border px-2">Motivo</th>
        </tr>
      </thead>
      <tbody>
        {absences.map((a) => (
          <tr key={a.id}>
            <td className="border px-2">{a.date}</td>
            <td className="border px-2">{a.subject}</td>
            <td className="border px-2">{a.reason || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
