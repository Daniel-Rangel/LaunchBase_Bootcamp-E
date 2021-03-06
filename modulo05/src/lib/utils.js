module.exports = {
     age(timestamp) {
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
    },
    date(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay : `${day}/${month}`,
            format : `${day}/${month}/${year}`
        }
    }

}