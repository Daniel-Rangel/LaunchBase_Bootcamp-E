const { age , date} = require('../../lib/utils')
const Members = require('../models/member')

module.exports = {
    index(req,res) {

        Members.all(function(members){
            return res.render('members/index', {members})
        })
        
    },
    create(req,res) {

        Members.instructorsSelectOptions(function(option){
            return res.render('members/create', {intructorOption : option})
        })
    },
    post(req,res) {
        /* vlaidação */
        const keys = Object.keys(req.body)
            
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        Members.create(req.body, function(members){

            return res.redirect(`/members/${members.id}`)

        })
      
    },
    show(req,res) {
        Members.find(req.params.id, function(member){

            if(!member) return res.send('Member not found')

            member.birth = date(member.birth).birthDay

            return res.render("members/show", {member})
        } )
    },
    edit(req,res) {
        Members.find(req.params.id, function(member){

            if(!member) return res.send('Members not found')

            member.birth = date(member.birth).iso

            Members.instructorsSelectOptions(function(option){
                return res.render('members/edit', { member, intructorOption : option})
            })
        } )
    },
    put(req,res) {
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        Members.update(req.body, function(){
            return res.redirect(`/members/${req.body.id}`)
        })
    },
    delete(req,res) {

        Members.delete(req.body.id, function(){
            return res.redirect(`/members`)
        })
    }
}