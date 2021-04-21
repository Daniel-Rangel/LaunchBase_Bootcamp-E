const { age , date} = require('../../lib/utils')
const Intl = require('intl')
const db = require('../../config/db')

module.exports = {
    index(req,res) {
        return res.render('instructors/index', {instructors : result.rows})
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

        const query =`
            INSERT INTO instructors (
                avatar_url,
                name,
                birth,
                gender,
                created_at,
                services
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
        const values = [
            req.body.avatar_url,
            req.body.name,
            date(req.body.birth).iso,
            req.body.gender,
            date(Date.now()).iso,
            req.body.services,
        ]

        db.query(query, values, function(err, result) {
            if(err) return res.send("Database ERROR!")
            
            return res.redirect(`/instructors/${result.rows[0].id}`)
        })
    },
    show(req,res) {
        return res.render("instructors/show")
    },
    edit(req,res) {
        return
    },
    put(req,res) {
        return
    },
    delete(req,res) {
        return
    }
}