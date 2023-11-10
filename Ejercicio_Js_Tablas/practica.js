const arrayDeCoches = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    color: "Azul",
    precio: 20000,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    year: 2019,
    color: "Gris",
    precio: 18000,
  },
  {
    marca: "Ford",
    modelo: "Focus",
    year: 2021,
    color: "Rojo",
    precio: 22000,
  },
  {
    marca: "Chevrolet",
    modelo: "Cruze",
    year: 2018,
    color: "Blanco",
    precio: 17000,
  },
  {
    marca: "Nissan",
    modelo: "Sentra",
    year: 2017,
    color: "Negro",
    precio: 15000,
  },
];

if (document.querySelector("#table-container")) {
  var tableContainer = document.querySelector("#table-container");

  let table = document.createElement("table");
  tableContainer.appendChild(table);

  let trHeader = document.createElement("tr");
  table.appendChild(trHeader);

  let th1 = document.createElement("th");
  th1.innerHTML = "Marca";
  let th2 = document.createElement("th");
  th2.innerHTML = "Modelo";
  let th3 = document.createElement("th");
  th3.innerHTML = "Year";
  let th4 = document.createElement("th");
  th4.innerHTML = "Color";
  let th5 = document.createElement("th");
  th5.innerHTML = "Precio";

  trHeader.appendChild(th1);
  trHeader.appendChild(th2);
  trHeader.appendChild(th3);
  trHeader.appendChild(th4);
  trHeader.appendChild(th5);

  arrayDeCoches.forEach((coches) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerHTML = coches.marca;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = coches.modelo;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = coches.year;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = coches.color;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = coches.precio;
    tr.appendChild(td5);
  });
}


