
function carregarEndereco(){
 
    //const cep ="81720140"
    const requisicaoHTTPP = new XMLHttpRequest()
    requisicaoHTTPP.open("GET",`https://viacep.com.br/ws/${cep}/json/`, false)
    requisicaoHTTPP.send()

    const resposta=JSON.parse(requisicaoHTTPP.responseText)
    
    console.log(resposta)  


   
    }
    

    function buscaEndereco(){
            
     let elementoEndereco = document.getElementById("id_cep")
    
     const cep = elementoEndereco.value;
     console.log(cep);

     
}