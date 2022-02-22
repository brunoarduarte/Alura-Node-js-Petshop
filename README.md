# Bem vindo ao meu projeto Alura Petshop
### Este repositório foi criado no curso NodeJS: Avançando em APIs REST com controle de versões na Alura.
O projeto consiste na criação do back-end para integração com o banco de dados MYSQL. O algoritmo faz a gestão dos atendimentos realizados por um pet shop, bem como o cadastro dos pets.

A arquitetura utilizada foi a MVC (Model/View/Controller) .

## Ambiente de desenvolvimento:
- IDE VSCode 1.64.2
- node v14.18.2
- Linux Ubuntu 20.04.3 LTS

## Dependências:
- "body-parser": "^1.19.0",
- "consign": "^0.1.6",
- "dayjs": "^1.10.7",
- "express": "^4.17.1",
- "moment": "^2.29.1",
- "my": "^0.3.3",
- "mysql": "^2.18.1",
- "mysql2": "^2.3.0",
- "sql": "^0.78.0"

## Dependência de Desenvolvimento:
- "nodemon": "^2.0.13"

## Instruções para clonagem e Execução:
- Utilizando o terminal, na sua pasta destino, execute o comando _git init_ para iniciar o git no seu local.
- Clone  projeto utilizando o comando _git@github.com:brunoarduarte/Alura-Node-js-Petshop.git_.
- Acesse a pasta _NodeJS_API com Express e MySQL_
- Instale as dependência do projeto utilizando o comando _npm install_
- Abra o projeto no VsCode utilizando o comando _code ._
- No terminal execute o comando _npm start_ para inicializar o servidor local
- Certifique-se de ter o MySQL devidamente instalado em sua máquina
- Crie um arquivo .env na raiz do projeto com as variáveis _DB_USERNAME = (seu usuário MySQL)_ e _DB_PASSWORD = (Sua senha do MySQL)_
- Recomenda-se utilizar o Postman para testar as requisições
- Caso a porta 3000 esteja ocupada, recomenda-se utilizar o comando _killall node_ no terminal, liberando a porta 3000.
