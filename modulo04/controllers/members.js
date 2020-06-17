const fs = require('fs')
const data = require('../data.json')
const { age , date} = require('../utils')
const Intl = require('intl')

exports.index = function(req, res){
    return res.render('members/index', {members : data.members})
}

exports.create = function(req, res){
    return res.render('members/create')
}

exports.show = function(req, res){
    const { id } = req.params

    const foudMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foudMember) return res.send("member not found")

    
    const member = {
        ...foudMember,
        age: age(foudMember.birth),
    }


    return res.render("members/show", { member  })
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
    const id = Number(data.members.length + 1)
    /* organizando dados para ser enviados */
    data.members.push({
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
        return res.redirect("/members")
    })
}

exports.edit = function(req , res){
    const { id } = req.params

    const foudMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foudMember) return res.send("member not found")

    const member = {
        ...foudMember,
        birth: date(foudMember.birth),
    }
    
    return res.render('members/edit', { member })
}

exports.put = function(req,res){
    const { id } =  req.body
    console.log(id)
    let index = 0
    const foudMember = data.members.find(function(member, foundIndex){
        if(id == member.id){
            index = foundIndex
            return true
        }
    })

    if(!foudMember) return res.send("member not found-edit")

    const member = {
        ...foudMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }
    data.members[index] = member

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('write error ')
    })

    res.redirect(`/members/${id}`)
}

exports.delete = function (req, res){
    const { id } = req.body
    console.log(id)
    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile('data.json', JSON.stringify(data,null, 2), function(err){
        if (err) return res.send('erro ao deletear')
    })

    return res.redirect('/members')
}

