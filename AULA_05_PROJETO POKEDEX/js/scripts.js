



function carregarPokemons(){
 

    const requisicaoHTTPP = new XMLHttpRequest()

    requisicaoHTTPP.open("GET","https://pokeapi.co/api/v2/pokemon",false)
    requisicaoHTTPP.send()

    const resposta=JSON.parse(requisicaoHTTPP.responseText)
    
    const pokemons = resposta.results   

    
    for(let index = 0; index < pokemons.length; index++){
        const pokemon = pokemons[index]

        const id = index + 1

        pokemon.imagem="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/"+ id +".png"

        addCardPokemon(pokemon)
    }

    

}

function addCardPokemon(pokemon){
    const imagemElemento = document.createElement("img")

    imagemElemento.setAttribute("src", pokemon.imagem)


    const divElemento = document.getElementById("conteudo-pokemon")
    
    divElemento.appendChild(imagemElemento)


    const nomeElemento = document.createElement("p")

    imagemElemento.setAttribute("p", pokemon.name)
    
    nomeElemento.textContent=pokemon.name;

    divElemento.appendChild(nomeElemento)


}

