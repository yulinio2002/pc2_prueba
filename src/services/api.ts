const BASE_URL = 'http://pc2-matricula-alb-2123051620.us-east-1.elb.amazonaws.com'

export async function apiFetch<T>(url: string, apiKey: string) {
  const res = await fetch(BASE_URL + url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
  if (!res.ok) throw new Error('API error')
  return (await res.json()) as T
}

import { Student } from '@interfaces/students/Student'
import { Subject } from '@interfaces/subjects/Subject'
import { Absence } from '@interfaces/absences/Absence'
import { StudentAbsenceSummary } from '@interfaces/absences/AbsenceSummary'
import { Enrollment } from '@interfaces/enrollments/Enrollment'

export function getStudents(apiKey: string) {
  return apiFetch<Student[]>('/students/', apiKey)
}

export function getSubjects(apiKey: string) {
  return apiFetch<Subject[]>('/subjects/', apiKey)
}

export function getStudent(apiKey: string, id: number) {
  return apiFetch<Student>(`/students/${id}/`, apiKey)
}

export function getEnrollments(apiKey: string, id: number) {
  return apiFetch<Enrollment[]>(`/enrollments/?student_id=${id}`, apiKey)
}

export function getAbsences(apiKey: string, id: number) {
  return apiFetch<Absence[]>(`/absences/?student_id=${id}`, apiKey)
}

export function getAbsenceSummary(apiKey: string, id: number) {
  return apiFetch<StudentAbsenceSummary>(`/students/${id}/absence_summary/`, apiKey)
}
