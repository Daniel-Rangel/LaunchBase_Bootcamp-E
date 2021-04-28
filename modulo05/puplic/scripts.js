const currentPage = location.pathname // traz informação do local de url
const menuItens = document.querySelectorAll('header .links a')

// faz a verificação de qual item está
for(let item of menuItens){
  if(currentPage.includes(item.getAttribute('href'))){
    item.classList.add('active')
  }
}

//paginação
//[1,...,13,14,15,16,17,...,20] colocar "..." quando for > ou < que 2 numero da pagina

function paginate(selectPage,totalPages){

  let pages = [],
    oldPage

  for(let currentPage = 1; currentPage <= totalPages; currentPage++){

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectedPage = currentPage <= selectPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectPage - 2 

    if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage ){

      if(oldPage && currentPage - oldPage > 2){
        pages.push('...')
      }

      if(oldPage && currentPage - oldPage == 2){
        pages.push(oldPage + 1)
      }

      pages.push(currentPage)

      oldPage = currentPage
    }
  }

  return pages
}

const pagination = document.querySelector('.pagination')
const page = pagination.dataset.page
const total = pagination.dataset.total
const pages = paginate(page,total)

console.log(pages)

let elements  = ""

for(let page of pages){

  if(String(page).includes("...")){
    elements += `<span>${page}</span>`
  }else{
    elements += `<a href="?page=${page}">${page}</a>`
  }
  
}

pagination. innerHTML = elements
//includes faz a leitura de um link e retorna um valor true caso a instring exista dentro da url
//console.log('http://localhost:3000/members'.includes('membres'))