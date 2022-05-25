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
    document.querySelector('#texto').innerHTML = texto.toUpperCase() 
    document.querySelector('#texto').value = texto.toUpperCase() 
}

//Função da conversão para minusculo
function  minusculo(e){
    const  texto = document.querySelector('#texto').value

    //Verificação do campo se estiver vazio
    if(texto == " "){
    alert("Por favor, preencha o campo para converter o texto!!")
}   else {
      // manipulação do dom
      document.querySelector('#texto').value = texto.toLowerCase() 
} 
  
}

// função de limpeza do texto convertido
function  limpeza(){
    const  texto = document.querySelector('#texto').value

    //Verificação do campo se estiver vazio
   if (texto == ' '){
    alert("O campo já está limpo! ")
   }
    // manipulação do dom
    document.querySelector('textarea#texto').value = " " 
    
}

// função para converter a primeira letra para maiúscula

function  primeiraLetra(){
    const  texto = document.querySelector('#texto').value

    //Verificação do campo se estiver vazio
    if(texto == " "){
    alert("Por favor, preencha o campo para converter o texto!!")
 } else {
      // manipulação do dom
      document.querySelector('#texto').value = texto[0].toUpperCase() + texto.slice(1).toLowerCase()
}
  
}
