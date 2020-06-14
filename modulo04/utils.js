module.exports = {
     age: function (timestamp) {
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
    date: function(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }

}