// Pegando todos os dados da classe paciente.

var pacientes = document.querySelectorAll(".paciente");
var botaoAddPaciente = document.querySelector("#adicionar-paciente");
var formAddPaciente = document.querySelector("#form-adiciona");
var tabelaPacientes = document.querySelector("#tabela-pacientes");

// Parte 1 -> variável que guarda o valor inicial.
// Parte 2 -> condição lógica que determina o fim da repetição.
// Parte 3 -> incremento: fazer a variável percorrer de 1 em 1.

for (let index = 0; index < pacientes.length; index++) {
    let peso = pacientes[index].querySelector(".info-peso").textContent;
    let altura = pacientes[index].querySelector(".info-altura").textContent;
    let campoIMC = pacientes[index].querySelector(".info-imc");

    if ((peso <= 0 || peso >= 500) || (altura <= 0 || altura >= 3)) {
        campoIMC.textContent = "IMC Inválido"
        pacientes[index].classList.add("imc-invalido");
    }
    else{
        let imc = peso / (altura * altura);
        campoIMC.textContent = imc.toFixed(1);
    }
}

botaoAddPaciente.addEventListener("click" , function (event) {
    event.preventDefault();
    
    let nome = formAddPaciente.nome.value;
    let peso = formAddPaciente.peso.value;
    let altura = formAddPaciente.altura.value;
    let taxaGordura = formAddPaciente.gordura.value;

    let pacienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let taxaGorduraTd = document.createElement("td");

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    taxaGorduraTd.textContent = taxaGordura

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(taxaGorduraTd);

    tabelaPacientes.appendChild(pacienteTr)
});