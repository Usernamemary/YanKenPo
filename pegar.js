
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
  if(opcion == "tijera" && opcionCompu == "tijera") {
    alert (`PC: Yo elegí ${opcionCompu}. Empatamos ╮（￣▽￣）╭`)
  } else if (opcion == "tijera" && opcionCompu == "papel") {
    alert (`PC: Yo elegí ${opcionCompu}. Ganaste, ¡hoy es tu día de suerte!  (っ◕‿◕)っ `)
    
  } else if (opcion == "tijera" && opcionCompu == "piedra") {

    alert (`PC: Yo elegí ${opcionCompu}. La máquina siempre gana ( •̀ᴗ•́ )و ̑̑ `)
  } else if (opcion == "piedra" && opcionCompu == "piedra") {
    alert (`PC: Yo elegí ${opcionCompu}. Empatamos ╮（￣▽￣）╭`)

  } else if (opcion == "piedra" && opcionCompu == "papel") {
    alert (`PC: Yo elegí ${opcionCompu}. La máquina siempre gana ( •̀ᴗ•́ )و ̑̑ `)

  } else if (opcion == "piedra" && opcionCompu == "tijera") {
    alert (`PC: Yo elegí ${opcionCompu}. Ganaste, ¡hoy es tu día de suerte!  (っ◕‿◕)っ `)

  } else if (opcion == "papel" && opcionCompu == "piedra") {
    alert (`PC: Yo elegí ${opcionCompu}. Ganaste, ¡hoy es tu día de suerte!  (っ◕‿◕)っ `)

  } else if (opcion == "papel" && opcionCompu == "tijera") {
    alert (`PC: Yo elegí ${opcionCompu}. La máquina siempre gana ( •̀ᴗ•́ )و ̑̑ `)

  } 
  else if (opcion == "papel" && opcionCompu == "papel") {
    alert (`PC: Yo elegí ${opcionCompu}. Empatamos ╮（￣▽￣）╭`)

  } else {
    alert (`PC: Porfis escribe piedra, papel o tijera en minúscula y sin espacios adicionales o signos extra.`)
  }

}

azar();

