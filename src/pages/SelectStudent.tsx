import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'
import { getStudents } from '@services/api'
import { Student } from '@interfaces/students/Student'

export default function SelectStudent() {
  const { apiKey, setStudent } = useAuth()
  const [students, setStudents] = useState<Student[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (apiKey) {
      getStudents(apiKey)
        .then(setStudents)
        .catch(() => {})
    }
  }, [apiKey])

  const handleSelect = (s: Student) => {
    setStudent(s)
    navigate('/dashboard')
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Seleccionar Estudiante</h1>
      <ul className="space-y-2">
        {students.map((s) => (
          <li key={s.id} className="border p-2 flex justify-between">
            <span>
              {s.first_name} {s.last_name}
            </span>
            <button
              onClick={() => handleSelect(s)}
              className="bg-primary text-white px-2 py-1 rounded"
            >
              Seleccionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
