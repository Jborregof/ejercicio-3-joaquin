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

//Añadimos la alerta al hacer click en el body
document.body.addEventListener("click", function() {
  alert("body");
});

//Seleccionamos la lista de colores
var lista = document.querySelector(".color-list");

//Añadiremos por un bucle for cada li
for (i = 0; i < colorList.length; i++) {
  //Seleccionamos el nombre de color y codigo hex que estamos en la posicion i
  let nombre = colorList[i].colorName;
  let color = colorList[i].hex;

  // <li class="color-item">

  //Creamos el li que estará en la posicion i
  let liI = document.createElement("li");
  //Le ponemos la clase correspondiente si es impar
  if (i % 2 == 1) {
    liI.classList.add("color-item--odd");
  }
  //Le ponemos a todos la clase
  liI.classList.add("color-item");
  //Le añadimos la alerta al hacer click al li y paramos la propagacion para que no salte la alerta del body
  liI.addEventListener("click", e => {
    alert(nombre);
    e.stopPropagation();
  });

  // 	<div class="color-name">Color: white</div>

  //Creamos el div
  let div1 = document.createElement("div");
  //Le añadimos al div la clase
  div1.classList.add("color-name");
  //Le añadimos el text content con el nombre del color
  div1.textContent = "Color: " + nombre;

  // 	<div class="color-show">Muestra</div>

  //Creamos el siguiente div
  let div2 = document.createElement("div");
  //Le añadimos al div la clase
  div2.classList.add("color-show");
  //Le añadimos el text content muestra
  div2.textContent = "Muestra";
  //Le ponemos de fondo el color que es
  div2.style.backgroundColor = color;

  // 	<button class="color-set">Next item color</button>

  //Creamos el primer boton
  let btn1 = document.createElement("button");
  //Le añadimos la clase al boton
  btn1.classList.add("color-set");
  //Le añadimos el text content next item color
  btn1.textContent = "Next item color";

  // 	<button class="color-set">Page color</button>

  //Creamos el segundo boton
  let btn2 = document.createElement("button");
  //Le añadimos la clase al boton
  btn2.classList.add("color-set");
  //Le añadimos el text content page color
  btn2.textContent = "Page color";
  //Le añadimos el evento al boton que al hacer click le cambia el fondo al body por el color en cuestion. Ademas, paramos la propagacion
  btn2.addEventListener("click", e => {
    document.body.style.backgroundColor = color;
    e.stopPropagation();
  });

  //Insertamos en el li los dos div y dos botones siempre al final
  liI.insertAdjacentElement("beforeend", div1);
  liI.insertAdjacentElement("beforeend", div2);
  liI.insertAdjacentElement("beforeend", btn1);
  liI.insertAdjacentElement("beforeend", btn2);

  //Lo insertamos dentro de la lista despues de su ultimo hijo
  lista.insertAdjacentElement("beforeend", liI);
}

//Recorreremos la lista para añadirle la funcionalidad al boton next item color. Esto lo hacemos a parte de cuando lo generamos ya que cuando los generamos no existe el siguiente li
for (j = 0; j < colorList.length; j++) {
  //Definimos n, que irá desde 1 a (colorList.length-1)+2, representando el indice de la lista ul en el html. Esto se debe a que n=0 es la cabecera "Lista de botones para cambio de color"
  let n;
  if (j == colorList.length - 1) {
    n = 1;
  } else {
    n = j + 2;
  }

  //Definimos la lista de botones con la clase color-set
  let btn = document.getElementsByClassName("color-set");
  //Definimos k que recorrerá la lista de los botones en posicion par de la lista btn. Esto se debe a que la clase color-set la tienen por cada fila dos botones
  let k = 2 * j;
  //Seleccionamos el codigo hex del color correspondiente
  let color = colorList[j].hex;
  //Definimos el array liJ de los hijos de la lista ul del html
  let liJ = lista.children;
  //Añadimos al boton k el evento que al hacer click en el boton el color del liJ posicion n (que se corresponde a la siguiente) le ponga el color correspondiente. Ademas, paramos la propagacion
  btn[k].addEventListener("click", e => {
    liJ[n].style.backgroundColor = color;
    e.stopPropagation();
  });
}
