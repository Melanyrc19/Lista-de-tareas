let form = document.querySelector("#form");
let buttonAñadir = document.querySelector("#buttonAñadir");
let listaTareas = document.querySelector("#listaTareas");
let tareas = []




function añadirTarea() {

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let categoriaSelect = document.querySelector("#categoriaSelect").value
        let tarea = document.querySelector("#tarea").value

        const nuevaTarea = {
            id: Date.now(),
            tarea, categoriaSelect
        }
        tareas.push(nuevaTarea)
      
         mostrarTarea()
    })
}
function mostrarTarea (){
     listaTareas.innerHTML = tareas.map((t) => `<li> ${t.tarea} ${t.categoriaSelect}   <button onclick="eliminar(${t.id})" >Eliminar</button> </li> `).join("")

}
function eliminar(id) {
    tareas = tareas.filter(tarea => tarea.id !== id)
    guardarTareas()
    mostrarTarea();
}

function guardarTareas (){
localStorage.setItem('tarea', JSON.stringify(tareas))
}
function obtenerTareas (){
let guardar = localStorage.getItem('tarea')
if (guardar) {
    tareas = JSON.parce(guardar)
}

}
añadirTarea();
