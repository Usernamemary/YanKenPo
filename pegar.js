var opcion = prompt('Escribe piedra, papel o tijera');
var opcionCompu = Math.floor(Math.random() * 3);

if (opcionCompu==0) {
  opcionCompu = "piedra"
} else if (opcionCompu==1) {
  opcionCompu = "papel"
} else if (opcionCompu==2) {
  opcionCompu = "tijera"
} else {
  console.log("Error")
}

function azar() {
  if(opcion == "tijera" && opcionCompu == "tijera" || opcion == "piedra" && opcionCompu == "piedra" || opcion == "papel" && opcionCompu == "papel"  ) {
    alert (`PC: Yo elegí ${opcionCompu}. Empatamos ╮（￣▽￣）╭`)
  } else if (opcion == "tijera" && opcionCompu == "piedra" || opcion == "piedra" && opcionCompu == "papel" || opcion == "papel" && opcionCompu == "tijera" ) {
    alert (`PC: Yo elegí ${opcionCompu}. La máquina siempre gana ( •̀ᴗ•́ )و ̑̑ `)
  }   else if (opcion == "piedra" && opcionCompu == "tijera"|| opcion == "papel" && opcionCompu == "piedra"  || opcion == "tijera" && opcionCompu == "papel") {
    alert (`PC: Yo elegí ${opcionCompu}. Ganaste, ¡hoy es tu día de suerte!  (っ◕‿◕)っ `)

  } else {
    alert (`PC: Porfis escribe piedra, papel o tijera en minúscula y sin espacios adicionales o signos extra.`)
  }

}

azar();


//Version switch - Otra version para copiar y pegar-

var opcion = prompt('Escribe piedra, papel o tijera');
var opcionCompu = Math.floor(Math.random() * 3);

switch(opcionCompu) {
  case 1:
    opcionCompu = "papel"    
    break;
  
  case 2:
    opcionCompu = "tijera"
    break;
  case 0:
    opcionCompu = "piedra"    
    break;

    
}



function azar() {

 switch(true) {
    case (opcion == "tijera" && opcionCompu == "tijera"):
    case (opcion == "piedra" && opcionCompu == "piedra"):
    case (opcion == "papel" && opcionCompu == "papel"):
      
    alert (`PC: Yo elegí ${opcionCompu}. Empatamos ╮（￣▽￣）╭`)

    break;
    case (opcion == "tijera" && opcionCompu == "papel"):
    case (opcion == "piedra" && opcionCompu == "tijera"):
    case (opcion == "papel" && opcionCompu == "piedra"):
  
    alert (`PC: Yo elegí ${opcionCompu}. Ganaste, ¡hoy es tu día de suerte!  (っ◕‿◕)っ `)

    break;

    case (opcion == "tijera" && opcionCompu == "piedra"):
    case (opcion == "piedra" && opcionCompu == "papel"):
    case (opcion == "papel" && opcionCompu == "tijera"):  

    alert (`PC: Yo elegí ${opcionCompu}. La máquina siempre gana ( •̀ᴗ•́ )و ̑̑ `)

    break;

    default: 

    alert (`PC: Porfis escribe piedra, papel o tijera en minúscula y sin espacios adicionales o signos extra.`)

}


}

azar();

