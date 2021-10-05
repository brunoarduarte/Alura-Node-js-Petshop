class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id INT PRIMARY KEY AUTO_INCREMENT, cliente VARCHAR(150) NOT NULL, pet VARCHAR(50) NOT NULL, servico VARCHAR(50) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observacoes VARCHAR(500))';

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro);
      } else {
        console.log('Tabela de atendimentos criada com sucesso');
      }
    })
  }
}

module.exports = new Tabelas;