'use client'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";

export default function Dashboard() {
  const router = useRouter();
  const [usuarioLogado, setUsuarioLogado] = useState<{ username: string; avatar?: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (!user) {
      router.replace("/login");
    } else {
      setUsuarioLogado(JSON.parse(user));
    }
  }, [router]);

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

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
    window.location.href = "/login";
  };

  return (
    <div className="new-dashboard-root">
      <SidebarMenu />
      <div className="new-main-content">
        {/* Topbar */}
        <div className="new-dashboard-header">
          <div className="dashboard-title">Dashboard</div>
          <div className="dashboard-header-actions">
            <form className="dashboard-search">
              <input type="search" placeholder="Search..." />
              <svg className="search-icon" width="18" height="18" fill="#bbb" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.106a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
              </svg>
            </form>
            <div className="user-dropdown" ref={dropdownRef}>
              <span className="avatar" onClick={() => setDropdownOpen(open => !open)}>
                {usuarioLogado?.avatar
                  ? <img src={usuarioLogado.avatar} alt="Avatar" />
                  : <svg width="28" height="28" fill="#bbb" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                }
              </span>
              {dropdownOpen && (
                <div className="dropdown-menu show">
                  <div className="px-3 py-2 fw-semibold" style={{ color: "#222" }}>{usuarioLogado?.username}</div>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item text-danger" onClick={handleLogout}>Sair</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="new-dashboard-cards">
          <div className="new-dashboard-card">
            <div className="card-label">Total Revenue</div>
            <div className="card-main">
              <span className="main-value">$12,896</span>
              <span className="chip up">+3.67%</span>
            </div>
          </div>
          <div className="new-dashboard-card">
            <div className="card-label">Total Expense</div>
            <div className="card-main">
              <span className="main-value">$6,886</span>
              <span className="chip down">-2.6%</span>
            </div>
          </div>
          <div className="new-dashboard-card">
            <div className="card-label">Total Reservations</div>
            <div className="card-main">
              <span className="main-value">1874</span>
              <span className="chip up">+2.54%</span>
            </div>
          </div>
          <div className="new-dashboard-card">
            <div className="card-label">Occupied Table / h</div>
            <div className="card-main">
              <span className="main-value">75 %</span>
              <span className="chip down">-2.57%</span>
            </div>
          </div>
        </div>

        {/* Grids com widgets */}
        <div className="widgets-grid">
          {/* Reservas atuais */}
          <div className="widget widget-list">
            <div className="widget-header">
              <span>Current Reservations</span>
              <button className="widget-link">View All</button>
            </div>
            <div className="widget-list-items">
              <div className="reservation-row">
                <img src="https://randomuser.me/api/portraits/women/26.jpg" className="reservation-avatar" alt="Michelle" />
                <span className="reservation-name">Michelle Rivera</span>
                <span className="reservation-time">17:40</span>
                <span className="reservation-table">K-1</span>
                <span className="reservation-people">4 People</span>
                <span className="reservation-status confirmed">Confirmed</span>
                <button className="widget-link">Edit</button>
              </div>
              <div className="reservation-row">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="reservation-avatar" alt="Arlene" />
                <span className="reservation-name">Arlene McCoy</span>
                <span className="reservation-time">17:40</span>
                <span className="reservation-table">T-3</span>
                <span className="reservation-people">5 People</span>
                <span className="reservation-status confirmed">Confirmed</span>
                <button className="widget-link">Edit</button>
              </div>
              <div className="reservation-row">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" className="reservation-avatar" alt="Savannah" />
                <span className="reservation-name">Savannah Nguyen</span>
                <span className="reservation-time">17:40</span>
                <span className="reservation-table">K-1</span>
                <span className="reservation-people">3 People</span>
                <span className="reservation-status confirmed">Confirmed</span>
                <button className="widget-link">Edit</button>
              </div>
            </div>
          </div>

          {/* Gráfico 1 */}
          <div className="widget">
            <div className="widget-header">
              <span>Average Check Size (USD)</span>
              <div className="widget-tabs">
                <button className="widget-tab active">Weekly</button>
                <button className="widget-tab">Monthly</button>
              </div>
            </div>
            <div className="widget-graph">
              {/* SVG fake graph */}
              <svg width="100%" height="110">
                <polyline
                  fill="none"
                  stroke="#a78bfa" strokeWidth="3"
                  points="12,90 36,80 60,60 84,50 108,90 132,30 156,100 180,70 204,80"
                />
                <circle cx="132" cy="30" r="6" fill="#a78bfa" />
                <text x="140" y="30" fill="#424242" fontSize="13" fontWeight="bold">$70.68</text>
                <text x="128" y="47" fill="#bbb" fontSize="10">22 February</text>
              </svg>
            </div>
          </div>

          {/* Gráfico 2 */}
          <div className="widget">
            <div className="widget-header">
              <span>Reservations Per Day</span>
              <div className="widget-tabs">
                <button className="widget-tab active">Weekly</button>
                <button className="widget-tab">Monthly</button>
              </div>
            </div>
            <div className="widget-graph">
              {/* SVG fake bar chart */}
              <svg width="100%" height="110">
                {[10, 25, 60, 45, 50, 30, 20].map((val, i) => (
                  <rect key={i} x={18 + i*32} y={110-val} width="18" height={val} rx="5" fill="#4ade80" />
                ))}
                {"MonTueWedThuFriSatSun".match(/.{1,3}/g)?.map((d, i) => (
                  <text key={i} x={22 + i*32} y={105} fill="#888" fontSize="10">{d}</text>
                ))}
              </svg>
            </div>
          </div>

          {/* Tabela */}
          <div className="widget widget-table">
            <div className="widget-header">
              <span>Most Popular Menu Items</span>
              <div className="widget-tabs">
                <button className="widget-tab active">Weekly</button>
                <button className="widget-tab">Monthly</button>
              </div>
            </div>
            <table className="menu-table">
              <thead>
                <tr>
                  <th>Menu Item Name</th>
                  <th>Item Price</th>
                  <th>Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span role="img" aria-label="salmon">🐟</span> Grilled Salmon With Lemon ...</td>
                  <td>68$</td>
                  <td>4,500$</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="thai">🍜</span> Pad Thai With Chicken And ...</td>
                  <td>76$</td>
                  <td>4,500$</td>
                </tr>
                <tr>
                  <td><span role="img" aria-label="lobster">🦞</span> Lobster Bisque With Garlic ...</td>
                  <td>55$</td>
                  <td>4,500$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* CSS */}
      <style jsx>{`
        .new-dashboard-root {
          background: #f5f6f8;
          min-height: 100vh;
          display: flex;
        }
        .new-main-content {
          flex: 1;
          min-width: 0;
          min-height: 100vh;
          padding: 44px 40px 40px 40px;
          margin-left: 240px;
        }
        .new-dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .dashboard-title {
          font-size: 2rem;
          font-weight: bold;
          color: #222;
        }
        .dashboard-header-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .dashboard-search {
          position: relative;
        }
        .dashboard-search input {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 7px 38px 7px 16px;
          font-size: 1rem;
          color: #222;
          outline: none;
          transition: border 0.18s;
          width: 180px;
          min-width: 0;
        }
        .dashboard-search input:focus {
          border: 1.5px solid #a78bfa;
        }
        .search-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
        }
        .avatar {
          width: 40px;
          height: 40px;
          background: #e2e8f0;
          border-radius: 50%;
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dropdown-menu {
          position: absolute;
          top: 52px;
          right: 0;
          min-width: 180px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.17);
          padding: 10px 0;
          z-index: 2000;
          color: #222;
        }
        .dropdown-divider {
          border-top: 1px solid #eee;
          margin: 4px 0;
        }
        .dropdown-item {
          color: #e74c3c !important;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          padding: 8px 18px;
          font-size: 1rem;
        }
        /* Dashboard Cards */
        .new-dashboard-cards {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .new-dashboard-card {
          flex: 1 1 210px;
          min-width: 210px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          padding: 22px 22px 18px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border: 1.5px solid #f0f0f0;
        }
        .card-label {
          color: #7b8493;
          font-size: 1rem;
          margin-bottom: 2px;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .card-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .main-value {
          font-size: 2rem;
          font-weight: 700;
          color: #222;
        }
        .chip {
          font-size: 0.97rem;
          font-weight: 600;
          padding: 2.5px 9px;
          border-radius: 16px;
          margin-left: 5px;
          background: #f5f6f8;
        }
        .chip.up {
          color: #22c55e;
          background: #e9fbe3;
        }
        .chip.down {
          color: #f43f5e;
          background: #fbe9eb;
        }
        /* Widgets grid */
        .widgets-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 24px;
        }
        .widget {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          padding: 22px 22px 18px 22px;
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          border: 1.5px solid #f0f0f0;
          min-width: 0;
        }
        .widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          color: #222;
          margin-bottom: 18px;
          gap: 8px;
          flex-wrap: wrap;
        }
        .widget-link {
          background: none;
          border: none;
          color: #7b8493;
          padding: 0;
          font-size: 0.97rem;
          text-decoration: underline;
          cursor: pointer;
        }
        .widget-list-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .reservation-row {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.99rem;
          color: #222;
          background: #f7fafc;
          border-radius: 8px;
          padding: 8px 12px;
          flex-wrap: wrap;
        }
        .reservation-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }
        .reservation-name { min-width: 120px; font-weight: 600;}
        .reservation-time, .reservation-table, .reservation-people, .reservation-status { color: #555;}
        .reservation-status.confirmed { color: #22c55e; font-weight: 600; }
        .widget-tabs { display: flex; gap: 8px; flex-wrap: wrap;}
        .widget-tab {
          background: #f5f6f8;
          border: none;
          outline: none;
          color: #222;
          border-radius: 7px;
          padding: 4px 13px;
          font-weight: 500;
          cursor: pointer;
          font-size: 0.99rem;
          transition: background 0.18s;
          margin-top: 4px;
        }
        .widget-tab.active, .widget-tab:hover { background: #a78bfa; color: #fff;}
        .widget-graph { width: 100%; }
        .widget-table { grid-column: 1 / span 3; margin-top: 24px;}
        .menu-table { width: 100%; border-collapse: collapse; }
        .menu-table thead th {
          padding: 9px 0 9px 0;
          text-align: left;
          color: #7b8493;
          font-weight: 600;
          font-size: 1rem;
          border-bottom: 1.5px solid #f0f0f0;
        }
        .menu-table tbody td {
          padding: 11px 0 11px 0;
          font-size: 1.04rem;
          border-bottom: 1px solid #f5f6f8;
          color: #222;
        }
        .menu-table tbody tr:last-child td { border-bottom: none; }

        /* RESPONSIVO */
        @media (max-width: 1350px) {
          .widgets-grid { grid-template-columns: 1fr 1fr; }
          .widget-table { grid-column: 1 / span 2; }
        }
        @media (max-width: 1000px) {
          .widgets-grid { grid-template-columns: 1fr; }
          .widget-table { grid-column: 1 / span 1; }
        }
        @media (max-width: 900px) {
          .new-dashboard-cards {
            flex-direction: column;
            gap: 16px;
          }
        }
        @media (max-width: 700px) {
          .new-main-content {
            padding: 16px 4vw;
          }
          .new-dashboard-header {
            flex-direction: column;
            gap: 14px;
          }
        }
        @media (max-width: 600px) {
          .new-dashboard-root {
            flex-direction: column;
          }
          .new-main-content {
            margin-left: 0;
            padding: 10px 2vw;
          }
          .dashboard-title {
            font-size: 1.3rem;
          }
          .new-dashboard-card {
            min-width: 0;
            padding: 14px 10px 12px 10px;
          }
          .widget, .widget-table {
            padding: 14px 10px 12px 10px;
          }
          .reservation-row {
            font-size: 0.92rem;
            padding: 6px 3px;
            gap: 4px;
          }
          .menu-table thead th, .menu-table tbody td {
            font-size: 0.90rem;
          }
          .dashboard-search input {
            font-size: 0.92rem;
            padding: 6px 32px 6px 10px;
          }
        }
        @media (max-width: 480px) {
          .avatar { width: 32px; height: 32px; }
          .reservation-avatar { width: 24px; height: 24px; }
          .main-value { font-size: 1.1rem; }
        }
        @media (max-width: 991.98px) {
          .sidebar-dashboard { display: none !important; }
          .new-main-content { margin-left: 0; padding: 12px 5vw; }
        }
      `}</style>
    </div>
  );
}