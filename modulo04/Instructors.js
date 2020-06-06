const fs = require('fs')
const data = require('./data.json')
const { age , date} = require('./utils')
const Intl = require('intl')


//creat
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

//show
exports.show = function(req, res){
    const { id } = req.params

    const foudInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foudInstructor) return res.send("instructor not found")

    
    const instructor = {
        ...foudInstructor,
        age: age(foudInstructor.birth),
        services: foudInstructor.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foudInstructor.created_at)
    }


    return res.render("instructors/show", { instructor  })
}

//edit
exports.edit = function(req , res){
    const { id } = req.params

    const foudInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foudInstructor) return res.send("instructor not found")

    const instructor = {
        ...foudInstructor,
        birth: date(foudInstructor.birth)
    }
    
    return res.render('instructors/edit', { instructor  })
}

//put
exports.put = function(req,res){
    const { id } = req.body
    let index = 0

    const foudInstructor = data.instructors.find(function(instructor, foundIndex){
        if(id == instructor.id){
            index = foundIndex
            return true
        }
    })

    if(!foudInstructor) return res.send("instructor not found")

    const instructor = {
        ...foudInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.instructors[index] = instructor

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('write error ')
    })

    res.redirect(`/instructors/${id}`)
}

//delet
exports.delete = function (req, res){
    const { id } = req.body

    const filteredInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.instructors = filteredInstructors

    fs.writeFile('data.json', JSON.stringify(data,null, 2), function(err){
        if (err) return res.send('erro ao deletear')
    })

    return res.redirect('/instructors')

}