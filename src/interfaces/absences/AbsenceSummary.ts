export interface SubjectAbsenceSummary {
  subject_id: number
  subject_name: string
  subject_code: string
  total_absences: number
  absence_dates: string[]
  reasons: Array<string | null>
}

export interface StudentAbsenceSummary {
  student_id: number
  student_name: string
  total_absences: number
  absences_by_subject: SubjectAbsenceSummary[]
}
