import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

export default function Login() {
  const [key, setKey] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(key)
    navigate('/select-student')
  }

  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="API Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="border p-2 w-64"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  )
}
