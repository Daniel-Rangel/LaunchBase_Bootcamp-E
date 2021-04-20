const fs = require('fs')
const data = require('../data.json')
const { date } = require('../utils')
const Intl = require('intl')

exports.index = function(req, res){
    return res.render('members/index', {members : data.members})
}

exports.create = function(req, res){
    return res.render('members/create')
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
    let {
        avatar_url,
        name,
        email,
        birth, 
        gender,
        blood,
        weight,
        height
    } = req.body

    /* tratamento de dados adicionando mais informação */
    birth = Date.parse(birth)

    let id = 1
    const lastMember = data.members[data.members.length - 1]
    if(lastMember){
        id = lastMember.id + 1
    }
    /* organizando dados para ser enviados */
    data.members.push({
        id,
        avatar_url,
        name,
        email,
        birth, 
        gender,
        blood,
        weight,
        height
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("erro ao escrever")
        return res.redirect(`/members/${id}`)
    })
}

exports.show = function(req, res){
    const { id } = req.params

    const foudMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foudMember) return res.send("member not found")

    
    const member = {
        ...foudMember,
        birth: date(foudMember.birth).birthDay,
    }

    return res.render("members/show", { member })
}

exports.edit = function(req , res){
    const { id } = req.params

    const foudMember = data.members.find(function(member){
        return member.id == id
    })

    if(!foudMember) return res.send("member not found")

    const member = {
        ...foudMember,
        birth: date(foudMember.birth).iso,
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

