let canvas;
let ctx;
const fps = 50;
//Ancho de la ficha
let anchoF = 50;
let altoF = 50;
let bandera = true;
//tipo de ficha
let pasto = "green";
let agua = "#026396";
let tierra = "brown";
let protagonista;
//Escenario Array - Matriz
let lista = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 0],
  [1, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [1, 1, 1, 1, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 2, 0, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 0, 2, 2, 2, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
];

function dibujarEscenario() {
  let color;
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista[i].length; j++) {
      if (lista[i][j] == 0) {
        color = pasto;
      }
      if (lista[i][j] == 1) {
        color = agua;
      }
      if (lista[i][j] == 2) {
        color = tierra;
      }
      ctx.fillStyle = color;
      ctx.fillRect(j * anchoF, i * altoF, anchoF, altoF);
    }
  }
}

let jugador = function () {
  //Atributos
  this.x = 1;
  this.y = 1;
  this.color = "black";

  //Métodos
  this.dibuja = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * anchoF, this.y * altoF, anchoF, altoF);
  };

  this.arriba = function () {
       
      if (this.y - 1 >= 0 && lista[this.y - 1][this.x] == 2) {
      this.y--;
      } 
      
  }
  this.abajo = function () {
    if (this.y + 1 < lista[0].length && lista[this.y + 1][this.x] == 2) {
      this.y++;
    }
  }
  this.derecha = function () {
    if (this.x + 1 < lista[0].length && lista[this.y][this.x + 1] == 2) {
      this.x++;
    }
    
  }
  this.izquierda = function () {
    if (this.y - 1 >= 0 && lista[this.y][this.x - 1] == 2) {
      this.x--;
    }
  }
  
  /* this.margenes = function (x,y) {
    let colision;
    if (lista[y][x] == 2) {
      colision = true;

    } else {
      colision = false;
    }
    return colision;
  } */
  
};

function inicializa() {
  canvas = document.getElementById("canva");
  ctx = canvas.getContext("2d");
  // leer teclado
  //Se crea el jugador
  protagonista = new jugador();
  movimientos();

  //FPS
  setInterval(function () {
    principal();
  

  }, 1000 / fps);
}



function principal() {  
  dibujarEscenario();
  protagonista.dibuja();
}

function movimientos() {
  document.addEventListener('keydown', (tecla) => {
    if (tecla.key == 'ArrowUp') {
      protagonista.arriba();  
    }
    if (tecla.key == 'ArrowDown') {
      protagonista.abajo();
    }
    if (tecla.key == 'ArrowRight') {
      protagonista.derecha();
    }
    if (tecla.key == 'ArrowLeft') {
      protagonista.izquierda();
    }
  });
}