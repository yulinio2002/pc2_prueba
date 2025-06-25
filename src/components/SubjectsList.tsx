import { useState } from 'react'
import { Subject } from '@interfaces/subjects/Subject'

export default function SubjectsList({ subjects }: { subjects: Subject[] }) {
  const [filter, setFilter] = useState('')
  const filtered = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(filter.toLowerCase()) ||
      s.code.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Materias Inscritas</h2>
      <input
        className="border p-1 mb-2 w-full"
        placeholder="Filtrar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="list-disc pl-4">
        {filtered.map((s) => (
          <li key={s.id}>
            {s.name} - {s.code} - {s.location}
          </li>
        ))}
      </ul>
    </div>
  )
}
