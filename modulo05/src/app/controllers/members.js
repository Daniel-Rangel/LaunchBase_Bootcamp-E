const { age , date} = require('../../lib/utils')
const Intl = require('intl')

module.exports = {
    index(req,res) {
        return res.render('members/index')
    },
    create(req,res) {
        return res.render('members/create')
    },
    post(req,res) {
        /* vlaidação */
        const keys = Object.keys(req.body)
            
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }
        
        return
    },
    show(req,res) {
        return res.render("members/show")
    },
    edit(req,res) {
        return
    },
    put(req,res) {
        /* vlaidação */
        const keys = Object.keys(req.body)
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }
        
        return
    },
    delete(req,res) {
        return
    }
}