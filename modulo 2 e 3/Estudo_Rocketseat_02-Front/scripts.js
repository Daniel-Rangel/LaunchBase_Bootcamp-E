const modalOverlay = document.querySelector(".modal_verlay")
const cards = document.querySelectorAll(".card")

for(let card of cards) {
  card.addEventListener('click', function(){
    const videoId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `http://www.youtube.com/embed/${videoId}`
  })
}

document.querySelector(".close-modal").addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = ""

})


