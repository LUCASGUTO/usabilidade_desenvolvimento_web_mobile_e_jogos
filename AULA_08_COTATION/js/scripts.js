function loadCotation(){
    const HttpRequest = new XMLHttpRequest()
    HttpRequest.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL", false)
    HttpRequest.send()

    const cotationReturn = JSON.parse(HttpRequest.responseText)
    const cotation = cotationReturn

    addCardCotation(cotation.USDBRL,"USDBRL")
    addCardCotation(cotation.BTCUSD,"BTCUSD")
    addCardCotation(cotation.BTCBRL,"BTCBRL")
    
}

function addCardCotation(data, nameData){
    const rowData = document.createElement("p")

    rowData.textContent = `CODE: ${data["code"]}, CODEIN: ${data["codein"]}, BID: ${data["bid"]}`

    const divCotation = document.getElementById(`${nameData}`)
    divCotation.appendChild(rowData)
}