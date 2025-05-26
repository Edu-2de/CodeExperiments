'use client'
import { useState } from "react"
import { login } from "@/api/usuarioApi"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await login({ username, password })
      console.log(res.message)
      // Salva o login no localStorage (simples, para exemplo)
      localStorage.setItem("usuarioLogado", JSON.stringify({ username }))
      router.push("/") // Redireciona para a página principal
    } catch (err) {
      setError(err instanceof Error ? err.message : "Usuário ou senha inválidos")
    }
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Usuário</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3 text-center">{error}</div>}
          <button className="btn btn-primary w-100 fw-bold rounded-pill py-2" type="submit">
            Entrar
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-secondary">Não tem conta?</span>
          <Link href="/registro" className="ms-2 fw-semibold text-decoration-none">
            <span style={{ color: "#0d6efd" }}>Registre-se agora</span>
          </Link>
        </div>
      </div>
    </div>
  )
}