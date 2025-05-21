'use client'
import Image from "next/image"

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        width: "100vw",
        minHeight: "500px",
        background: "#0d1721",
        color: "#fff",
        display: "flex",
        alignItems: "stretch",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      {/* Conteúdo à esquerda */}
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          flex: "1 1 0",
          maxWidth: "50%",
          width: "100%",
          padding: "64px 32px 56px 7vw",
          zIndex: 2,
          background: "#0d1721",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              background: "rgba(191,162,90,0.08)",
              color: "#bfa25a",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "4px 14px",
              borderRadius: 8,
              marginBottom: 24,
              letterSpacing: 1,
              textTransform: "uppercase"
            }}
          >
            Consultoria Financeira
          </span>
        </div>
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            margin: "18px 0 18px 0",
            lineHeight: 1.18,
            color: "#fff"
          }}
        >
          Garanta o seu Futuro Financeiro com a <span style={{ color: "#bfa25a" }}>ContabApp</span>
        </h1>
        <p style={{
          color: "#b4bcd0",
          fontSize: "1.12rem",
          marginBottom: 32,
          maxWidth: 480
        }}>
          Conte com especialistas para crescer: planejamento, gestão e tecnologia para transformar sua vida financeira.
        </p>
        <div className="d-flex flex-wrap gap-3 mb-5">
          <a
            href="#contato"
            className="btn"
            style={{
              background: "#bfa25a",
              color: "#0d1019",
              fontWeight: 700,
              borderRadius: 6,
              padding: "10px 28px",
              fontSize: "1rem",
              boxShadow: "0 2px 12px #bfa25a22"
            }}
          >
            Fale com um especialista
          </a>
          <a
            href="tel:+555199999999"
            className="btn"
            style={{
              background: "#19213c",
              color: "#fff",
              fontWeight: 600,
              borderRadius: 6,
              padding: "10px 22px",
              fontSize: "1rem",
              border: "1px solid #344169"
            }}
          >
            Ligue: (51) 99999-9999
          </a>
        </div>
        <div className="d-flex gap-5 mt-2 flex-wrap" style={{ color: "#b4bcd0" }}>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>15%</div>
            <div style={{ fontSize: "0.95rem" }}>Crescimento anual</div>
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>90%</div>
            <div style={{ fontSize: "0.95rem" }}>Clientes recorrentes</div>
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>12+</div>
            <div style={{ fontSize: "0.95rem" }}>Anos de atuação</div>
          </div>
        </div>
      </div>

      {/* Imagem à direita */}
      <div
        className="position-relative d-none d-md-block"
        style={{
          flex: "1 1 0",
          minWidth: 0,
          minHeight: "500px",
          width: "100%",
        }}
      >
        <Image
          src="/cidade.jpg"
          alt="Consultoria financeira"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.7)",
          }}
          priority
        />
        {/* Overlay sutil para escurecer a imagem */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(80deg,rgba(16,24,47,0.15) 30%,rgba(191,162,90,0.04) 100%)"
          }}
        />
      </div>
    </section>
  )
}