'use client'
import Link from "next/link";
import { FaHome, FaChartBar, FaFileInvoiceDollar, FaCog, FaChartLine } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const pathname = usePathname();
  
  return (
    <aside
      className="sidebar-dashboard"
      style={{
        background: "#0d1721",
        minHeight: "100vh",
        borderRight: "1px solid #182232",
        width: 240,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="d-flex flex-column h-100" style={{ flex: 1 }}>
        {/* Logo e botão */}
        <div className="p-4 pb-3 border-bottom sidebar-header">
          <Link href="/" className="sidebar-logo d-flex align-items-center mb-3" style={{ textDecoration: "none" }}>
            <svg width="28" height="28" style={{ marginRight: 8 }} viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#0d6efd"/>
              <text x="16" y="21" textAnchor="middle" fill="#e9f2f9" fontSize="16" fontWeight="bold" fontFamily="sans-serif">C</text>
            </svg>
            <span className="fw-bold" style={{ letterSpacing: 1, fontSize: 21, color: "#e9f2f9" }}>
              <span style={{ color: "#0d6efd" }}>Contab</span>App
            </span>
          </Link>
          <button className="sidebar-action-btn">
            + Nova Receita
          </button>
        </div>
        {/* Menu */}
        <nav className="sidebar-menu flex-grow-1 py-4 px-3">
          <span className="sidebar-menu-title mb-2">Menu</span>
          <ul className="sidebar-list list-unstyled mb-0">
            <li className="mb-1">
              <Link
                href="/"
                className="nav-item-dashboard d-flex align-items-center px-2 py-2 rounded gap-3 text-white text-decoration-none"
                style={{ fontWeight: 500 }}
              >
                <FaHome className="sidebar-icon"  style={{ color: pathname === "/" ? "#e9f2f9" : "#6c757d" }} />
                <span style={{ color: pathname === "/" ? "#e9f2f9" : "#6c757d" }}>Home</span>
                
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/dashboard"
                className="nav-item-dashboard active d-flex align-items-center px-2 py-2 rounded gap-3 text-white text-decoration-none"
                style={{ fontWeight: 500 }}
              >
                <FaChartBar className="sidebar-icon" style={{ color: pathname === "/dashboard" ? "#e9f2f9" : "#6c757d" }} />
                <span style={{ color: pathname === "/dashboard" ? "#e9f2f9" : "#6c757d" }}>Visão Geral</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="#"
                className="nav-item-dashboard d-flex align-items-center px-2 py-2 rounded gap-3 text-white text-decoration-none"
                style={{ fontWeight: 500 }}
              >
                <FaChartLine className="sidebar-icon" style={{ color: pathname === "/reports" ? "#e9f2f9" : "#6c757d" }} />
                <span style={{ color: pathname === "/reports" ? "#e9f2f9" : "#6c757d" }}>Relatórios</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="#"
                className="nav-item-dashboard d-flex align-items-center px-2 py-2 rounded gap-3 text-white text-decoration-none"
                style={{ fontWeight: 500 }}
              >
                <FaFileInvoiceDollar className="sidebar-icon" style={{ color: pathname === "/expenses" ? "#e9f2f9" : "#6c757d" }} />
                <span style={{ color: pathname === "/expenses" ? "#e9f2f9" : "#6c757d" }}>Nova Despesa</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="nav-item-dashboard d-flex align-items-center px-2 py-2 rounded gap-3 text-white text-decoration-none"
                style={{ fontWeight: 500 }}
              >
                <FaCog className="sidebar-icon" style={{ color: pathname === "/settings" ? "#e9f2f9" : "#6c757d" }} />
                <span style={{ color: pathname === "/settings" ? "#e9f2f9" : "#6c757d" }}>Configurações</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Rodapé */}
        <div className="mt-auto p-4 text-center sidebar-footer">
          <div style={{ fontSize: 13, color: "#e9f2f9", opacity: 0.6 }}>
            © {new Date().getFullYear()} ContabApp
          </div>
        </div>
      </div>
      {/* --- Apenas UM style jsx, no final --- */}
      <style jsx>{`
        .nav-item-dashboard,
        .nav-item-dashboard:visited,
        .nav-item-dashboard:active {
          color: #fff !important;
          text-decoration: none !important;
        }
        .nav-item-dashboard {
          display: flex;
          align-items: center;
          gap: 14px;
          font-weight: 500;
          padding: 11px 18px;
          border-radius: 8px;
          font-size: 1.08rem;
          transition: background 0.18s, color 0.18s;
          cursor: pointer;
          border: none;
          outline: none;
          line-height: 1.2;
          white-space: nowrap;
          background: none;
        }
        .nav-item-dashboard .sidebar-icon {
          font-size: 21px;
          color: #fff !important;
          flex-shrink: 0;
          display: inline-block;
        }
        .nav-item-dashboard span {
          color: #fff !important;
          font-weight: 500;
          font-size: 1.08rem;
          display: inline-block;
        }
        .nav-item-dashboard.active,
        .nav-item-dashboard:hover,
        .nav-item-dashboard:focus-visible {
          background: #22304a;
          color: #0d6efd !important;
          text-decoration: none !important;
        }
        .nav-item-dashboard.active .sidebar-icon,
        .nav-item-dashboard:hover .sidebar-icon {
          color: #0d6efd !important;
        }
        .nav-item-dashboard.active span,
        .nav-item-dashboard:hover span {
          color: #0d6efd !important;
        }
        .sidebar-header {
          background: #182232;
          border-bottom: 1px solid #22304a !important;
        }
        .sidebar-logo {
          text-decoration: none !important;
          transition: opacity 0.2s;
        }
        .sidebar-logo:hover {
          opacity: 0.85;
        }
        .sidebar-action-btn {
          background: #0d6efd;
          border: none;
          color: #fff;
          letter-spacing: 1px;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(13,34,49,0.06);
          margin-top: 8px;
          width: 100%;
          border-radius: 50px;
          font-weight: 600;
          padding: 10px 0;
          transition: background 0.18s;
        }
        .sidebar-action-btn:hover {
          background: #1158d9;
        }
        .sidebar-menu-title {
          color: #8da1b9;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
          margin-left: 4px;
          margin-bottom: 8px;
          display: block;
        }
        .sidebar-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .sidebar-list li {
          margin-bottom: 2px;
        }
        .sidebar-footer {
          border-top: 1px solid #22304a;
        }
        /* Responsividade para acompanhar a dashboard */
        @media (max-width: 1200px) {
          .sidebar-dashboard {
            width: 180px !important;
          }
        }
        @media (max-width: 991.98px) {
          .sidebar-dashboard {
            display: none !important;
          }
        }
        @media (max-width: 700px) {
          .sidebar-dashboard {
            display: none !important;
          }
        }
        /* Ajustes para o botão e espaçamentos em telas menores */
        @media (max-width: 600px) {
          .sidebar-header {
            padding: 12px 6px 4px 6px !important;
          }
          .sidebar-action-btn {
            font-size: 14px;
            padding: 8px 0;
          }
          .nav-item-dashboard {
            font-size: 0.98rem;
            padding: 8px 12px;
            gap: 10px;
          }
          .sidebar-menu-title {
            font-size: 11px;
          }
        }
      `}</style>
    </aside>
  );
}