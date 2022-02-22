class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
    this.criarPets();
  }

  criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id INT PRIMARY KEY AUTO_INCREMENT, cliente VARCHAR(11) NOT NULL, pet VARCHAR(50) NOT NULL, servico VARCHAR(50) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observacoes VARCHAR(500))';

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro);
      } else {
        console.log('Tabela de atendimentos criada com sucesso');
      }
    });
  };

  criarPets () {
    const query = 'CREATE TABLE IF NOT EXISTS Pets (id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200))';

    this.conexao.query(query, erro => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabela Pets foi criada com sucesso');
      }
    });
  }
}

module.exports = new Tabelas;