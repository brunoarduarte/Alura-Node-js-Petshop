const moment = require('moment');
const axios = require('axios');
const conexao = require('../infrastructure/database/conexao');
const repositorio = require('../repositories/atendimentos');

class Atendimento {
  constructor() {

    this.dataEhValida = ({ data, dataCriacao }) =>  moment(data).isSameOrAfter(dataCriacao);
    this.clienteEhValido = (tamanho) => tamanho >= 5;
    this.valida = (parametros) => this.validacoes.filter((campo) => {
      const { nome } = campo;
      const parametro = parametros[nome];

      return !campo.valido(parametro)
    });

    this.validacoes = [
      {
      nome: 'data',
      valido: this.dataEhValida,
      mensagem: 'A data deve ser maior ou igual à data atual.'
      },
      {
        nome: 'cliente',
        valido: this.clienteEhValido,
        mensagem: 'O campo cliente deve ter, ao menos, 5 caracteres.'
      }
    ]
  }
  adiciona(atendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');

    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

    const parametros = {
      data: { data, dataCriacao },
      cliente: { tamanho: atendimento.cliente.length }
    };

    const erros = this.valida(parametros);

    const existemErros = erros.length;

    if(existemErros) {
      return new Promise((_resolve, reject) => reject(erros))
    } else {
      const atendimentoDatado = {...atendimento, dataCriacao, data};
      return repositorio.adiciona(atendimentoDatado)
      .then((resultados) => {
        const id = resultados.insertId;
          return { ...atendimento, id };
        });
    }
  };

  lista(res) {
   return repositorio.lista();   
  };

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

    conexao.query(sql, async (erro, resultados) => {
      const atendimento = resultados[0];
      const cpf = atendimento.cliente;
      if(erro) {
        res.status(400).json(erro);
      } else {
        const { data } = await axios.get(`http://localhost:8082/${cpf}`);
        atendimento.cliente = data;
        res.status(200).json(atendimento);
      }
    })
  };

  altera(id, valores, res) {
    if(valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }
    const sql = `UPDATE Atendimentos SET ? WHERE id = ?`;

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({...valores, id})
      }
    })
  };

  deleta(id, res) {
    const sql = 'DELETE FROM Atendimentos WHERE id = ?';

    conexao.query(sql, id, (erro, resultados) => {
      if(erro){
        res.status(400).json(erro);
      } else {
        res.status(200).json(`Removido cliente id: ${id}`);
      }
    })
  };
};

module.exports = new Atendimento;
