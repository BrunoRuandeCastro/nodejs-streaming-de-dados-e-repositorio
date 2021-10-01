const Pc = require ('../models/pcs')

module.exports = app => {
    app.post('/pc',(req,res)=> {
        const  pc = req.body

       Pc.adiciona(pc,res)
    })
}