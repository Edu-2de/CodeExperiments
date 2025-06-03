'use client'
import { useState } from "react"
import { registrar } from "@/api/usuarioApi"
import Link from "next/link"
//comnenatiro
export default function RegistroPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await registrar({ username, email, password })
      setSuccess("Cadastro realizado com sucesso!")
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao registrar usuário")
      setSuccess("")
    }
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Criar Conta</h2>
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
            <label className="form-label fw-semibold">E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
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
          {success && <div className="text-success mb-3 text-center">{success}</div>}
          {error && <div className="text-danger mb-3 text-center">{error}</div>}
          <button className="btn btn-primary w-100 fw-bold rounded-pill py-2" type="submit">
            Registrar
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-secondary">Já tem conta?</span>
          <Link href="/login" className="ms-2 fw-semibold text-decoration-none">
            <span style={{ color: "#0d6efd" }}>Entrar</span>
          </Link>
        </div>
      </div>
    </div>
  )
}