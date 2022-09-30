//CON SWITCH

// function elementoQuimicoBuscar(simbolo){
//     let elementoQuimico=''
//     switch(simbolo){
//         case'Al': elementoQuimico='Aluminio'
//             break
//         case'S': elementoQuimico='Azufre'
//             break
//         case'Cl': elementoQuimico='Cloro'
//             break
//         case'He': elementoQuimico='Helio'
//             break
//         case'B': elementoQuimico='Boro'
//             break
//     }
//     return elementoQuimico
// }

// let simbolo = prompt('Digite el simbolo a buscar')

// alert(elementoQuimicoBuscar(simbolo))


//------------------------------------------------


//CON UN OBJETO

// function elementoQuimicoBuscar(simbolo){
//     return simbolosQuimicos[simbolo]
// }

// const simbolosQuimicos={
//     Al:'Aluminio',
//     S:'Azufre',
//     Cl:'Cloro',
//     He:'Helio',
//     B:'Boro',
// }

// let simbolo = prompt('Digite el simbolo a buscar')

// alert(elementoQuimicoBuscar(simbolo))



//-----------------------------------------------


//OBJETOS CON ARREGLOS

// const ordenDePizza=[
//     {
//         tipo: 'Margarita',
//         tamaño:'INdividual',
//         precio: 8000,
//         extras:['queso','Champiñon','Carne'],
//         'para llevar': true
//     },
//     {
//         tipo: 'Cuatro quesos',
//         tamaño: 'Familiar',
//         precio: 60000,
//         extras: ['queso','pimenton'],
//         'para llevar': false
//     }
// ]

// .shift para borrar el primer objeto del arreglo
// ,pop para borrar el ultimo objeto del arreglo



//----------------------------------------------------


// OBJETOS ANIDADOS

const miReceta={
    descripcion:'Mi postre favorito',
    precio:15600,
    ingredientes:{
        masa:{
            harina:'100gr',
            sal:'1 cucharadita',
            agua:'1 taza'
        },
        cobertura:{
            azucar:'120gr',
            chocolate:'4 cucharadas',
            mantequilla:'200gr'
        }
    }
}