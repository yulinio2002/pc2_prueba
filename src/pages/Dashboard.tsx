import { useEffect, useState } from 'react'
import { useAuth } from '@contexts/AuthContext'
import { getStudent, getEnrollments, getAbsenceSummary } from '@services/api'
import { Subject } from '@interfaces/subjects/Subject'
import { AbsenceSummary } from '@interfaces/absences/AbsenceSummary'
import Navbar from '@components/Navbar'
import AbsencesSummary from '@components/AbsencesSummary'
import SubjectsList from '@components/SubjectsList'

export default function Dashboard() {
  const { apiKey, student } = useAuth()
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [summary, setSummary] = useState<AbsenceSummary[]>([])

  useEffect(() => {
    if (apiKey && student) {
      getEnrollments(apiKey, student.id).then(setSubjects).catch(() => {})
      getAbsenceSummary(apiKey, student.id).then(setSummary).catch(() => {})
    }
  }, [apiKey, student])

  return (
    <div>
      <Navbar />
      <div className="p-4 space-y-4">
        {student && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-2">{student.first_name} {student.last_name}</h2>
            <p>{student.email}</p>
            <p>DNI: {student.dni}</p>
          </div>
        )}
        <SubjectsList subjects={subjects} />
        <AbsencesSummary summary={summary} />
      </div>
    </div>
  )
}
