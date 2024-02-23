const batman = document.querySelector('#pic-bat')
const spiderman = document.querySelector('#pic-spider')
const nameBat = document.querySelector('#bat')
const nameSpider = document.querySelector('#spider')

const next = () =>{
    spiderman.classList.add("remove");
    nameBat.style.opacity = '100'
    nameSpider.style.opacity = '0'
    batman.style.marginLeft = '-1000px'
}

const back = () =>{
    spiderman.classList.remove("remove")
    nameBat.style.opacity = '0'
    nameSpider.style.opacity = '100'
}
