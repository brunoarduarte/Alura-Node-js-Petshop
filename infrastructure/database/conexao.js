const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'agenda_petshop'
});

module.exports = conexao;
