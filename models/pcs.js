const conexao = require ('../infraestrutura/database/conexao')
const uploadDeArquivos = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pc {
    adiciona(pc,res){
        const query = 'INSERT INTO PCs SET ?'

        uploadDeArquivos (pc.imagem, pc.nome, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({erro})
            }else {
                const novoPc = {nome: pc.nome, imagem: novoCaminho}
                
                conexao.query(query,novoPc,erro => {
                    if(erro){
                        console.log(erro)
                        res.status(400).json(erro)
                    }else {
                        res.status(200).json(pc)
                    }
                })
            } 
        })
}
}
module.exports = new Pc