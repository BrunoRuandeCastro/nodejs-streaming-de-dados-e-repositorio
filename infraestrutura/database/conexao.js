const mysql = require ('mysql2')

const conexao = mysql.createConnection({

    host: '127.0.0.1',
    port: 3360,
    user: 'root',
    password: 'root',
    database: 'aula-node',
})

module.exports = conexao