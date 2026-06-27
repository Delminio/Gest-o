import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Users, Clock, Scale, Settings } from "lucide-react";

export default function Layout() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">⚖</div>
          <div>
            <h1>LexPrime</h1>
            <span>Gestão Jurídica Premium</span>
          </div>
        </div>

        <nav>
          <NavLink to="/dashboard"><LayoutDashboard size={20} /> Dashboard</NavLink>
          <NavLink to="/clientes"><Users size={20} /> Clientes</NavLink>
          <NavLink to="/prazos"><Clock size={20} /> Prazos</NavLink>
          <a><Scale size={20} /> Processos</a>
          <a><Settings size={20} /> Configurações</a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h2>Escritório Jurídico</h2>
            <p>Controle estratégico de clientes, processos e prazos.</p>
          </div>
          <button>Novo prazo</button>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
