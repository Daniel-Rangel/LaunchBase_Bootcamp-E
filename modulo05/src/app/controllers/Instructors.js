const { age , date} = require('../../lib/utils')

const Instructors = require('../models/instructor')

module.exports = {
    index(req,res) {
        let { filter, page, limit } = req.query

        page = page || 1 /* é o mesmo que: "if(!page){ page = 1}" */
        limit = limit || 2

        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(instructors){
                const pagenation = {
                    total: Math.ceil(instructors[0].total / limit),
                    page
                }
                return res.render('instructors/index', {instructors,pagenation,filter })
            }
        }

        Instructors.paginate(params)
        /* 
        if(filter){
            Instructors.findBy(filter, function(instructors){
                return res.render('instructors/index', {instructors, filter})
            })
        }else{
            Instructors.all(function(instructors){
                return res.render('instructors/index', {instructors})
            })
        } */
        
    },
    create(req,res) {
        return res.render('instructors/create')
    },
    post(req,res) {
        /* vlaidação */
        const keys = Object.keys(req.body)
            
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        Instructors.create(req.body, function(instructors){

            return res.redirect(`/instructors/${instructors.id}`)

        })
      
    },
    show(req,res) {
        Instructors.find(req.params.id, function(instructor){

            if(!instructor) return res.send('Instructor not found')

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(',')

            instructor.created_at = date(instructor.created_at).format

            return res.render("instructors/show", {instructor})
        } )
    },
    edit(req,res) {
        Instructors.find(req.params.id, function(instructor){

            if(!instructor) return res.send('Instructors not found')

            instructor.birth = date(instructor.birth).iso

            return res.render("instructors/edit", {instructor})
        } )
    },
    put(req,res) {
        const keys = Object.keys(req.body)
            
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("por favor, preencha todos os campos")
            }
        }

        Instructors.update(req.body, function(){
            return res.redirect(`/instructors/${req.body.id}`)
        })

    },
    delete(req,res) {

        Instructors.delete(req.body.id, function(){
            return res.redirect(`/instructors`)
        })
    }
}