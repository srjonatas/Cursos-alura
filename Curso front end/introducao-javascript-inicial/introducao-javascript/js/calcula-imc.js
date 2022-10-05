//titulo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

//classe dos pacientes
var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0 ; i < pacientes.length ; i++){
        var paciente = pacientes[i];

        //peso extraído do primeiro paciente 
        var peso = paciente.querySelector(".info-peso").textContent;
        
        //altura extraída do primeiro paciente
        var altura = paciente.querySelector(".info-altura").textContent;
      
        //imc calculado do primeiro paciente
        calculaImc(peso, altura);

        //capturando as classes imc
        var imctd = paciente.querySelector(".info-imc");

        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);

        if(!validaPeso(peso)) {
            pesoEhValido = false;
            imctd.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }

        if(!validaAltura(altura)) {
            alturaEhValida = false;
            imctd.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido");
        }

        if(pesoEhValido && alturaEhValida) {
            //alteração do imc no html
            imctd.textContent = calculaImc(peso, altura);
        }

        
    }

function calculaImc(peso, altura){
    var imc = 0
    imc = (peso/(altura*altura));
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <=0 || peso >= 500) {
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.00) {
        return false;
    }else{
        return true;
    }
}
    