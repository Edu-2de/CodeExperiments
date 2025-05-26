'use client'
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="w-100 min-vh-100 d-flex flex-column flex-md-row align-items-stretch position-relative overflow-hidden"
    >
      {/* Conteúdo à esquerda */}
      <div
        className="d-flex flex-column justify-content-center col-12 col-md-7 px-4 px-lg-5 py-5"
        style={{ zIndex: 2, backgroundColor: "#0d1721", flexBasis: "0", flexGrow: 1, maxWidth: "100%" }}
      >
        <div className="mx-auto" style={{ maxWidth: 600, width: "100%" }}>
          <span
            className="d-none d-xl-inline-block border border-secondary fw-bold small px-3 py-1 mb-3 text-uppercase"
            style={{
              backgroundColor: "rgba(191,162,90,0.08)",
              borderColor: "#a0a7b1",
              color: "#a0a7b1",
              letterSpacing: 2,
            }}
          >
            Consultoria Financeira
          </span>
          <h1 className="display-4 mb-3 lh-base text-white text-center text-md-start fw-bold">
            Garanta o seu <span style={{ color: "#e9f2f9" }}>Futuro Financeiro</span>
          </h1>
          {/* Subtítulo só em md+ */}
          <p className="text-secondary fs-5 mb-4 text-center text-md-start d-none d-md-block" style={{ lineHeight: 1.6 }}>
            Conte com especialistas para crescer: planejamento, gestão e tecnologia para transformar sua vida financeira.
          </p>
          <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 mb-5 justify-content-center justify-content-md-start">
            <a
              href="#contato"
              className="btn fw-bold rounded-pill px-4 py-2 shadow-sm"
              style={{
                background: "#e9f2f9",
                color: "#0d1019",
                border: "none",
              }}
            >
              Comece agora
            </a>
            <a
              href="tel:+555199999999"
              className="btn fw-semibold rounded-pill px-3 py-2"
              style={{ background: "#0d1721", color: "#fff", border: "none" }}
            >
              Ligue: (51) 99999-9999
            </a>
          </div>
          {/* Estatísticas só em lg+ */}
          <div className="d-none d-lg-flex gap-4 gap-md-5 flex-wrap text-secondary mt-4 mb-2 justify-content-center justify-content-md-start">
            <div className="text-center text-md-start">
              <div className="fs-1 text-white fw-bold">15%</div>
              <div className="fs-6">Crescimento anual</div>
            </div>
            <div className="text-center text-md-start">
              <div className="fs-1 text-white fw-bold">90%</div>
              <div className="fs-6">Clientes recorrentes</div>
            </div>
            <div className="text-center text-md-start">
              <div className="fs-1 text-white fw-bold">12+</div>
              <div className="fs-6">Anos de atuação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem à direita */}
      <div className="position-relative d-none d-md-block col-md-5 min-vh-100 p-0" style={{ flexBasis: "0", flexGrow: 1, maxWidth: "100%" }}>
        <Image
          src="/computador.jpg"
          alt="Consultoria financeira"
          fill
          className="object-fit-cover"
          style={{ filter: "brightness(0.7)" }}
          priority
        />
        {/* Overlay sutil para escurecer a imagem */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(80deg,rgba(16,24,47,0.18) 30%,rgba(191,162,90,0.04) 100%)",
          }}
        />
      </div>
    </section>
  )
}