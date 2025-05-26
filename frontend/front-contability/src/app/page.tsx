import Header from "../components/Header";
import Hero from "../components/Hero";
import SecaoDestaque from "../components/SecaoDestaque";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-white min-vh-100">
        <div className="container">
        <SecaoDestaque />

       

          {/* Seção Sobre */}
          <section className="row align-items-center my-5 py-4" style={{ background: "#f0f4fa", borderRadius: 18 }}>
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/img/dashboard-exemplo.png"
                alt="Dashboard ContabApp"
                className="img-fluid rounded shadow"
                style={{ maxHeight: 320, objectFit: "cover", border: "4px solid #e3eafc" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>O que é o ContabApp?</h3>
              <p className="text-secondary mb-3 fs-5">
                O ContabApp é uma plataforma online para controle financeiro pessoal e empresarial. Organize suas finanças, acompanhe receitas e despesas, gere relatórios e tome decisões melhores para o seu futuro.
              </p>
              <ul className="list-unstyled text-secondary mb-3 fs-6">
                <li>✔️ Cadastro de receitas e despesas</li>
                <li>✔️ Relatórios automáticos</li>
                <li>✔️ Multiusuário e multiempresa</li>
                <li>✔️ Interface simples e intuitiva</li>
              </ul>
              <a href="/registro" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm">
                Comece agora grátis
              </a>
            </div>
          </section>

          {/* Seção Planos */}
          <section className="row my-5">
            <div className="col-12 text-center mb-4">
              <h3 className="fw-bold" style={{ color: "#0d6efd" }}>Planos para todos os perfis</h3>
              <p className="text-secondary">Escolha o plano ideal para você ou sua empresa</p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100" style={{ background: "#f5f8fd" }}>
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2" style={{ color: "#198754" }}>Gratuito</h5>
                  <p className="text-secondary mb-3">Ideal para quem está começando</p>
                  <ul className="list-unstyled mb-3">
                    <li>✔️ 1 usuário</li>
                    <li>✔️ 1 empresa</li>
                    <li>✔️ Relatórios básicos</li>
                  </ul>
                  <span className="fw-bold fs-4" style={{ color: "#198754" }}>R$ 0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100" style={{ background: "#e3eafc" }}>
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2" style={{ color: "#0d6efd" }}>Profissional</h5>
                  <p className="text-secondary mb-3">Para quem precisa de mais recursos</p>
                  <ul className="list-unstyled mb-3">
                    <li>✔️ Até 5 usuários</li>
                    <li>✔️ Multiempresa</li>
                    <li>✔️ Relatórios avançados</li>
                  </ul>
                  <span className="fw-bold fs-4" style={{ color: "#0d6efd" }}>R$ 29/mês</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100" style={{ background: "#f5f8fd" }}>
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-2" style={{ color: "#6f42c1" }}>Empresarial</h5>
                  <p className="text-secondary mb-3">Para empresas de qualquer porte</p>
                  <ul className="list-unstyled mb-3">
                    <li>✔️ Usuários ilimitados</li>
                    <li>✔️ Suporte prioritário</li>
                    <li>✔️ Integrações e API</li>
                  </ul>
                  <span className="fw-bold fs-4" style={{ color: "#6f42c1" }}>R$ 99/mês</span>
                </div>
              </div>
            </div>
          </section>

          {/* Seção FAQ */}
          <section className="row my-5">
            <div className="col-12 text-center mb-4">
              <h3 className="fw-bold" style={{ color: "#0d6efd" }}>Perguntas Frequentes</h3>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm p-4 h-100 border" style={{ borderColor: "#e3eafc" }}>
                <h6 className="fw-bold mb-2" style={{ color: "#0d6efd" }}>É seguro usar o ContabApp?</h6>
                <p className="text-secondary mb-0">
                  Sim! Seus dados são criptografados e protegidos com as melhores práticas de segurança.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm p-4 h-100 border" style={{ borderColor: "#e3eafc" }}>
                <h6 className="fw-bold mb-2" style={{ color: "#0d6efd" }}>Posso acessar pelo celular?</h6>
                <p className="text-secondary mb-0">
                  Sim, o ContabApp funciona em qualquer dispositivo, basta acessar pelo navegador.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm p-4 h-100 border" style={{ borderColor: "#e3eafc" }}>
                <h6 className="fw-bold mb-2" style={{ color: "#0d6efd" }}>Tem suporte?</h6>
                <p className="text-secondary mb-0">
                  Sim, oferecemos suporte por e-mail e chat para todos os planos pagos.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm p-4 h-100 border" style={{ borderColor: "#e3eafc" }}>
                <h6 className="fw-bold mb-2" style={{ color: "#0d6efd" }}>Como começo a usar?</h6>
                <p className="text-secondary mb-0">
                  Basta criar sua conta gratuitamente e começar a cadastrar suas receitas e despesas!
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer className="text-center my-5 text-muted small">
          &copy; {new Date().getFullYear()} <span style={{ color: "#0d6efd" }}>ContabApp</span>. Todos os direitos reservados.
        </footer>
      </main>
    </>
  );
}