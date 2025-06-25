import { Absence } from '@interfaces/absences/Absence'

interface Props {
  absences: Absence[]
  subjectMap?: Record<number, string>
}

export default function AbsencesTable({ absences, subjectMap }: Props) {
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
            <td className="px-2 py-1 border">
              {subjectMap ? subjectMap[a.subject_id] || a.subject_id : a.subject_id}
            </td>
            <td className="px-2 py-1 border">{a.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
