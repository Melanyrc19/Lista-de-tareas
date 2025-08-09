let form = document.querySelector("#form");
let buttonAñadir = document.querySelector("#buttonAñadir");
let listaTareas = document.querySelector("#listaTareas");
let tareas = []
function eliminar(id) {
    tareas = tareas.filter(tarea => tarea.id !== id)
    listaTareas.innerHTML = tareas.map((t) => `<li> ${t.tarea} ${t.categoriaSelect}   <button onclick="eliminar(${t.id})" >Eliminar</button> </li> `)

}
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
        listaTareas.innerHTML = tareas.map((t) => `<li> ${t.tarea} ${t.categoriaSelect}   <button onclick="eliminar(${t.id})" >Eliminar</button> </li> `)






        // botonBorrar.addEventListener ("click", ()=>{
        //     listaTareas.
        // })



    })
}

añadirTarea();
