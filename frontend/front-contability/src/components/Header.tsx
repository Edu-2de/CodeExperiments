import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          ContabApp
        </Link>
        <nav>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">Registrar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}