let miNombre = "Santiago";
console.log(miNombre)

let miApellido = "Perez";
console.log(miApellido)

let miEdad = 20;
console.log(miEdad)

let miMascota = "Perro";
console.log(miMascota)

let edadMascota = 10;
console.log(edadMascota)

let nombreCompleto;
console.log(
    `${miNombre} ${miApellido}`
    );

let textoPresentacion;
console.log(
    `Mi nombre completo es: ${miNombre} ${miApellido} Mi edad es: ${miEdad} Mi mascota es: ${miMascota} La edad de mi mascota es: ${edadMascota}`
    );

let sumaEdades = miEdad + edadMascota;
console.log("Suma de edades: " + sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log("Resta de edades: " + restaEdades);

let productoEdades = miEdad * edadMascota;
console.log("Producto de edades: " + productoEdades);

let divisionEdades = miEdad / edadMascota;
console.log("División de edades: " + divisionEdades);

let alumno = {
    nombre: "Santiago",
    edad: 20,
    carrera: "Programacion",
    promedio: 8.5,
    activo: true
  };
  console.table(alumno);
  console.log("Nombre:", alumno.nombre);
  console.log("Edad:", alumno.edad);
  console.log("Carrera:", alumno.carrera);
  console.log("Promedio:", alumno.promedio);
  console.log("Activo:", alumno.activo);

  let mascota = {
    nombre: "Max",
    edad: 3,
    raza: "Labrador",
    color: "Negro",
    vacunada: true
  };
  console.table(mascota);
  console.log("Nombre:", mascota.nombre);
  console.log("Edad:", mascota.edad);
  console.log("Raza:", mascota.raza);
  console.log("Color:", mascota.color);
  console.log("Vacunada:", mascota.vacunada);

  let frutas = ["manzana", "banana", "naranja", "uva", "kiwi"];
console.log(frutas);
console.log("Elemento 1:", frutas[0]); 
console.log("Elemento 2:", frutas[1]); 
console.log("Elemento 3:", frutas[2]); 
console.log("Elemento 4:", frutas[3]); 
console.log("Elemento 5:", frutas[4]);

let numeros = [10, 20, 30, 40, 50];

console.log(numeros);

console.log("Elemento 1:", numeros[0]);
console.log("Elemento 2:", numeros[1]);
console.log("Elemento 3:", numeros[2]); 
console.log("Elemento 4:", numeros[3]);
console.log("Elemento 5:", numeros[4]);

let familia = [
    { nombre: "Santiago", edad: 20 },
    { nombre: "Luca", edad: 18 },
    { nombre: "Fernando", edad: 50 },
    { nombre: "Karima", edad: 45 },
    { nombre: "Matias", edad: 28 }
  ];
  console.log(familia);
  console.log("Elemento 1:", familia[0]); 
  console.log("Elemento 2:", familia[1]); 
  console.log("Elemento 3:", familia[2]); 
  console.log("Elemento 4:", familia[3]); 
  console.log("Elemento 5:", familia[4]); 

let miEdad = prompt("Ingresa tu edad:");
let edadCompañero = prompt("Ingresa la edad de tu compañero:");
let edadesIguales = miEdad === edadCompañero;
let soyMayor = miEdad > edadCompañero;
let soyMenor = miEdad < edadCompañero;
console.log("Mi edad es igual a la de mi compañero:", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero:", soyMayor);
console.log("Mi edad es menor a la de mi compañero:", soyMenor);

let edad = prompt("Ingresa tu edad:");
let soyMayorDeEdad = edad >= 18;
console.log("Soy mayor de edad:", soyMayorDeEdad);
let edad = prompt("Ingresa tu edad:");
let altura = prompt("Ingresa tu altura en centímetros:");
let mayorDeSeisAnios = edad > 6;
let alturaMinima = altura >= 120;
let puedeSubir = mayorDeSeisAnios && alturaMinima;
console.log("Puede subir a la atracción:", puedeSubir);

let pase = prompt("Ingresa el tipo de pase (VIP, NORMAL o LIMITADO):");
let saldo = parseFloat(prompt("Ingresa el saldo disponible:"));
let esVIP = pase.toUpperCase() === "VIP";
let saldoSuficiente = saldo > 1000;
let puedePasar = esVIP || saldoSuficiente;
console.log("La persona puede pasar:", puedePasar);




  


  
  


