const factEl = document.getElementById('card')
const factButton = document.getElementById('cardBtn')
const factHeader = document.getElementById('cardHeader')
generateFact()

async function generateFact() {
    const res = await fetch("https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "4b0b499c23msh5677a682249306ap1a98fejsn38855065f753"
        }
    })

    const data = await res.json()

    factEl.innerHTML = "<h3>"+ data.text + "</h3>"

    factHeader.innerHTML = "<h1>"+ data.number + "</h1>" 


}