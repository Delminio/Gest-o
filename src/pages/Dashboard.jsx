import { Clock, Users, FileText, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const cards = [
    { title: "Clientes ativos", value: "128", icon: <Users /> },
    { title: "Processos", value: "342", icon: <FileText /> },
    { title: "Prazos próximos", value: "19", icon: <Clock /> },
    { title: "Urgentes", value: "6", icon: <AlertTriangle /> },
  ];

  return (
    <section>
      <div className="grid">
        {cards.map((card) => (
          <div className="card" key={card.title}>
            <div className="card-icon">{card.icon}</div>
            <span>{card.title}</span>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>Prazos críticos</h3>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Processo</th>
              <th>Prazo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empresa Almeida LTDA</td>
              <td>Trabalhista</td>
              <td>28/06/2026</td>
              <td><span className="badge danger">Urgente</span></td>
            </tr>
            <tr>
              <td>João Pereira</td>
              <td>Cível</td>
              <td>30/06/2026</td>
              <td><span className="badge warning">Atenção</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
