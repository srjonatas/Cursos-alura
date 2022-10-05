var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando...");

    var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener("load", function(){

    if (xhr.status == 200){
        var resposta = xhr.responseText;
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        alert("erro ao buscar");
    }
})

xhr.send();

});