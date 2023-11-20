const header = document.querySelector('#landing-header')
const svg = document.querySelectorAll('.ico')
const sp = document.querySelectorAll('span')
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.90
}

const observador = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const color = entry.target.getAttribute('data-header-color')
        header.style.color= color
        svg.forEach((item) => {
            item.style.fill = color
        })
        sp.forEach((item) => {
            item.style.color = color
        })
    }
    })}, observerOptions)

const sections = document.querySelectorAll('.landing-section')

sections.forEach(section => {
    observador.observe(section)
})

const listmenu = document.querySelectorAll('#landing-header a')
const menuback = document.querySelector('#menuback')

listmenu.forEach((item) => {
    item.addEventListener("mouseenter", () => { 
        const { left , top , width , height } = item.getBoundingClientRect()
        menuback.style.setProperty('--left', `${left}px`)
        menuback.style.setProperty('--top', `${top}px`)
        menuback.style.setProperty('--w', `${width}px`)
        menuback.style.setProperty('--h', `${height}px`)
        menuback.style.opacity = '1'
        menuback.style.visibility = 'visible'
    })
    item.addEventListener("mouseleave", () =>   { 
        menuback.style.opacity = '0'
        menuback.style.visibility = 'hidden'
    })
})
