import { useState } from "react";

export default function Prazos() {
  const [prazos, setPrazos] = useState([
    {
      cliente: "Empresa Almeida LTDA",
      descricao: "Apresentar contestação",
      data: "2026-06-28",
      prioridade: "Urgente",
    },
  ]);

  const [form, setForm] = useState({
    cliente: "",
    descricao: "",
    data: "",
    prioridade: "Normal",
  });

  function adicionarPrazo() {
    if (!form.cliente || !form.descricao || !form.data) return;

    setPrazos([...prazos, form]);
    setForm({ cliente: "", descricao: "", data: "", prioridade: "Normal" });
  }

  return (
    <section className="panel">
      <h3>Controle de Prazos</h3>
      <p>Gerencie prazos processuais e compromissos jurídicos.</p>

      <div className="form-grid">
        <input
          placeholder="Cliente"
          value={form.cliente}
          onChange={(e) => setForm({ ...form, cliente: e.target.value })}
        />

        <input
          placeholder="Descrição do prazo"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        />

        <input
          type="date"
          value={form.data}
          onChange={(e) => setForm({ ...form, data: e.target.value })}
        />

        <select
          value={form.prioridade}
          onChange={(e) => setForm({ ...form, prioridade: e.target.value })}
        >
          <option>Normal</option>
          <option>Atenção</option>
          <option>Urgente</option>
        </select>

        <button onClick={adicionarPrazo}>Adicionar prazo</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Prioridade</th>
          </tr>
        </thead>
        <tbody>
          {prazos.map((prazo, index) => (
            <tr key={index}>
              <td>{prazo.cliente}</td>
              <td>{prazo.descricao}</td>
              <td>{prazo.data}</td>
              <td>
                <span className={`badge ${
                  prazo.prioridade === "Urgente" ? "danger" :
                  prazo.prioridade === "Atenção" ? "warning" : "success"
                }`}>
                  {prazo.prioridade}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
