//Basico 

//Faxendo calculos 
const aluno1 = "Lucas"
const notaAluno1 = 5.0

const aluno2 = "Daniel"
const notaAluno2 = 7

const aluno3 = "thamires"
const notaAluno3 = 2.3


const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

const texto = `
    ${aluno1} sua nota é de ${notaAluno1},
    ${aluno2} nota ${notaAluno2}, 
    ${aluno3} nota ${notaAluno3}.
    A media da Sala é ${media.toFixed(2)}.
    `
//console.log(texto)

/* condicionais */
/* if(media > 5){
    console.log(`Media é de ${media.toFixed(3)} Parabens`)
}else{
    console.log(`Media é menor que 5`)
} */

//Operadores relacionais e comparativos

/* console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) // true
console.log(5 != 5 || 6 != 6) // false

console.log(5 == 5 && 6 == 6) // treu
console.log(5 == 5 && 6 != 6) // false
console.log(5 != 5 && 6 != 6) // false

console.log(!(5 > 4)) // false
console.log(!(5 < 4)) // true

const idade = 17

if(!(idade > 18) || idade === 17){
    console.log('bloqueio de entrada')
}else{
    console.log('deixar entrar')
}

 */