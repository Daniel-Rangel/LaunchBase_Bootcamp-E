module.exports = {
    all(callback) {
        db.query(`SELECT * FROM instructors`, function(err , result){
            if(err) return res.send("Database ERROR!")
            callback(result.rows)
        })
    }
}