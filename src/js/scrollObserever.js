const getElementByQuery = (el) => document.querySelector(el)

const navbar = getElementByQuery('.navbar')

const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight
}

const appearOptions = {
    rootMargin: `${windowSize.height}px 0px 0px 0px`,
    threshold: 1
}
export const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {        
        if (entry.isIntersecting) {
            if(entry.target.classList.contains('card')){
                entry.target.classList.add('animate')
            }
        }
    })
}, appearOptions)


const disapearOptions = {
    rootMargin: '50px 0px 0px 0px',
    threshold: 1.0
}
export const disapearElementObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.intersectionRatio === 1) {
            navbar.classList.add('colorised')
        }   else{
            navbar.classList.remove('colorised')
        }
    })
}, disapearOptions)