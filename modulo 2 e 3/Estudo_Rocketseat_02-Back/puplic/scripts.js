const modalOverlay = document.querySelector(".modal_verlay")
const cards = document.querySelectorAll(".card")

for(let card of cards) {
  card.addEventListener('click', function(){
    const videoId = card.getAttribute("id")
    window.location.href = `/video?id=${videoId}` 
  })
}


// location usado para retorna o href (URL) da página atual. informando a rota