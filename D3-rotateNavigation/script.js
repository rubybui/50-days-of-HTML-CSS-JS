const search = document.querySelector('search')
const btn = document.guerySelector('btn')
const input = document.querySelector('.input')
//uerySelector is different from getByClassName. Query return object of Node List, getByClassName return list of html
btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})