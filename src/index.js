import axios from "axios";
var loading = document.getElementById("loading");
var mensaje = document.getElementById("mensaje");

var botonPut = document.getElementById("put_general");
botonPut.addEventListener("click", function () {
  axios({
    method: "post",
    url: "https://petstore.swagger.io/v2/pet",
    data: {
      id: 1050,
      name: "camila"
    }
  })
    .then(function (res) {
      //cuando obtenemos respuesta satisfactoria
      //la peticion se proceso de forma correcta
      if (res.status == 200) {
        alert("se ejecutó correctamente " + res.data.name);
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

//PET
//todo lo que necesito para hacer una peticion get cotas
var botonGetM = document.getElementById("m_get");
botonGetM.addEventListener("click", function () {
  //obtener una mascota por id
  let codMascota = "1050";
  axios
    .get("https://petstore.swagger.io/v2/pet/" + codMascota, {
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

// todo lo que necesito para la peticion POST. mascotas
var botonPostM = document.getElementById("m_post");
botonPostM.addEventListener("click", function () {
  let codMascota = "1051";
  axios
    .post("https://petstore.swagger.io/v2/pet", {
      data: {
        id: codMascota,
        name: "YEISON",
        status: "available"
      }
    })
    .then(function (res) {
      if (res.status == 200) {
        alert("Los datos fueron guardados");
        console.log("Los datos fueron guardados", res);
      }
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

// STORE/ORDER

//peticion get para /store/order
var botonGetO = document.getElementById("o_get");
botonGetO.addEventListener("click", function () {
  //obtener una mascota por id
  let codOrder = "10000";
  axios
    .get("https://petstore.swagger.io/v2/store/order/" + codOrder, {
      responseType: "json"
    })

    .then(function (res) {
      //cuando obtenemos respuesta satisfactoria
      //la peticion se proceso de forma correcta
      if (res.status == 200) {
        alert("Se obtuvieron los datos " + res.data.shipDate);
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

// peticion post para /store/order
var botonPostO = document.getElementById("o_post");
botonPostO.addEventListener("click", function () {
  let idOrder = "10000";
  axios
    .post("https://petstore.swagger.io/v2/pet", {
      data: {
        id: idOrder,
        petId: 1050,
        quantity: 1,
        shipDate: "El día de hoy",
        status: "placed",
        complete: true
      }
    })
    .then(function (res) {
      if (res.status == 200) {
        alert("Los datos fueron guardados");
        console.log("Los datos fueron guardados", res);
      }
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

// peticion delete /store/order
var botonEliminarO = document.getElementById("o_delete");
botonEliminarO.addEventListener("click", function () {
  let idOrder = "";
});

// peticion con params,
var botonGetParams = document.getElementById("params");
botonGetParams.addEventListener("click", function () {
  let filterbyStatus = "available";
  axios
    .get("https://petstore.swagger.io/v2/pet/findByStatus", {
      params: {
        status: filterbyStatus
      },
      responseType: "json"
    })
    .then(function (res) {
      console.log(res);
      console.log("cantidad " + res.data.length);
    })
    .catch(function (err) {
      console.log(err);
    })
    .finally(function () {
      // always executed
      console.log("finalizó");
    });
});

var botonDelete = document.getElementById("m_delete");
botonDelete.addEventListener("click", function () {
  //obtener una mascota por id
  let codMascota = "49039786";
  axios
    .delete("https://petstore.swagger.io/v2/pet/" + codMascota)

    .then(function (res) {
      //cuando obtenemos respuesta satisfactoria
      //la peticion se proceso de forma correcta
      if (res.status == 200) {
        alert("Se eliminaron los datos " + res.data.name);
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

var botonUpdate = document.getElementById("m_update");
botonUpdate.addEventListener("click", function () {
  //actualizar una mascota por id
  axios
    .put("https://petstore.swagger.io/v2/pet/", {
      data: {
        id: 1050,
        category: {
          id: 0,
          name: "rottweiler"
        },
        name: "rossye",

        status: "available"
      }
    })

    .then(function (res) {
      //cuando obtenemos respuesta satisfactoria
      //la peticion se proceso de forma correcta
      if (res.status == 200) {
        alert("Se actualizaron los datos ");
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
