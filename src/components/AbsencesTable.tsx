import { Absence } from '@interfaces/absences/Absence'

export default function AbsencesTable({ absences }: { absences: Absence[] }) {
  return (
    <table className="min-w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th className="px-2 py-1 border">Fecha</th>
          <th className="px-2 py-1 border">Materia</th>
          <th className="px-2 py-1 border">Motivo</th>
        </tr>
      </thead>
      <tbody>
        {absences.map((a) => (
          <tr key={a.id} className="border-t">
            <td className="px-2 py-1 border">{a.date}</td>
            <td className="px-2 py-1 border">{a.subject}</td>
            <td className="px-2 py-1 border">{a.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
