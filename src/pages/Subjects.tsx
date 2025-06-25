import { useEffect, useState } from 'react'
import Navbar from '@components/Navbar'
import SubjectsList from '@components/SubjectsList'
import { Subject } from '@interfaces/subjects/Subject'
import { getEnrollments } from '@services/api'
import { useAuth } from '@contexts/AuthContext'

export default function Subjects() {
  const { apiKey, student } = useAuth()
  const [subjects, setSubjects] = useState<Subject[]>([])

  useEffect(() => {
    if (apiKey && student) {
      getEnrollments(apiKey, student.id).then(setSubjects).catch(() => {})
    }
  }, [apiKey, student])

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SubjectsList subjects={subjects} />
      </div>
    </div>
  )
}
