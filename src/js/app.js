import {disapearElementObserver, observer} from './scrollObserever.js'

const getElementByQuery = (el) => document.querySelector(el)
const getAllElementByQuery = (el) => document.querySelectorAll(el)

const drawer = getElementByQuery('.drawer')
const openDrawerBtn = getAllElementByQuery('#toggle-drawer-btn')
const section2 = getElementByQuery('.section.is-2')
const section3 = getElementByQuery('.section.is-3')
const cards = getAllElementByQuery('.card')
const datas = getElementByQuery('div').getAttribute('data-animate')
const footer = getElementByQuery('.footer')

let lastPosition

openDrawerBtn.forEach(btn => {
    btn.addEventListener('click', ()=> drawer.classList.toggle('show'))
});

cards.forEach( card => {
    const cardAttr = card.getAttribute('data-animate')
    if(cardAttr) observer.observe(card)
})

disapearElementObserver.observe(section2)

window.addEventListener('scroll', (e)=>{
    let position = section2.getBoundingClientRect()
    let position3 = section3.getBoundingClientRect() 

    if (lastPosition<position3.y && section2.classList.contains('fixed') && position3.y >= window.innerHeight){
        section2.classList.remove('fixed')
        section3.classList.remove('expanded')
    }
    if(position.y <= 0 && lastPosition>position3.y) {
        if(!section2.classList.contains('fixed')){
            section2.classList.add('fixed')
            section3.classList.add('expanded')
        }
    } 
    if(position3.y <= 0){
        footer.classList.add('fixed')
    }
    lastPosition = position3.y
})



