const pages = document.querySelectorAll('section')
const pageButton = document.querySelectorAll('button')

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

const openBtn = document.getElementById('modal')