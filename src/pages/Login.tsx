import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export default function Login() {
  const [key, setKey] = useState("");
  const { login, apiKey } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key) {
      login(key);
      navigate("/select-student");
    }
  };

  if (apiKey) {
    navigate("/select-student");
  }

  return (
    <div className="p-4 login-section">
      <h1 className="title mb-4">API Login</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="API key"
          className="border p-2 flex-1"
        />
        <button type="submit" className="bg-primary text-white px-4">
          Entrar
        </button>
      </form>
    </div>
  );
}
