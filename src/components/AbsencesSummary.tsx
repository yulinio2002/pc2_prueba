import { useEffect, useState } from "react";
import { api } from "@services/api";
import { useAuth } from "@contexts/AuthContext";

interface SummaryItem {
  subject: string;
  absences: number;
}

export default function AbsencesSummary() {
  const { apiKey, student } = useAuth();
  const [summary, setSummary] = useState<SummaryItem[]>([]);

  useEffect(() => {
    if (!apiKey || !student) return;
    api.getAbsenceSummary(apiKey, student.id)
      .then(setSummary)
      .catch(console.error);
  }, [apiKey, student]);

  return (
    <div className="home-section">
      <h2 className="title mb-2">Resumen Asistencias</h2>
      <ul className="list-disc list-inside">
        {summary.map((s) => (
          <li key={s.subject}>{s.subject}: {s.absences}</li>
        ))}
      </ul>
    </div>
  );
}
