const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const close = document.querySelector('.close-modal');

for (let card of cards) {
    card.addEventListener("click", function () {
        const img_id = card.getAttribute("id")
        const title = card.querySelector(".card-title").innerHTML
        const author = card.querySelector(".author").innerHTML

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `/layout/${img_id}`

        modalOverlay.querySelector(".modal-title").innerHTML = title
        modalOverlay.querySelector(".modal-author").innerHTML = author
    })
}

close.addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})