const conexao = require('../infrastructure/database/conexao');
const fileUpload = require('../infrastructure/archives/uploadDeArquivos');

class Pet {
  adiciona(pet, res) {
    const query = 'INSERT INTO Pets SET ?';
    
    fileUpload(pet.imagem, pet.nome, (erro, newWay) => {
      if (erro) {
        res.status(400).json({ erro });
      } else {
        const newPet = {
          nome: pet.nome,
          imagem: newWay
        }
        conexao.query(query, newPet, (erro) => {
          if (erro) {
            res.status(400).json(erro);
          } else {
            res.status(201).json(newPet);
          }
        });
      }      
    });
  };
};

module.exports = new Pet();
