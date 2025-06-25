const API_BASE = "https://api.example.com";

async function request(path: string, apiKey: string) {
  const res = await fetch(API_BASE + path, {
    headers: { "x-api-key": apiKey },
  });
  if (!res.ok) {
    throw new Error("API error");
  }
  return res.json();
}

export const api = {
  getStudents: (key: string) => request("/students/", key),
  getStudentProfile: (key: string, id: number) => request(`/students/${id}/`, key),
  getEnrollments: (key: string, id: number) => request(`/enrollments/?student_id=${id}`, key),
  getAbsences: (key: string, id: number) => request(`/absences/?student_id=${id}`, key),
  getAbsenceSummary: (key: string, id: number) => request(`/students/${id}/absence_summary/`, key),
};
