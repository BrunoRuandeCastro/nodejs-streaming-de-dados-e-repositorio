class Tabelas {
    init (conexao){
        this.conexao = conexao
        
        this.criarAtendimentos()
        this.criarPCs()
    }
    

criarAtendimentos(){
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, maquina varchar (20), servico varchar(20) NOT NULL,data datetime NOT NULL,dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

    
        this.conexao.query(sql, erro =>{
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela Atendimentos criada!')
            }   
    })
}

criarPCs() {
    const query = 'CREATE TABLE IF NOT EXISTS PCs (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'
    
    this.conexao.query(query,erro =>{
        if(erro){
            console.log(erro)
        } else {
            console.log('Tabela de PCs foi criada com sucesso!')
        }
    })
}
}

module.exports = new Tabelas





