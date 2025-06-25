import { useEffect, useState } from 'react'
import Navbar from '@components/Navbar'
import AbsencesTable from '@components/AbsencesTable'
import { Absence } from '@interfaces/absences/Absence'
import { getAbsences } from '@services/api'
import { useAuth } from '@contexts/AuthContext'

export default function Absences() {
  const { apiKey, student } = useAuth()
  const [absences, setAbsences] = useState<Absence[]>([])

  useEffect(() => {
    if (apiKey && student) {
      getAbsences(apiKey, student.id).then(setAbsences).catch(() => {})
    }
  }, [apiKey, student])

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AbsencesTable absences={absences} />
      </div>
    </div>
  )
}
