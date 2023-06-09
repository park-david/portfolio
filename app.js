const pages = document.querySelectorAll('section')
const pageButton = document.querySelectorAll('a')

for (let i = 0; i < pages.length; i++) {
    const btn = pageButton[i]
    const page = pages[i]

    btn.addEventListener('click', (event) => {
        for(let section of pages) {
            if(event.target.innerText.toLowerCase() === section.id) {
                section.style.display = 'block'
            } else {
                section.style.display = 'none'
            }
        }
    })
    if (page.id === 'home') {
        page.style.display = 'block'
    } else {
        page.style.display = 'none'
    }
}




// about me carousel
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const images = document.getElementsByClassName('images');

let currentImg = 0;
let previousImg = 0;

next.addEventListener('click', () => {
    previousImg = currentImg
    currentImg++

    if (currentImg >= images.length) {
        currentImg = 0;
    }
    images[previousImg].style.display = 'none'
    images[currentImg].style.display = 'block'
})

prev.addEventListener('click', () => {
    previousImg = currentImg
    currentImg--

    if (currentImg < 0) {
        currentImg = images.length - 1;
    }
    images[previousImg].style.display = 'none'
    images[currentImg].style.display = 'block'
})

// contact me modal
const modal = document.getElementById('modal')
const modalBtn = document.getElementById('modal-open')
const close = document.getElementById('modal-close')


modal.style.display = 'none'

const openModal = () => {
    modal.style.display = 'block'
}
const closeModal = () => {
    modal.style.display = 'none'
}

modalBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

// contact me submit handler
const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    // prevent actual submission since I have no where to store input
    event.preventDefault();
    // clear inputs in contact me modal
    form.reset()
    alert('Thank you')
    modal.style.display = 'none'
})

