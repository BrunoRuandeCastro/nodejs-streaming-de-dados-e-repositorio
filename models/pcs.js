const conexao = require ('../infraestrutura/conexao')

class Pc {
    adiciona(pc,res){
        const query = 'INSET INTO PCs SET ?'

        conexao.query(query,pc,erro=>{
            if(erro){
                console.log(erro)
                res.status(400).json(erro)
            } else {
                res.status(200).json(pc)
            }
        })
module.exports = new Pc

    }
}