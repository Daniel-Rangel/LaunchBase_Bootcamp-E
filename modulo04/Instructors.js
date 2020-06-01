const fs = require('fs')
const data = require('./data.json')

exports.post = function(req,res){
    /* vlaidação */
    const keys = Object.keys(req.body)
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send("por favor, preencha todos os campos")
        }
    }
    /* descontrução de array */
    let {avatar_url, name, birth, gender, services} = req.body
    /* tratamento de dados adicionando mais informação */
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)
    /* organizando dados para ser enviados */
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("erro ao escrever")
        return res.redirect("/instructors")
    })
}