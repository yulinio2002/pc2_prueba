import { useEffect, useState } from 'react'
import Navbar from '@components/Navbar'
import AbsencesTable from '@components/AbsencesTable'
import { Absence } from '@interfaces/absences/Absence'
import { Subject } from '@interfaces/subjects/Subject'
import { getAbsences, getSubjects } from '@services/api'
import { useAuth } from '@contexts/AuthContext'

export default function Absences() {
  const { apiKey, student } = useAuth()
  const [absences, setAbsences] = useState<Absence[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])

  useEffect(() => {
    if (apiKey && student) {
      getAbsences(apiKey, student.id).then(setAbsences).catch(() => {})
      getSubjects(apiKey).then(setSubjects).catch(() => {})
    }
  }, [apiKey, student])

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AbsencesTable
          absences={absences}
          subjectMap={Object.fromEntries(subjects.map((s) => [s.id, s.name]))}
        />
      </div>
    </div>
  )
}
