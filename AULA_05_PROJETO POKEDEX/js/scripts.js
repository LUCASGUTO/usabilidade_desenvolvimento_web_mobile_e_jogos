
const pokemons = []


function carregarPokemons(){


    const requisicaoHTTPP = new XMLHttpRequest()

    requisicaoHTTPP.open("GET","https://pokeapi.co/api/v2/pokemon",false)
    requisicaoHTTPP.send()

    const resposta=JSON.parse(requisicaoHTTPP.responseText)
    
    console.log(resposta)

    

    const pokemon1 = {
        id: 1,
        nome: "Snorlax",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/143.png"
    }

    const pokemon2 = {
        id: 2,
        nome: "Jynx",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/124.png"
    }

    const pokemon3 = {
        id: 3,
        nome: "Vulpix",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    }

    const pokemon4 = {
        id: 4,
        nome: "Jigglypuff",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    }

    const pokemon5 = {
        id: 5,
        nome: "Gengar",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    }

    pokemons.push(pokemon1)
    pokemons.push(pokemon2)
    pokemons.push(pokemon3)
    pokemons.push(pokemon4)
    pokemons.push(pokemon5)

    for(let index = 0; index < pokemons.length; index++){
        const pokemon = pokemons[index]
        addCardPokemon(pokemon)
    }

}

function addCardPokemon(pokemon){
    const imagemElemento = document.createElement("img")

    imagemElemento.setAttribute("src", pokemon.imagem)


    const divElemento = document.getElementById("conteudo-pokemon")
    
    divElemento.appendChild(imagemElemento)


    const nomeElemento = document.createElement("p")

    imagemElemento.setAttribute("p", pokemon.nome)
    
    nomeElemento.textContent=pokemon.nome;

    divElemento.appendChild(nomeElemento)


}

