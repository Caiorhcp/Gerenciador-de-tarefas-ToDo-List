    alert("Instruções: Version:1.0                                                                                                                                          Escreva a tarefa desejada e clique no botão +, ela sera adicionada!                                                                                             Para aparecer a lista, clique no icone da lista, feito isso pode-se digitar o numero da tarefa desejada e clicar em editar ou remover.                                                                                                                                            Obrigado!")
    
    //array para receber as tarefas
    const tasks = [];
    
    //CRUD- CREATE (adicionar tarefa, puxando o elemente que é adicionado pelo input text e dando um alert caso adicionado ou não)
    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const task = taskInput.value;

        if (task.trim() !== "") {
            tasks.push(task);
            taskInput.value = "";
            alert(`Tarefa "${task}" adicionada com sucesso!`);
        } else {
            alert("Digite uma tarefa válida.");
        }
    }
    
    //CRUD- READER (Ler e listar as tarefas adicionadas, lendo o index do array, e caso tenha algo adicionado, no html(ul) é criado um li e dentro desse li é escrito por posição a partir do 1, todas as tarefas adicionadas
    function listTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${index + 1}: ${task}`;
            taskList.appendChild(listItem);
        });
    }

    //CRUD-UPDATE(Edição de alguma tarefa adicionada a partir do seu numero, bastando exemplo, quero editar a tarefa 3, então escreve-se o 3 no input text e clica em editar, logo aparece um alert para que se escreva oque quer editar)
    function editTask() {
        const taskInput = document.getElementById("taskInput");
        const taskIndex = parseInt(taskInput.value) - 1;
    
        if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
            alert("Digite um número válido para editar a tarefa.");
        } else {
            const editedTask = prompt("Edite a tarefa:", tasks[taskIndex]);
            if (editedTask !== null) {
                tasks[taskIndex] = editedTask;
                alert(`Tarefa "${editedTask}" editada com sucesso!`);
                taskInput.value = "";
                listTasks(); 
            }
        }
    }
    
    //CRUD-DELETE(Remover a tarefa desejada tambem do mesmo modo que o update, apenas digitando o numero da posição na lista)
    function removeTask() {
        const taskInput = document.getElementById("taskInput");
        const taskIndex = parseInt(taskInput.value) - 1;

        if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
            alert("Digite um número válido para remover a tarefa.");
        } else {
            const removedTask = tasks.splice(taskIndex, 1);
            alert(`Tarefa "${removedTask[0]}" removida com sucesso!`);
            taskInput.value = "";
        }
    }
