const btn = document.getElementById("meu-btn")
const body = document.getElementById("new-cor")
 //PRIMEIRO PASSO PARA A TRANSFORMAÇÃO DO BOTÃO EM RGB...
 btn.addEventListener("click", function(){
     // console.log(this.textContent);
     //Função matemática Math
     //randon = Retorna um número aleatório entre 0 e 1. Ex: 0.2323454545;
     //floor  = Arrendonda o número para baixo.
     //ceil   = Arrendonda o número para cima.
     //round  = Arrendonda o número aleatório.  
     let r=0,g=0,b=0;  
     r = Math.round(Math.random() * 255);
     g = Math.round(Math.random() * 255);
     b = Math.round(Math.random() * 255);  
     body.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
     //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
 } );

 