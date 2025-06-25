import { useEffect, useState } from 'react'
import Navbar from '@components/Navbar'
import SubjectsList from '@components/SubjectsList'
import { Subject } from '@interfaces/subjects/Subject'
import { Enrollment } from '@interfaces/enrollments/Enrollment'
import { getEnrollments, getSubjects } from '@services/api'
import { useAuth } from '@contexts/AuthContext'

export default function Subjects() {
  const { apiKey, student } = useAuth()
  const [subjects, setSubjects] = useState<Subject[]>([])

  useEffect(() => {
    if (apiKey && student) {
      Promise.all([
        getEnrollments(apiKey, student.id),
        getSubjects(apiKey),
      ])
        .then(([enrollments, subjects]) => {
          const enrolled = subjects.filter((s) =>
            enrollments.some((e) => e.subject_id === s.id),
          )
          setSubjects(enrolled)
        })
        .catch(() => {})
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
