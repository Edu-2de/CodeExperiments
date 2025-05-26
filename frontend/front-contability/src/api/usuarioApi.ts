const API_URL = "http://localhost:8080/api/usuarios";

export async function registrar(usuario: { username: string; email: string; password: string }) {
  const res = await fetch("http://localhost:8080/api/usuarios/registrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Erro ao registrar usuário");
  }
  return res.json();
}

export async function login(usuario: { username: string; password: string }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Usuário ou senha inválidos");
  }
  return res.json();
}