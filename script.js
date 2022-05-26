const mai = document.querySelector('.btn-mai')
const min = document.querySelector('.btn-min')
const limpar = document.querySelector('.btn-clear')
const primeiro = document.querySelector('.btn-prim')


/**
 * Entrada das funções para conversão
 */

//Função da conversão para maiusculo

function  maiusculo(){
    const  texto = document.querySelector('#texto').value
    
    //Verificação do campo se estiver vazio
   if (texto == ' ' ){
    alert("Por favor, preencha o campo para converter o texto!!")
   }
    // manipulação do dom
    document.querySelector('#texto').value = texto.toUpperCase() 
}

//Função da conversão para minusculo
function  minusculo(){
    const  texto = document.querySelector('#texto').value

    //Verificação do campo se estiver vazio
    if(texto == " "){
    alert("Por favor, preencha o campo para converter o texto!!")
}   else {
      // manipulação do dom
      document.querySelector('#texto').value = texto.toLowerCase() 
} 
}
// função para converter a primeira letra para maiúscula

function  primeiraLetra(){
    const  texto = document.querySelector('#texto').value
    //Verificação do campo se estiver vazio
    if(texto == " "){
    alert("Por favor, preencha o campo para converter o texto!!")
 } else 
      // manipulação do dom
      document.querySelector('#texto').value = texto[0].toUpperCase() + texto.slice(1).toLowerCase()
}
/*          * */


