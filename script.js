const mai = document.querySelector('.btn-mai')
const min = document.querySelector('.btn-min')
const limpar = document.querySelector('.btn-clear')
/**
 * Entrada das funções para conversão
 */

//Função da conversão para maiusculo

function  maiusculo(){
    const  texto = document.querySelector('.texto').value
    const texto_convertido = document.querySelector('.texto-conver')

    // manipulação do dom
    document.querySelector('.texto-conver').innerHTML = texto.toUpperCase()  
}
//Função da conversão para minusculo

function  minusculo(){
    const  texto = document.querySelector('.texto').value
    const texto_convertido = document.querySelector('.texto-conver')

    // manipulação do dom
    document.querySelector('.texto-conver').innerHTML = texto.toLowerCase() 
}

// função de limpeza do texto convertido
function  limpeza(){
    const  texto = document.querySelector('.texto').value
    const texto_convertido = document.querySelector('.texto-conver')

    // manipulação do dom
    document.querySelector('.texto-conver').innerHTML = " " 
}

limpeza.click
maiusculo.click
minusculo.click
