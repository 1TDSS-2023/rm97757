"use strict";
//console.log("Ola Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Sting
// console.log(parseInt(nr1)+parseInt(nr2))

// var nome1 = "neymaru";
// // let nome2 = "melin";
// // const nome3 = "igot";

// if(nome1 == ""){
//     let nome1 = "igot";
// }
// console.log(nome1);
/* <button value="click" id="meu-btn">Click</button> */
 const btn = document.getElementById("meu-btn");

// //PRIMEIRO PASSO PARA A TRANSFORMAÇÃO PARA RGB

btn.addEventListener("click", function(){
//     console.log(this.textContent);
    let r=0,g=0,b=0;

        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);

        this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
 });

//Função matematica Math
//random = Retorna um número aleatório entre 0 e 1. EX: 0.11322132143
//floor = aredonda o número para baixo.
//ceil = aredonda o número para cima.
// round = aredondo um numero aleatorio.


