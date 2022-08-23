const textOne = document.querySelector('.textOne')
const textTwo = document.querySelector('.textTwo')
const application = document.querySelector('.application')

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    console.log('top: ' + rect.top)
    console.log('bottom: ' + rect.bottom)
    console.log(element.clientHeight/2)
    console.log(' ')
    return (
        (rect.top + 100) >= 0 &&
        (rect.bottom - (element.clientHeight - 200)) <= (window.innerHeight)
    );
}

const showElements = (elementsArray) => {
    for (const element of elementsArray) {
        if(isInViewport(element)) {
            element.classList.add('visible')
        }
        else {
            element.classList.remove('visible')
        }
    }
}

document.addEventListener('scroll', ()=> {
    showElements([textOne, textTwo, application])
})