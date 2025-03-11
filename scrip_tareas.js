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

    let botonEliminar = document.createElement("boton");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
    botonEliminar.onclick = function() {
        lista.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);

    campo.value = "";
    campo.focus();
}