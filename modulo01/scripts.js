//Basico 

//Faxendo calculos 
/* const aluno1 = "Lucas"
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
    ` */
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

/*  const nome = "daniel"
 const peso = 80
 const altura = 1.74

 const imc = peso / (altura * altura )

 if(imc >= 30){
     console.log(`${nome} você está acima do peso`)
 }else if(imc < 29.9){
     console.log(`${nome} você não está acima do peso`)
 }
 */
 /* apoosentadoria calc */

/*  const nome1 = "Silva"
 const sexo = "F"
 const idade = 48
 const contribuicao = 23


if(sexo == "F" && (contribuicao + idade) >= 85){
    console.log(`${nome1},você pode se aposentar!`)
}else{
    console.log(`${nome1},você não pode se aposentar!`)
} */

/* objetos */

/* const aluno1 = {
    nome:"Mayk",
    nota: 8.3
}

const aluno2 = {
    nome:"Lucas",
    nota: 7.1
}

const aluno3 = {
    nome :"Daniel",
    nota : 10
}

console.log(aluno1.nome) */

/* vetores */

/* const alunos = [
    {
        nome:"Mayk",
        nota: 8.3
    },
    {
        nome:"Lucas",
        nota: 7.1
    },
    {
        nome :"Daniel",
        nota : 10
    }
]

console.log(alunos[1].nome) */


/* desafio */

/* const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Pragramação",
    endereco: {
        logradouro: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`
    A empresa 
    ${empresa.nome} está localizada em 
    ${empresa.endereco.logradouro},
    ${empresa.endereco.numero}
    `) */

/* desafio 2*/

/* const programador = {
    nome: "Daniel",
    idade: "30",
    tecnologia: [
        {nome : "HTML", especialidade : "web" },
        {nome: "CSS", especialidade: "web"},
        {nome: "Javascript", especialidade: "web"}
    ]
}

console.log(`
    O usuário 
    ${programador.nome} tem 
    ${programador.idade} anos e usa o 
    ${programador.tecnologia[2].nome} com especialidade em 
    ${programador.tecnologia[2].especialidade}`) */


    /* fução exemplo */
   /*  const alunosA = [
        {
            nome:"Mayk",
            nota: 8.3
        },
        {
            nome:"Lucas",
            nota: 7.1
        },
        {
            nome :"Daniel",
            nota : 10
        }
    ]

    const alunosB = [
        {
            nome:"Mayk2",
            nota: 5
        },
        {
            nome:"Lucas3",
            nota: 2
        },
        {
            nome :"Daniel4",
            nota : 8
        }
    ]


function calcularMedia (valor2){

    let media = 0
 
    for(let i = 0; i < valor2.length; i++ ){
        media += valor2[i].nota 
    }
    
    return media / valor2.length
}


console.log(`Media da Tuma B ${calcularMedia(alunosB)}`)
console.log(`Media da Tuma A ${calcularMedia(alunosA).toFixed(2)}`)

 */

 /* desafio 3 */
 
 /* const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ]; */

  /* for (usuario of usuarios  ){
      console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}\n`)
  } */

  /* function checaSeUsuarioUsaCSS(usuario) {
    if(usuario == "CSS"){
        return true
    }else{
        return false
    }
  }


for( usuario of usuarios){
    for(uso of usuario.tecnologias){
        console.log( checaSeUsuarioUsaCSS(uso) )
    }
} */

/* soma de sepesas e receitas */

/* const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

for(usuario of usuarios){
    let calculo = calculaSaldo(usuario.receitas, usuario.despesas)
    if( calculo >= 1){
        console.log(`${usuario.nome} Possi saldo POSITIVO de ${calculo.toFixed(2)}`)
    }else{
        console.log(`${usuario.nome} Possi saldo NEGATIVO de ${calculo.toFixed(2)}`)
    }
}

function calculaSaldo(receitas, despesas) {
    let rec = somaNumeros(receitas)
    let desp = somaNumeros(despesas)
    return rec - desp
}

function somaNumeros(numeros) {
    let soma = 0
    for(numero of numeros){
        soma += numero
    }
    return soma
} */
