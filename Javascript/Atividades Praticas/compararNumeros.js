x = Number(prompt("Informe o primeiro número: "));
y = Number(prompt("Informe o segundo número"));

function compararNumero(x,y){
    if (x === y){
        // console.log (" são iguais");
        return "são iguais";
    }else{
        // console.log("Não são iguais");
        return "não são iguais";
    }  
}


console.log(`Os numeros ${x} e ${y} ${compararNumero(x,y)}`);

