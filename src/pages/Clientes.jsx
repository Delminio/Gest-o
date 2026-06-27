import { useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([
    { nome: "Empresa Almeida LTDA", tipo: "Pessoa Jurídica", telefone: "(82) 99999-0000", status: "Ativo" },
    { nome: "João Pereira", tipo: "Pessoa Física", telefone: "(82) 98888-0000", status: "Ativo" },
  ]);

  const [nome, setNome] = useState("");

  function adicionarCliente() {
    if (!nome.trim()) return;

    setClientes([
      ...clientes,
      {
        nome,
        tipo: "Pessoa Física",
        telefone: "Não informado",
        status: "Ativo",
      },
    ]);

    setNome("");
  }

  return (
    <section className="panel">
      <div className="section-head">
        <div>
          <h3>Clientes</h3>
          <p>Cadastro e acompanhamento de clientes do escritório.</p>
        </div>
      </div>

      <div className="form-row">
        <input
          placeholder="Nome do cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={adicionarCliente}>Adicionar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Telefone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.tipo}</td>
              <td>{cliente.telefone}</td>
              <td><span className="badge success">{cliente.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
