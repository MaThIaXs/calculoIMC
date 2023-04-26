/*
    ---tabela IMC---
    menor que 18,5 -> abaixo do peso
    18,5 - 24,9 -> peso normal
    25,0 - 29,9 -> excesso de peso
    30,0 - 34,9 -> obesidade classe I
    35,0 - 39,9 -> obesidade classe II
    maior ou igual a 40,0 -> obesidade classe III

    --calculo a ser feito--
    dividir peso em Kg pela altura em metros ao quadrado

    --logica do programa--
    *pedir o nome
    *pedir o peso em Kg
    *pedir a altura em metros
    *fazer o calculo
    *mostrar o resultado - "Nome pessoa, seu IMC é de XX. Voce esta XX"
*/
const prompt = require('prompt-sync')();

const nome = () => {
    while (true) {
        const nome = prompt("Insira seu nome: ");
        
        if (nome == null || nome == "") {
            console.log("Insira seu nome para continuar.");
        } else {
            return nome;
        }
    }
};
const nomeUsuario = nome();

const peso = () => {
    while (true) {
        const pesoKg = prompt("Insira seu peso em Kg: ");
        const numeroPesoKg = parseFloat(pesoKg);

        if (numeroPesoKg == null || numeroPesoKg == "") {
            console.log("Insira seu peso para continuar.");
        } else {
            return numeroPesoKg;
        }
    }
};
const pesoUsuario = peso();

const altura = () => {
    while (true) {
        const alturaMetros = prompt("Insira sua altura em metros: ");
        const numeroAlturaMetros = parseFloat(alturaMetros);

        if (numeroAlturaMetros == null || numeroAlturaMetros == "") {
            console.log("Insira sua altura para continuar.");
        } else {
            return numeroAlturaMetros;
        }
    }
};
const alturaUsuario = altura();

const calculoIMC = () => {
    const calculoIMC = (pesoUsuario / (alturaUsuario * alturaUsuario)).toFixed(1);    

    return calculoIMC;
};
const IMC = calculoIMC();

const verificaIMC = () => {
    switch (true) {
        case (IMC < 18.5):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está abaixo do peso!");
            break;
        case (IMC <= 24.9):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está no peso normal.");
            break;
        case (IMC <= 29.9):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está com excesso de peso!");
            break;
        case (IMC <= 34.9):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está com obesidade classe I!");
            break;
        case (IMC <= 39.9):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está com obesidade classe II!");
            break;
        case (IMC >= 40):
            console.log(nomeUsuario + " seu IMC é " + IMC + " você está com obesidade classe III!");
            break;
        default:
            break;
    }
};
verificaIMC();