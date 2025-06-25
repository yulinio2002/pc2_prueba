import { useAuth } from "@contexts/AuthContext";
import AbsencesSummary from "@components/AbsencesSummary";
import SubjectsList from "@components/SubjectsList";

export default function Dashboard() {
  const { student } = useAuth();
  if (!student) return null;

  return (
    <div className="p-4">
      <h1 className="title mb-4">Dashboard</h1>
      <p className="mb-4">Bienvenido {student.name}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <SubjectsList preview />
        <AbsencesSummary />
      </div>
    </div>
  );
}
