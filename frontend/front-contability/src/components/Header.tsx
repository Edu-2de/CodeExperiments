'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [usuarioLogado, setUsuarioLogado] = useState<{ username: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Checa se está logado ao carregar o header
  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) setUsuarioLogado(JSON.parse(user));
    else setUsuarioLogado(null);
  }, []);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    if (menuOpen) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setIsAtTop(currentScroll <= 0);
          if (currentScroll <= 0) {
            setShow(true);
          } else if (currentScroll > lastScroll) {
            setShow(false);
          } else {
            setShow(true);
          }
          setLastScroll(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
    window.location.href = "/login";
  };

  return (
    <header
      className={`navbar navbar-expand-lg position-fixed top-0 start-0 w-100 py-4 d-flex align-items-center px-3 px-sm-4 px-md-5 transition-header ${show ? "show" : "hide"}`}
      style={{
        background: isAtTop ? "transparent" : "#0d1721",
        zIndex: 1050,
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
        transition: "background 0.3s, transform 0.3s"
      }}
    >
      {/* Botão Hamburger + Logo juntos */}
      <div className="d-flex align-items-center flex-shrink-0">
        <button
          className="navbar-toggler d-lg-none border-0 me-2"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
          style={{ color: "#fff", marginRight: "8px" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
        </button>
        <Link href="/" className="navbar-brand fw-bold text-white m-0" style={{ fontSize: 22, letterSpacing: 1 }}>
          ContabApp
        </Link>
      </div>

      {/* Menu desktop */}
      <nav className="flex-grow-1 d-none d-lg-block">
        <ul className="navbar-nav flex-row gap-4" style={{ marginLeft: "4%" }}>
          <li className="nav-item">
            <Link href="/" className="nav-link" style={{ color: "#e9f2f9" }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/servicos" className="nav-link" style={{ color: "#6c757d" }}>Serviços</Link>
          </li>
          <li className="nav-item">
            <Link href="/planos" className="nav-link" style={{ color: "#6c757d" }}>Planos</Link>
          </li>
          <li className="nav-item">
            <Link href="/sobre" className="nav-link" style={{ color: "#6c757d" }}>Sobre</Link>
          </li>
        </ul>
      </nav>

      {/* Botão Login OU ícone de usuário à direita (desktop) */}
      {!usuarioLogado ? (
        <Link
          href="/login"
          className="btn px-4 fw-semibold ms-4 rounded-0 d-none d-lg-block"
          style={{ background: "#fff", color: "#000", border: "none" }}
        >
          Login
        </Link>
      ) : (
        <div className="ms-4 d-none d-lg-flex align-items-center gap-2" ref={dropdownRef} style={{ position: "relative" }}>
          <span
            className="rounded-circle bg-white d-inline-flex justify-content-center align-items-center"
            style={{ width: 36, height: 36, color: "#0d1721", fontWeight: "bold", fontSize: 18, cursor: "pointer" }}
            title="Usuário logado"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </span>
          {dropdownOpen && (
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                top: 45,
                right: 0,
                minWidth: 160,
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                padding: "10px 0",
                zIndex: 3000
              }}
            >
              <div className="px-3 py-2 text-dark fw-semibold">{usuarioLogado.username}</div>
              <div className="dropdown-divider" style={{ borderTop: "1px solid #eee" }} />
              <button className="dropdown-item text-danger" style={{ width: "100%", textAlign: "left", background: "none", border: "none" }} onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
        </div>
      )}

      {/* Menu mobile fullscreen */}
      {menuOpen && (
        <div className="mobile-menu-fullscreen">
          <button
            className="position-absolute top-0 start-0 m-4 btn btn-link text-white fs-2"
            style={{ zIndex: 10000 }}
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="navbar-nav flex-column gap-4 align-items-center">
            <li className="nav-item">
              <Link href="/" className="nav-link fs-4" style={{ color: "#e9f2f9" }} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/servicos" className="nav-link fs-4" style={{ color: "#6c757d" }} onClick={() => setMenuOpen(false)}>Serviços</Link>
            </li>
            <li className="nav-item">
              <Link href="/planos" className="nav-link fs-4" style={{ color: "#6c757d" }} onClick={() => setMenuOpen(false)}>Planos</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre" className="nav-link fs-4" style={{ color: "#6c757d" }} onClick={() => setMenuOpen(false)}>Sobre</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link fs-4" style={{ color: "#6c757d" }} onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link fs-4" style={{ color: "#6c757d" }} onClick={() => setMenuOpen(false)}>Contato</Link>
            </li>
            <li className="nav-item mt-4">
              {!usuarioLogado ? (
                <Link href="/login" className="btn px-4 fw-semibold rounded-0" style={{ background: "#fff", color: "#000", border: "none" }} onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              ) : (
                <div className="d-flex flex-column align-items-center">
                  <span
                    className="rounded-circle bg-white d-inline-flex justify-content-center align-items-center mb-2"
                    style={{ width: 36, height: 36, color: "#0d1721", fontWeight: "bold", fontSize: 18 }}
                    title="Usuário logado"
                  >
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                  </span>
                  <div className="text-white fw-semibold mb-2">{usuarioLogado.username}</div>
                  <button className="btn btn-link text-white p-0" onClick={handleLogout} title="Sair">
                    Sair
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .transition-header {
          transition: transform 0.3s;
        }
        .transition-header.hide {
          transform: translateY(-100%);
        }
        .transition-header.show {
          transform: translateY(0);
        }
        .mobile-menu-fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0d1721;
          opacity: 0.97;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.2s;
        }
        @media (max-width: 575.98px) {
          .navbar-brand {
            font-size: 18px !important;
          }
          .mobile-menu-fullscreen .nav-link {
            font-size: 1.3rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .dropdown-menu.show {
          display: block;
        }
      `}</style>
    </header>
  );
}