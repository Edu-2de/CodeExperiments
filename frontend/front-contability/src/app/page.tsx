import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-light min-vh-100">
        <div className="container">
          <Hero />

          {/* Seção de destaque */}
          <section className="row my-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-2">Controle Total</h5>
                  <p className="text-secondary">
                    Veja receitas, despesas e relatórios detalhados em poucos cliques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-2">Segurança</h5>
                  <p className="text-secondary">
                    Seus dados protegidos com criptografia de ponta a ponta.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-2">Acesso Fácil</h5>
                  <p className="text-secondary">
                    Use em qualquer dispositivo, onde e quando quiser.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="text-center my-5 text-muted small">
          &copy; {new Date().getFullYear()} ContabApp. Todos os direitos reservados.
        </footer>
      </main>
    </>
  );
}