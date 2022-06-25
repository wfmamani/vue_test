// let tarea1 = 'Ordenar mi cuarto'
// let tarea2 = 'Sacar la basura'
// let tarea3 = 'Lavar la ropa'

// // let elemento = document.createElement('div')
// // elemento.innerText = tarea1
// // document.body.appendChild(elemento)

// // elemento = document.createElement('div')
// // elemento.innerText = tarea2
// // document.body.appendChild(elemento)

// // elemento = document.createElement('div')
// // elemento.innerText = tarea3
// // document.body.appendChild(elemento)

function crearElemento(tarea) {
    let listaTareas = document.getElementById('lista-tareas')
    let elemento = document.createElement('li')
    elemento.innerText = tarea
    listaTareas.appendChild(elemento)
}

// crearElemento(tarea1)
// crearElemento(tarea2)
// crearElemento(tarea3)

// crearElemento('Ir a la tienda')


let tareas = ['Ordenar mi cuarto', 'Sacar la basura', 'Lavar la ropa']

// tareas.forEach( function(unaTarea) {
//     crearElemento(unaTarea)
// })

tareas.forEach( unaTarea => crearElemento(unaTarea) )

function agregarTarea(){
    let ulTareas = document.getElementById('lista-tareas')
    ulTareas.innerHTML = ''

    let tareaInput = document.getElementById('tarea-nueva')
    tareas.push(tareaInput.value)

    tareaInput.value = ''
    tareaInput.focus()
    tareas.forEach( unaTarea => crearElemento(unaTarea) )
}