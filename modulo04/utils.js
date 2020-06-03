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
    }

}