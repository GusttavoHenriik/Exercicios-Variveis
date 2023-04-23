function calcular(){
    
    // pegando o id do formulario
    // kilos é minha variavel
    // formulario é o id do meu formulario
    // value é o valor do input
    // o + na frente transforma em number a string	

    const kilos  		= +formulario.kilos.value;
    const metros 		= +formulario.metros.value;
    const centimetros = +formulario.centimetros.value;
    
     // altura
    const altura = (metros * 100 + centimetros) / 100;
     
    // imc
    const imc = kilos / (altura * altura);
    
    if(imc < 20)
    {
        alert('Você esta abaixo do peso!');
    } 
    else if(imc >20 && imc <= 25)
    {
        alert("Peso Ideal");
    }
    else if(imc >25 && imc <= 30)
    {
        alert("Sobrepeso");
    }
    else if(imc >30 && imc <= 35)
    {
        alert("Obesidade Moderada");
    }
    else if(imc >35 && imc <= 40)
    {
        alert("Obesidade Severa");
    }
    else if(imc >40 && imc <= 50)
    {
        alert("Obesidade Morbida");
    }
    else
    {
        alert('Gordo');
    }
}