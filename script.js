const textOne = document.querySelector('.textOne')
const textTwo = document.querySelector('.textTwo')

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const showElements = (elementsArray) => {
    for (const element of elementsArray) {
        if(isInViewport(element)) {
            element.classList.add('visible')
        }
    }
}

document.addEventListener('scroll', ()=> {
    showElements([textOne, textTwo])
})