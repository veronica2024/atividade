document.getElementById('mostrar-variaveis').addEventListener('click',function() {
    //variavel simples
    let idade = 25;
    let nome = "Ana";
    let casado = true;

    document.getElementById('variavel-simples').innerText = `simples: nome: ${nome}, idade:${idade}, casado: ${casado}`;

    //variaveis compostas
    let frutas = ["maçã", "banana", "laranja"];
    let pessoa ={
        nome: "carlos",
        idade: 30,
        casado: false
    };

    document.getElementById('variavel-composta').innerText = `compostas: frutas: ${frutas.join(', ')}, pessoa: nome: ${pessoa.nome}, idade: ${pessoa.idade}, casado: ${pessoa.casado}`;

    //variaveis de variaveis
    let a = 10;
    let b = 20;
    let c = 30;

    let variaveis = [a, b, c];
    let chave = "dinamica";
    let objetodinamico = {
         dinamica:"este é um valor dinãmico"
        };
    
    document.getElementById('variavel-de-variveis').innerText = `variavel de variaveis: Array: ${variaveis.join(',')}, objeto dinãmico: ${objetodinamico[chave]}`;    
})