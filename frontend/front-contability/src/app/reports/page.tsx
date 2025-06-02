'use client'
import Link from "next/link";
import SidebarMenu from "../../../components/SidebarMenu";
import { FaArrowLeft } from "react-icons/fa";

export default function ReportsPage() {
  return (
    <div className="new-dashboard-root">
      <SidebarMenu />
      <div className="new-main-content">
        <div className="new-dashboard-header">
          <div className="d-flex align-items-center gap-3">
            <Link href="/dashboard" className="btn btn-light d-flex align-items-center gap-2">
              <FaArrowLeft /> Voltar
            </Link>
            <div className="dashboard-title">Relatórios</div>
          </div>
        </div>
        <div className="reports-content">
          <h2>Relatórios Financeiros</h2>
          <p>
            Aqui você poderá visualizar e exportar relatórios detalhados das suas receitas, despesas e saldo.
          </p>
          <div className="report-placeholder">
            <span>Em breve gráficos e filtros avançados!</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .reports-content {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          padding: 32px 24px;
          margin-top: 24px;
        }
        .report-placeholder {
          margin-top: 32px;
          padding: 40px 0;
          text-align: center;
          color: #7b8493;
          font-size: 1.2rem;
          background: #f7fafc;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}