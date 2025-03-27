/*
Funções são blocos de códigos que podem ser reutilizados para realizar tarefas
 específicas. Elas podem receber parâmetros e retornar um valor.
 Funções são uma das principais ferramentas
 para organizar o código
 */

 function saudacoes(nome) {
    return `Olá, ${nome}`  //template string
 }

 console.log(saudacoes("Maria"))


 //Função anonima
 const soma = function(a, b) {
    return a + b
 }
 console.log(soma(4, 2))

 //Função flecha(arrow, function)

 const multiplicar = (a, b) => a * b
 console.log(multiplicar(5,6))

