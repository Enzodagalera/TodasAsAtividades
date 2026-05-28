let contador = 0;

function adicionartarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById("mensagem");
    const listaTarefas = document.getElementById("lista_tarefas");
    const contadorElement = document.getElementById("contador");

    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefaValida(tarefa)) {

    let novaTarefa = document.createElement('li');

    let textoTarefa = document.createElement('span');
    textoTarefa.textContent = tarefa;

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.onclick = function () {
        listaTarefas.removeChild(novaTarefa);

        contador--;
        contadorElement.textContent = `Você tem ${contador} tarefas`;
    };

    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(botaoExcluir);

    listaTarefas.appendChild(novaTarefa);

    contador++;
    contadorElement.textContent = `Você tem ${contador} tarefas`;

    mensagem = "Adicionado com sucesso";
    cor = 'green';
}

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function mostrarTarefa(tarefa) {
    return 
}