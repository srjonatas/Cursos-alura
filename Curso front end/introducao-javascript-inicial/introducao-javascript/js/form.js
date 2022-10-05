//capturando o botao
var botao = document.querySelector("#adicionar-paciente");
        botao.addEventListener("click", function(event){
            event.preventDefault();

            var form = document.querySelector("#form-adiciona");
            var paciente = objPaciente(form);

            
              
            var erros = validaPaciente(paciente);

            if (erros.length > 0) {
                    exibeMensagensDeErro(erros);
                    return;
                }

            adicionaPacienteNaTabela(paciente);
            
            form.reset();

            var mensagensErro = document.querySelector("#mensagens-erro");
            mensagensErro.innerHTML = "";
        });
        
        function objPaciente (form){

            paciente = {
                nome :  form.nome.value,
                peso :  form.peso.value,
                altura : form.altura.value,
                gordura : form.gordura.value,
                imc: calculaImc(form.peso.value, form.altura.value)
            }
            return paciente;
        }

        function adicionaPacienteNaTabela(paciente){
            var trPaciente = montaTabela(paciente);
            var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(trPaciente);
        }

        function montaTabela(paciente){
            var trPaciente = document.createElement("tr");
            trPaciente.classList.add("paciente");
          
            //adicionando o elemento tr como pai dos td
            trPaciente.appendChild(montaTd(paciente.nome,"info-nome"));
            trPaciente.appendChild(montaTd(paciente.peso,"info-peso"));
            trPaciente.appendChild(montaTd(paciente.altura,"info-altura"));
            trPaciente.appendChild( montaTd(paciente.gordura,"info-gordura"));
            trPaciente.appendChild(montaTd(paciente.imc,"info-imc"));  

            return trPaciente;
        }

        function montaTd(dado,classe){
            var td = document.createElement("td");
            td.textContent = dado;
            td.classList.add(classe);

            return td;
        }

        function testaPaciente(paciente){
            if(validaPeso(paciente.peso) == true && validaAltura(paciente.altura) == true){
                return true;
            }else{
                return false;
            }
        }

        // form.js
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
        




