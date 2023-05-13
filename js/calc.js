//Desafio 1

//Inserir o value dos botões de números e operações no visor.
//É obrigatório utilizar funções parametrizadas...
//Pode ser utiizados evneto inline


function inserirN(botao,visor){ 
    if(botao.value == "+" || botao.value == "=" || botao.value == "*" || botao.value == "/"){

        if(botao.value[visor.value.lenght-2] == "+" || botao.value[visor.value.lenght-2] == "=" || botao.value[visor.value.lenght-2] == "*" || botao.value[visor.value.lenght-2] == "/"){
        
            visor.value.slice(visor.value.lenght-1)
        }

    }else{
         visor.value += botao.value;
    }
}
//Desafio 2
//utilizando a função eval(expressão)
//Crie uma nova função no formato arrowFunction que receba um parâmetro e passe para a função evla() realizar o cálculo e devolva o resultado no visor.


//simplificar o código com arrowFunction

const calculoResultadoOperacoes = (visor)=>{
    visor.value = eval(visor.value);
}