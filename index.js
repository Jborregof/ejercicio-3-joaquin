// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

var lista = document.querySelector(".color-list");
for (i = 0; i < colorList.length; i++) {
  let nombre = colorList[i].colorName;
  let color = colorList[i].hex;
  // <li class="color-item">

  //Creamos el li que estará en la posicion i
  let liI = document.createElement("li");
  //Le ponemos de innerHTML el mismo que el li correspondiente de la lista1 pero cambiando span por button
  if (i % 2 == 1) {
    liI.classList.add("color-item--odd");
  } else {
    liI.classList.add("color-item");
  }
  liI.classList.add("color-item");

  // 	<div class="color-name">Color: white</div>

  let div1 = document.createElement("div");
  div1.classList.add("color-name");
  div1.textContent = "Color: " + nombre;

  // 	<div class="color-show">Muestra</div>

  let div2 = document.createElement("div");
  div2.classList.add("color-show");
  div2.textContent = "Muestra";
  div2.style.backgroundColor = color;

  // 	<button class="color-set">Next item color</button>

  let btn1 = document.createElement("button");
  btn1.classList.add("color-set");
  btn1.textContent = "Next item color";

  // 	<button class="color-set">Page color</button>

  let btn2 = document.createElement("button");
  btn2.classList.add("color-set");
  btn2.textContent = "Page color";
  btn2.addEventListener(
    "click",
    i => (document.body.style.backgroundColor = color)
  );

  liI.insertAdjacentElement("beforeend", div1);
  liI.insertAdjacentElement("beforeend", div2);
  liI.insertAdjacentElement("beforeend", btn1);
  liI.insertAdjacentElement("beforeend", btn2);

  //lo insertamos dentro de ul2 despues de su ultimo hijo
  lista.insertAdjacentElement("beforeend", liI);
}

for (j = 0; j < colorList.length; j++) {
  let n;
  if (j == colorList.length - 1) {
    n = 1;
  } else {
    n = j + 2;
  }
  let k = 2 * j;
  let color = colorList[j].hex;
  let btn = document.getElementsByClassName("color-set");
  let liJ = lista.children;
  btn[k].addEventListener("click", x => (liJ[n].style.backgroundColor = color));
}
//
