/* Esta funcion irá agregando los posteos al hacer click en el boton "Manda tu Tweet!" */
function addTweet() {
  var comentaAqui = document.getElementById('comenta_aqui').value; // Esto rescata el valor que escribió el usuario

  // Condición en que plantea si el text area está vacío o si sobrepasa los 140 caracteres
  if (comentaAqui === "" || comentaAqui === null || comentaAqui.length > 140) {
    var button = document.getElementById('button'); // Primero "llamará" al botón desde el HTML
    button.disable = true; // Y después deshabilitará el boton
  } else { // Es caso de que NO se cumpla la condición anterior...
    document.getElementById('comenta_aqui').value = ""; // Esto limpia el text area
    var nuevoComentario = document.createElement('div'); // Creará un nuevo div que contendrá el comentario POSTEADO
    var tweets = document.getElementById('tweets'); // Llamará al div que contendrá todos los nuevos comentarios

    var paragraph = document.createElement('p'); // Creará elemento tipo parrafo donde va a estar contenido el comentario nuevo
    var nodeText = document.createTextNode(comentaAqui); // "comentaAqui" se definirá que es un nodo de TEXTO
    var hora = document.createElement('span'); // Creará un elemento para que se almacene la hora del post
    hora.textContent = moment().format('hh:mm a'); // Esto agrega el formato "hora" al elemento span creado arriba

    // Asignando padres:
    paragraph.appendChild(nodeText); // Se appendea el nodo de texto al parrafo
    nuevoComentario.appendChild(paragraph); // Párrafo y el formato de hora se appendearán al div nuevoComentario
    nuevoComentario.appendChild(hora);
    tweets.appendChild(nuevoComentario); // Y el div se appendeará al div vacío que está en HTML
  }
}

/* Esta función contará la cantidad de caracteres que ingresa el usuario */
function conteoCaracteres() {
  var longitud = 140; // La longitu máxima del Twitter es de 140 caracteres
  var subs = "";
  var caracteres = document.getElementById('comenta_aqui').value.length; // Esto rescata la longitud del valor de lo escrito
                                                                        // en el textarea "comenta_aqui"
  subs = longitud - caracteres;
  document.getElementById('maximo_caracteres').value = subs;

  // Condición en que plantea si la variable subs tiene cierta cantidad de caracteres, irá cambiando el contador de color
  if (subs < 11) {
    maximo_caracteres.style.color = "red";
  } else if (subs >= 11 && subs < 21) {
      maximo_caracteres.style.color = "orange";
  } else if (subs >= 21 && subs < 31) {
      maximo_caracteres.style.color = "blue";
  } else {
    maximo_caracteres.style.color = "black";
  }
}

/* Esta función define la altura máxima del textarea ANTES de que aparezca el scroll */
var comentaAqui = document.getElementById('comenta_aqui');
var heightLimit = 300; /* Esto limita al alto máximo de 300px */

comentaAqui.oninput = function() {
  comentaAqui.style.height = ""; /* Resetea el alto */
  comentaAqui.style.height = Math.min(comentaAqui.scrollHeight, heightLimit) + "px";
}
