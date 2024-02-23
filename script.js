const batman = document.querySelector('#pic-bat')
const spiderman = document.querySelector('#pic-spider')
const nameBat = document.querySelector('#bat')
const nameSpider = document.querySelector('#spider')
const pics = document.querySelector('.picheroes')
const bttRight = document.querySelector('.rightBtt')
const bttLeft = document.querySelector('.left')

const next = () =>{
    bttRight.style.opacity = '0'
    pics.classList.add('remove')
    nameBat.style.opacity = ('100')
    nameSpider.style.opacity = ('0')
    bttLeft.style.opacity = '100'
    let textBat = document.querySelector('#bat-text').style.opacity = ('100')
    let textSpider = document.querySelector('#spider-text').style.opacity = ('0')
}

const back = () =>{
    let textBat = document.querySelector('#bat-text').style.opacity = ('0')
    let textSpider = document.querySelector('#spider-text').style.opacity = ('100')
    pics.classList.remove('remove')
    nameSpider.style.opacity = '100'
    nameBat.style.opacity = ('0')
    bttRight.style.opacity = '100'
    bttLeft.style.opacity = '0'
}

