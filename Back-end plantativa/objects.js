/*
Objetos podem ser criados usando literal de 
objetos ou palavraschave new Objetc()
*/

//Literal de objetos

const pessoa = {
    nome: "Pyetro",
    idade: 16,
    saudacoes: function(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}

console.log(pessoa.saudacoes())

//Palavra chave new Object()