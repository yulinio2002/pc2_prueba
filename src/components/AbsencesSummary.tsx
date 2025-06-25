import { StudentAbsenceSummary } from '@interfaces/absences/AbsenceSummary'

export default function AbsencesSummary({ summary }: { summary: StudentAbsenceSummary | null }) {
  if (!summary) return null
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Resumen de Faltas</h2>
      <ul className="list-disc pl-4">
        {summary.absences_by_subject.map((s) => (
          <li key={s.subject_id}>
            {s.subject_name}: {s.total_absences} faltas
          </li>
        ))}
      </ul>
    </div>
  )
}
