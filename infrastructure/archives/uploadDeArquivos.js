const fs = require('fs');
const path = require('path');

// Buffer
// fs.readFile('./assets/salsicha.png', (error, buffer) => {
//   console.log('imagem bufferizada');

//   fs.writeFile('./assets/salsicha2.png', buffer, (error) => {
//     console.log('imagem escrita');
//   })
// })

// Stream
module.exports = (way, fileName, callbackCreatedImage) => {
  const validTypes = ['jpg', 'png', 'jpeg'];
  const type = path.extname(way);
  const isValidType = validTypes.indexOf(type.substring(1)) === -1;
  const newWay = `./assets/imagens/${fileName}${type}`;

  if (isValidType) {
    const erro = 'Tipo é inválido';
    console.log('Erro! Tipo inválido');
    callbackCreatedImage(erro);
  } else {
    fs.createReadStream(way)
    .pipe(fs.createWriteStream(newWay))
    .on('finish', () => callbackCreatedImage(false, newWay));
  }
};
