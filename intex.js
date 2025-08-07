let form = document.querySelector("#form");
let buttonAñadir = document.querySelector("#buttonAñadir");
let listaTareas = document.querySelector ("#listaTareas");
let categoriaSelect = document.querySelector("#categoriaSelect");

 
function añadirTarea (){
    
    buttonAñadir.addEventListener ("click", (e)=>{
        e.preventDefault();
        const categoria = categoriaSelect.value

        let formulario = form.value
        listaTareas.innerHTML+=`<li> ${formulario} ${categoria}   <button
        //  id="botonBorrar"
         >Eliminar</button> </li> ` ;
       
        // botonBorrar.addEventListener ("click", ()=>{
        //     listaTareas.
        // })



    })
}

añadirTarea();
