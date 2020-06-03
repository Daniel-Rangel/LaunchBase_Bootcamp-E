const fs = require('fs')
const data = require('./data.json')

//show
exports.show = function(req, res){
    const { id } = req.params

    const foudInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foudInstructor) return res.send("instructor not found")

    function age(timestamp) {
        const today = new Date() // dia atual
        const brithDate = new Date(timestamp) // dia do anivesario
    
        //informa quando anos tem
        let age = today.getFullYear() - brithDate.getFullYear()
        const month = today.getMonth() - brithDate.getMonth()
        
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= brithDate.getDate()){
            age = age -1
        }
        
        return age
    }

    const instructor = {
        ...foudInstructor,
        age: age(foudInstructor.birth),
        services: foudInstructor.services.split(','),
        created_at:''
    }


    return res.render("instructors/show", { instructor  })
}

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