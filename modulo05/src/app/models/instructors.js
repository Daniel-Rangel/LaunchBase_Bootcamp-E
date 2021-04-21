const { age , date} = require('../../lib/utils')
const { create } = require("browser-sync")
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM instructors`, function(err , result){
            if(err) throw `Database Error! ${err}`
            callback(result.rows)
        })
    },
    create(data, callback) {
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
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.gender,
            date(Date.now()).iso,
            data.services,
        ]

        db.query(query, values, function(err, result) {
            if(err) throw `Database Error! ${err}`
    
            callback(result.rows[0])
        })
    },
    find(id, callback){
        db.query(`
            SELECT * 
            FROM instructors 
            WHERE id = $1`,[id], function(err , result){
                if(err) throw `Database Error! ${err}`
                callback(result.rows[0])
        })
    },
    update(data , callback){
        const query = `
        UPDATE instructors SET
            avatar_url=($1),
            name=($2),
            birth=($3),
            gender=($4),
            services=($5)
        WHERE id = $6
        `
        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.gender,
            data.services,
            data.id
        ]

        db.query(query, values, function(err, result) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id , callback){

        db.query(`DELETE FROM instructors WHERE id = $1`, [id], function(err, result) {
            if(err) throw `Database Error! ${err}`

            return callback()
        })
    }
}