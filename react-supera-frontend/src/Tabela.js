function Tabela({ vetor }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Dados</th>
          <th>Valentia</th>
          <th>Tipo</th>
          <th>Nome operador transacionado</th>
        </tr>
      </thead>

      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{obj.data_transferencia}</td>
            <td>{obj.valor}</td>
            <td>{obj.tipo}</td>
            <td>{obj.nome_operador_transacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
