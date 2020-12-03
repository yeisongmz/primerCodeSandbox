import axios from "axios";
var loading = document.getElementById("loading");
var mensaje = document.getElementById("mensaje");
var botonGet = document.getElementById("jason_get");

botonGet.addEventListener("click", function () {
  //obtener una mascota por id
  axios
    .get("https://petstore.swagger.io/v2/pet/1050", {
      responseType: "json"
    })

    .then(function (res) {
      //cuando obtenemos respuesta satisfactoria
      //la peticion se proceso de forma correcta
      if (res.status == 200) {
        alert("Se obtuvieron los datos " + res.data.name);
      }
      console.log(res);
    })

    .catch(function (err) {
      //cuando ocurre algun error
      console.log(err);
    })
    .finally(function (property) {
      //esta peticion siempre se ejecuta al final del procesamiento
      console.log("finally");
      loading.style.display = "none";
    });
});

/*
var mascotas = [
  { tipo: "perro", nombre: "kukis", active: false, dueño: "hernan" },
  { tipo: "gato", nombre: "michi", active: true, dueño: "deisy" },
  { tipo: "conejo", nombre: "marrón", active: false, dueño: "jose" },
  { tipo: "perro", nombre: "kukis", active: true, dueño: "angel" },
  { tipo: "gato", nombre: "blanco", active: true, dueño: "matias" },
  { tipo: "mono", nombre: "negro", active: true, dueño: "marian" },
  { tipo: "perro", nombre: "kukis", active: false, dueño: "matias" },
  { tipo: "mono", nombre: "tyson", active: true, dueño: "jose" },
  { tipo: "conejo", nombre: "marrón", active: false, dueño: "marian" },
  { tipo: "mono", nombre: "yeison", active: true, dueño: "victor" },
  { tipo: "gato", nombre: "blanco", active: true, dueño: "jose" },
  { tipo: "mono", nombre: "chango", active: false, dueño: "angel" }
];
*/

/*
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

console.log("vamos a filtrar las mascotas");

let filtrarGatos = _.filter(mascotas, function (o) {
  return o.tipo === "gato";
});

console.log("filtramos los gatos");

console.log("Esta es la lista de gatos");
console.log(filtrarGatos);
*/
/*
console.log("filtrar monos activos");
let filtrarMonosActivos = _.filter(mascotas, function(o){
  return o.tipo=="mono" && o.active==true;
});


console.log("lista de monos activos");
console.log(filtrarMonosActivos);*/

//tarea

//filtrar mascotas de deisy activoas

//filtrar monos de matias activos
