document.getElementById("agregar").onclick = function() {
    agregarTarea();
};

function agregarTarea() {
    let campo = document.getElementById("tarea");
    let tarea = campo.value.trim();

    if (tarea === "") {
        alert("Por favor, ingresa una tarea válida.");
        return;
    }

    let lista = document.getElementById("lista_tareas");
    let li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    
    let span = document.createElement("span");
    span.textContent = tarea;
    span.onclick = function() {
        span.classList.toggle("tachado");
    };

    let inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.classList.add("form-control", "edit-input");
    inputEdit.value = tarea;

    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("btn", "btn-warning", "btn-sm", "mx-1");
    botonEditar.onclick = function() {
        if (inputEdit.style.display === "none") {
            inputEdit.style.display = "block";
            span.style.display = "none";
        } else {
            span.textContent = inputEdit.value;
            inputEdit.style.display = "none";
            span.style.display = "block";
        }
    };
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
    botonEliminar.onclick = function() {
        lista.removeChild(li);
    };
    
    li.appendChild(span);
    li.appendChild(inputEdit);
    li.appendChild(botonEditar);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    
    campo.value = "";
    campo.focus();
}
