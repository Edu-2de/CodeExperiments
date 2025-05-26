'use client'
import React from "react";

export default function SecaoDestaque() {
  return (
    <section
      className="py-5 position-relative"
      style={{
        background: "linear-gradient(120deg, #e3eafc 0%, #f5f8fd 100%)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 32px 0 rgba(13,110,253,0.06)",
      }}
    >
      {/* Elemento decorativo */}
      <div
        className="position-absolute top-0 end-0"
        style={{
          width: 180,
          height: 180,
          background: "radial-gradient(circle at 70% 30%, #0d6efd22 0%, transparent 80%)",
          zIndex: 1,
        }}
      />
      <div
        className="position-absolute bottom-0 start-0"
        style={{
          width: 140,
          height: 140,
          background: "radial-gradient(circle at 30% 70%, #6f42c122 0%, transparent 80%)",
          zIndex: 1,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <span
            className="fw-bold text-uppercase px-3 py-1"
            style={{
              background: "#e9f2f9",
              color: "#0d6efd",
              borderRadius: 12,
              letterSpacing: 2,
              fontSize: 13,
            }}
          >
            Destaques
          </span>
          <h2 className="fw-bold mt-3 mb-2" style={{ color: "#0d1721", fontSize: 36 }}>
            Por que escolher o <span style={{ color: "#0d6efd" }}>ContabApp?</span>
          </h2>
          <p className="lead text-secondary mb-0" style={{ maxWidth: 600, margin: "0 auto" }}>
            Tudo o que você precisa para controlar suas finanças em um só lugar, com praticidade, segurança e tecnologia de ponta.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-4 d-flex">
            <div className="card border-0 shadow-sm flex-fill destaque-card h-100" style={{ background: "#fff", borderRadius: 18 }}>
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <span
                    className="d-inline-flex justify-content-center align-items-center rounded-circle shadow"
                    style={{
                      background: "linear-gradient(135deg, #e3eafc 60%, #0d6efd22 100%)",
                      width: 72,
                      height: 72,
                    }}
                  >
                    <svg width="38" height="38" fill="#0d6efd" viewBox="0 0 16 16">
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"/>
                      <path d="M4 8a.5.5 0 0 1 .5-.5h3.793l-2.147-2.146a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L8.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </span>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#0d6efd", fontSize: 22 }}>Controle Total</h5>
                <p className="text-secondary mb-0" style={{ fontSize: 17 }}>
                  Visualize receitas, despesas, saldos e relatórios detalhados em tempo real. Tudo organizado, intuitivo e fácil de entender.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card border-0 shadow-sm flex-fill destaque-card h-100" style={{ background: "#fff", borderRadius: 18 }}>
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <span
                    className="d-inline-flex justify-content-center align-items-center rounded-circle shadow"
                    style={{
                      background: "linear-gradient(135deg, #e3eafc 60%, #19875422 100%)",
                      width: 72,
                      height: 72,
                    }}
                  >
                    <svg width="38" height="38" fill="#198754" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"/>
                      <path d="M4.646 8.354a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#198754", fontSize: 22 }}>Segurança Avançada</h5>
                <p className="text-secondary mb-0" style={{ fontSize: 17 }}>
                  Dados protegidos com criptografia de ponta a ponta, autenticação em dois fatores e backups automáticos. Sua privacidade é prioridade.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card border-0 shadow-sm flex-fill destaque-card h-100" style={{ background: "#fff", borderRadius: 18 }}>
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <span
                    className="d-inline-flex justify-content-center align-items-center rounded-circle shadow"
                    style={{
                      background: "linear-gradient(135deg, #e3eafc 60%, #6f42c122 100%)",
                      width: 72,
                      height: 72,
                    }}
                  >
                    <svg width="38" height="38" fill="#6f42c1" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/>
                      <path d="M4.5 8a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6A.5.5 0 0 1 4.5 8z"/>
                    </svg>
                  </span>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#6f42c1", fontSize: 22 }}>Acesso Inteligente</h5>
                <p className="text-secondary mb-0" style={{ fontSize: 17 }}>
                  Plataforma responsiva, disponível 24h, com login social e integração com apps. Use onde e quando quiser, sem limites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .destaque-card {
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .destaque-card:hover {
          transform: translateY(-8px) scale(1.035);
          box-shadow: 0 12px 36px 0 rgba(13,110,253,0.13);
        }
      `}</style>
    </section>
  );
}