const hiddenElements = document.querySelectorAll('.hidden')

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        ( rect.top >= 120 && rect.top <= (window.innerHeight-120)) ||
        ( rect.bottom >= 120 && rect.bottom <= window.innerHeight-120) ||
        ( (rect.top + element.clientHeight/2) >= 0 &&  (rect.bottom - element.clientHeight/2) <= window.innerHeight)
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
    showElements(hiddenElements)
})

const list = document.querySelector('.list')
const barButton = document.querySelector('.barButton')
const listHeight = list.clientHeight

list.style.maxHeight = 0
barButton.addEventListener('click', ()=> {
    if(list.clientHeight == 0){
        list.style.maxHeight = listHeight+'px'
    }
    else {
        list.style.maxHeight = '0px'
    }
})

const mailButton = document.querySelector('.mailButton')
const toast = document.querySelector('.toast')

mailButton.addEventListener('click', ()=> {
    copy("pawel.borowiec@tutanota.com")
})

async function copy(text) {
    await navigator.clipboard.writeText(text);
    toast.classList.add('visible')
    setTimeout(()=>{toast.classList.remove('visible')}, 2000)
}