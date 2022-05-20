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
function soma(x,y){
    soma = Number(x + y);
        if (soma < 10 && soma < 20){
        // console.log (`Sua soma é de ${soma}, que é menor que 10 e menor que 20.`);
        return `Sua soma é de ${soma}, que é menor que 10 e menor que 20.`;
        }else{
            // console.log(`Sua soma é ${soma}, que não é menor que 10 e não é menor que 20. `);
            return `Sua soma é ${soma}, que não é menor que 10 e não é menor que 20. `; 
        }
    
}



console.log(`Os numeros ${x} e ${y} ${compararNumero(x,y)}. ${soma(x,y)}`);

