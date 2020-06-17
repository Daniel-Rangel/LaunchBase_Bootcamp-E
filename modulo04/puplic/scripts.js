const currentPage = location.pathname // traz informação do local de url
const menuItens = document.querySelectorAll('header .links a')

// faz a verificação de qual item está
for(let item of menuItens){
  if(currentPage.includes(item.getAttribute('href'))){
    item.classList.add('active')
  }
}

//includes faz a leitura de um link e retorna um valor true caso tenha endentro da url
console.log('http://localhost:3000/members'.includes('membres'))