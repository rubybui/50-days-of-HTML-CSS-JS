const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{ 
        removeActiveClass()
        panel.classList.add('active')
        //panel.classList => list all class of panel, also had add method
    })})

const removeActiveClass = () => {
    panels.forEach(panel=> {
            panel.classList.remove('active')
    })
}
