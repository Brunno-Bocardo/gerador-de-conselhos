document.getElementById('change-advice').addEventListener('click', () => {
    filtro()
})

async function criarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function filtro() {
    const conjunto = await criarConselho()
    const id = await '#' + conjunto.slip.id
    const advice = await conjunto.slip.advice
    
    var htmlID = document.getElementById('advice-id')
    htmlID.innerHTML = id

    var adviceHTML = document.getElementById('advice')
    adviceHTML.innerHTML = advice
}