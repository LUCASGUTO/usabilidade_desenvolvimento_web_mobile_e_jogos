
function carregarEndereco(cep){
 
    //const cep ="81720140"
    const requisicaoHTTPP = new XMLHttpRequest()
    requisicaoHTTPP.open("GET",`https://viacep.com.br/ws/${cep}/json/`, false)
    requisicaoHTTPP.send()

    const resposta=JSON.parse(requisicaoHTTPP.responseText)

    const enderecoFormatado=`${resposta.logradouro},${resposta.complemento},${resposta.bairro},${resposta.localidade}`;
    
    console.log(enderecoFormatado)  

    atualizaHTML(enderecoFormatado);


    }
    

    function buscaEndereco(){
            
     let elementoEndereco = document.getElementById("id_cep")
    
     const cep = elementoEndereco.value;
     
     console.log(cep);

     carregarEndereco(cep);
}

function atualizaHTML(endereco){

const elementoEndereco = document.getElementById("endereco");

elementoEndereco.textContent = endereco;

}