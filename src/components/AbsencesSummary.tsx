import { AbsenceSummary as Summary } from '@interfaces/absences/AbsenceSummary'

export default function AbsencesSummary({ summary }: { summary: Summary[] }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Resumen de Faltas</h2>
      <ul className="list-disc pl-4">
        {summary.map((s) => (
          <li key={s.subject}>
            {s.subject}: {s.total} faltas
          </li>
        ))}
      </ul>
    </div>
  )
}
