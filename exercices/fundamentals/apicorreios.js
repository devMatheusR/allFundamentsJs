import fetch from 'node-fetch';


function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        console.log(conteudo);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

async function consultaCEP() {
    const cep = 40420110
   
    const response = fetch('https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback');
  
}

console.log(consultaCEP());
