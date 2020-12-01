var mascotas = [
  { tipo: "perro", nombre: "kukis", active: false },
  { tipo: "gato", nombre: "michi", active: false },
  { tipo: "conejo", nombre: "Gudú", active: false }
];

let buscarGato = _.findIndex(mascotas, function (o) {
  return o.nombre == "mich" && o.active;
});

console.log("buscar gato");
console.log("El resultado da: " + buscarGato + ", entonces");
if (buscarGato == -1) {
  console.log("no se encontró ningun gato");
} else if (buscarGato <= -1) {
  console.log("El gato  se encuentra en la posicion " + buscarGato);
}

let buscarMascotaPorTipo = _.findIndex(mascotas, function (o) {
  return o.tipo == "perro";
});

console.log("buscar mascota por tipo");
console.log("se encontró la mascota " + buscarMascotaPorTipo);
