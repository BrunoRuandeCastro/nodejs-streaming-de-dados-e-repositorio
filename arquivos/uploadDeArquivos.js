const fs = require ('fs')


    fs.createReadStream ('./assets/notebookceleron.jpg')
        .pipe(fs.createWriteStream('./assets/notebook-stream.jpg'))
        .on('finish', ()=> console.log('Imagem foi escrita com sucesso!'))



