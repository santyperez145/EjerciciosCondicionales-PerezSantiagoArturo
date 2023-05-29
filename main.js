//N°1 | Mayor que://

function esMayorQue(num1, num2) {
  if (num1 > num2) {
    console.log("El primer número es mayor que el segundo.");
  } else {
    console.log("El primer número no es mayor que el segundo.");
  }
}


//N°2 | Igual o diferente://

function esIgualOxDiferente(num1, num2) {
  if (num1 === num2) {
    console.log("Los números son iguales.");
  } else {
    console.log("Los números son diferentes.");
  }
}


//N°3 | El más grande o iguales://

function elMasGrandeOxIguales(num1, num2) {
  if (num1 > num2) {
    console.log("El primer número es el más grande.");
  } else if (num2 > num1) {
    console.log("El segundo número es el más grande.");
  } else {
    console.log("Los números son iguales.");
  }
}

//N°4 | El más chico entre tres números://

function elMasChico(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    console.log("El primer número es el más chico.");
  } else if (num2 <= num1 && num2 <= num3) {
    console.log("El segundo número es el más chico.");
  } else {
    console.log("El tercer número es el más chico.");
  }
}

//N°5 | La persona más alta y de mayor edad://

function personaMasAltaYMayor(persona1, persona2) {
  if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es la persona más alta.");
  } else if (persona2.altura > persona1.altura) {
    console.log(persona2.nombre + " es la persona más alta.");
  } else {
    console.log("Ambas personas tienen la misma altura.");
  }
  if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es la persona de mayor edad.");
  } else if (persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " es la persona de mayor edad.");
  } else {
    console.log("Ambas personas tienen la misma edad.");
  }
}

//N°6 | Capacitado para conducir://

function capacitadoParaConducir(nombre, edad, altura, vision) {
  if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.");
  } else {
    console.log(nombre + ", no cumples los requisitos para conducir.");
  }
}

//N°7 | Control de ingreso://

function controlIngresoYPase(nombre, pase, tieneEntrada) {
  if (nombre === "TuNombre" || pase === "vip") {
    console.log("¡Bienvenido/a!");
  } else if (tieneEntrada) {
    let usarEntrada = confirm("¿Deseas utilizar tu entrada?");
    if (usarEntrada) {
      console.log("¡Bienvenido/a!");
    } else {
      console.log("¡Despedida!");
    }
  } else {
    let comprarEntrada = confirm("¿Deseas comprar una entrada?");
    if (comprarEntrada) {
      let dineroDisponible = parseInt(prompt("Ingresa el dinero disponible:"));
      if (dineroDisponible >= 1000) {
        console.log("Venta de entrada y bienvenida.");
      } else {
        console.log("Rechazo de venta.");
      }
    } else {
      console.log("Despedida.");
    }
  }
}


//N°8 | Juego de adivinanza://

function juegoAdivinanza() {
  const numeroIncognita = Math.floor(Math.random() * 10) + 1;
  let intentos = 3;

  while (intentos > 0) {
    let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste! Has adivinado el número.");
      return;
    } else if (numeroIngresado > numeroIncognita) {
      console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else {
      console.log("El número ingresado es menor, vuelve a intentarlo.");
    }

    intentos--;
  }

  console.log("Agotaste tus intentos. El número era: " + numeroIncognita);
}


//N°9 | Clasificación por edad://

function categorizarEdad(edad) {
  if (edad < 0) {
    console.log("Edad inválida.");
  } else if (edad <= 12) {
    console.log("Eres un infante.");
  } else if (edad <= 18) {
    console.log("Eres un adolescente.");
  } else if (edad <= 45) {
    console.log("Eres un mayor joven.");
  } else if (edad <= 100) {
    console.log("Eres un anciano.");
  } else {
    let confirmacion = confirm("¿Realmente tienes esa edad?");
    if (confirmacion) {
      console.log("Eres un anciano.");
    } else {
      console.log("No puedo determinar tu categoría de edad.");
    }
  }
}


//N°10 | Juego de piedra, papel o tijeras://

function juegoPiedraPapelTijeras(jugador1, jugador2) {
  if (
    (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
  ) {
    console.log("¡Jugador 1 ha ganado!");
  } else if (
    (jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
    (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
    (jugador2 === "TIJERAS" && jugador1 === "PAPEL")
  ) {
    console.log("¡Jugador 2 ha ganado!");
  } else if (jugador1 === jugador2) {
    console.log("¡Ha sido un empate!");
  } else {
    console.log("¡Uno de los jugadores ha hecho trampa!");
  }
}

//N°11 | Mensajes según el color://

function mensajesSegunColor(color) {
  switch (color) {
    case "Blanco":
    case "Negro":
      console.log("Falta de color.");
      break;
    case "Verde":
      console.log("El color de la naturaleza.");
      break;
    case "Azul":
      console.log("El color del agua.");
      break;
    case "Amarillo":
      console.log("El color del sol.");
      break;
    case "Rojo":
      console.log("El color del fuego.");
      break;
    case "Marrón":
      console.log("El color de la tierra.");
      break;
    default:
      console.log("Excelente elección, no lo teníamos pensado.");
  }
}

//N°12 | Operaciones matemáticas://

function operacionesMatematicas(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      console.log("El resultado de la suma es: " + (num1 + num2));
      break;
    case "resta":
      console.log("El resultado de la resta es: " + (num1 - num2));
      break;
    case "multiplicacion":
      console.log("El resultado de la multiplicación es: " + (num1 * num2));
      break;
    case "division":
      if (num2 !== 0) {
        console.log("El resultado de la división es: " + (num1 / num2));
      } else {
        console.log("ERROR: No se puede dividir por cero.");
      }
      break;
    default:
      console.log("Operación inválida.");
  }
}

//N°13 | Datos del documento nacional de identidad://

function registrarDNI() {
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  let dni = prompt("Ingresa tu número de DNI:");
  let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/AAAA):");

  console.log("Datos ingresados:");
  console.log("Nombre: " + nombre);
  console.log("Apellido: " + apellido);
  console.log("DNI: " + dni);
  console.log("Fecha de nacimiento: " + fechaNacimiento);

  let confirmacion = confirm("¿Los datos ingresados son correctos?");

  if (confirmacion) {
    const dniObjeto = {
      nombre,
      apellido,
      dni,
      fechaNacimiento,
    };

    console.log("Registro exitoso:");
    console.table(dniObjeto);
  } else {
    console.log("Vuelve a intentarlo en 1 mes.");
  }
}


