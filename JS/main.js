//inicializacion de variables
let tarjetasdestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerresultado = null;
let segundoresultado = null;
// let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 70;
let timerinicial = 70;
let tiemporegresivo = null;
let id_primero = null;
let id_segundo = null;
let etiquetasA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];


//sonidos
let winaudio = new Audio('./Sonido/ganar.wav');
let loseaudio = new Audio('./Sonido/perder.wav');
let clickaudio = new Audio('./Sonido/click.wav');
let rightaudio = new Audio('./Sonido/right.wav');
let wrongaudio = new Audio('./Sonido/wrong.wav');

//aputnando a documento html
// let mostrarmovimientos = document.getElementById('movimientos');
let mostraraciertos = document.getElementById('aciertos');
let mostrartiempo = document.getElementById('t-restantes'); 
let mostrarmodelo = document.getElementById('modales')

//carta de respuesta
let mostrartitulo = document.getElementById("titulo_respuesta");
let mostrardescripcion = document.getElementById("descripcion_respuesta");
let titulo = null;
let descripción = null;

// Obtener la URL actual
const urlParams = new URLSearchParams(window.location.search);
// Obtener el valor del parámetro team1 y team2
const team1 = urlParams.get('team1');
console.log('Equipo 1:', team1);

let equipoElement = document.getElementById("team-name1");
equipoElement.textContent = `EQUIPO ${team1}`;

// Declara los arrays fuera de la función para que sean globales
// const titulos = [];
// const descripciones = [];

cargarDatosFetch()
console.log("Hola \n\n\n\n\n\n")
// Recuperar los datos del localStorage como variables globales (en caso de que ya estén almacenados)
window.dataVectorA = JSON.parse(localStorage.getItem('dataVectorA')) || [];
window.dataVectorB = JSON.parse(localStorage.getItem('dataVectorB')) || [];
window.dataVectorC = JSON.parse(localStorage.getItem('dataVectorC')) || [];

console.log("tamaño");
console.log(dataVectorA.length);


const TituloFetch1 = dataVectorA
const descripcionFetch1 = dataVectorB
// const ImagenesFetch1 = dataVectorC
// console.log(TituloFetch1[1]);
// console.log(descripcionFetch1[1]);
// console.log(ImagenesFetch1[1]);


//cargar y recortar enlaces para vincular imagenes
let ImagenesFetch1 = [];
for (let i = 0; i < dataVectorC.length; i++) {
    const link = dataVectorC[i];
    if (link === null || typeof link !== 'string') {
        ImagenesFetch1.push(String(link)); // Tratar el valor nulo o no string como texto
    } else {
        const regex = /\/d\/([^/]+)\//;
        const match = link.match(regex);
        if (match && match.length > 1) {
            ImagenesFetch1.push(match[1]); // Devolver la parte deseada del enlace
        } else {
            ImagenesFetch1.push(link); // Retornar el enlace original si no se puede encontrar la parte deseada
        }
    }
}
console.log("wow")
console.log(ImagenesFetch1);




// // Llamar a la función para cargar datos de manera síncrona
// cargarDatos();
// console.log(titulos);
// console.log(descripciones);
console.log(TituloFetch1.length)
console.log('titi')

//obtenr posiciones de respuestas a usar
// Creamos un nuevo arreglo con 12 valores aleatorios del arreglo original
const MostrarRespuestas = obtenerValoresAleatorios(TituloFetch1.length, 12); //proabando
// console.log(numeros[MostrarRespuestas[id]])
console.log(MostrarRespuestas)
let numeros = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]; 
//arreglo duplicado y combinado
// let numeros = MostrarRespuestas.flatMap(valor => [valor, valor]);

numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros)
console.log(numeros[8]) 
console.log(MostrarRespuestas[numeros[8]])
console.log(TituloFetch1[MostrarRespuestas[numeros[8]]])
console.log(descripcionFetch1[MostrarRespuestas[numeros[8]]])

console.log(mundial)

// let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// numeros = numeros.sort(()=>{return Math.random()-0.5});
// console.log(numeros);

//funcion cuenta el tiempo
function contartiempo(){
    tiemporegresivo = setInterval(()=>{
        timer--; //disminuye el timer
        mostrartiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiemporegresivo);
            bloqueartarjetas();
            loseaudio.play();
        }
    },1000);
}

let tarjetas_bloquedas = Array(49).fill(false);

function bloqueartodo(){
    for(let i = 0; i<=23; i++){
        let tarjetabloqueada = document.getElementById(i);
            // tarjetabloqueada.innerHTML = `<img src="./Imagenes/${MostrarRespuestas[numeros[i]]}.png" alt="">`;
            // tarjetabloqueada.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas[numeros[i]]]}" >`;
            tarjetabloqueada.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas[numeros[i]]]}" >`;
            tarjetabloqueada.disabled = true;
    }

    for(let i = 25; i<=48; i++){
        let id_original2 = i - 25;
        let tarjetabloqueada = document.getElementById(i);
        // console.log("este no esta bloqueado" + MostrarRespuestas2[numeros2[id_original2]])
        // tarjetabloqueada.innerHTML = `<img src="./Imagenes/${MostrarRespuestas2[numeros2[id_original2]]}.png" alt="">`;
        // tarjetabloqueada.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas2[numeros2[id_original2]]]}" >`;
        tarjetabloqueada.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas2[numeros2[id_original2]]]}" >`;
        tarjetabloqueada.disabled = true;
    }

}

function desbloqueartodo(){
    for(let i = 0; i<=23; i++){
        let tarjetabloqueada = document.getElementById(i);
            tarjetabloqueada.innerHTML = `${etiquetasA[i]}`;
            tarjetabloqueada.disabled = false;
    }

    for(let i = 25; i<=48; i++){
        let id_original2 = i - 25;
        let tarjetabloqueada = document.getElementById(i);
        // console.log("este no esta bloqueado" + MostrarRespuestas2[numeros2[id_original2]])
        tarjetabloqueada.innerHTML = `${etiquetasA[id_original2]}`;
        tarjetabloqueada.disabled = false;
    }

}


function bloqueartarjetas_jugador1(){
    for(let i = 0; i<=23; i++){
        let tarjetabloqueada = document.getElementById(i);
        // tarjetabloqueada.innerHTML = `<img src="./Imagenes/${MostrarRespuestas[numeros[i]]}.png" alt="">`;
        if(tarjetas_bloquedas[i]){
            // tarjetabloqueada.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas[numeros[i]]]}" >`;
            tarjetabloqueada.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas[numeros[i]]]}" >`;
            tarjetabloqueada.disabled = true;
        }else{
            tarjetabloqueada.disabled = true;
        }
    }
}

function desbloqueartarjetas_jugador1(){
    for(let i = 0; i<=23; i++){
        let tarjetabloqueada = document.getElementById(i);
        // tarjetabloqueada.innerHTML = `<img src="./Imagenes/${MostrarRespuestas[numeros[i]]}.png" alt="">`;
        if(!tarjetas_bloquedas[i]){
            tarjetabloqueada.disabled = false;
        }
    }
}

function bloqueartarjetas_jugador2(){
    for(let i = 25; i<=48; i++){
        let id_original2 = i - 25;
        let tarjetabloqueada = document.getElementById(i);

        if(tarjetas_bloquedas[i]){
            console.log("este no esta bloqueado" + MostrarRespuestas2[numeros2[i]])
            // tarjetabloqueada.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas2[numeros2[id_original2]]]}" >`;
            tarjetabloqueada.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas2[numeros2[id_original2]]]}" >`;
            tarjetabloqueada.disabled = true;
        }else{
            tarjetabloqueada.disabled = true;
        }
    }
}

function desbloqueartarjetas_jugador2(){
    for(let i = 25; i<=48; i++){
        let tarjetabloqueada = document.getElementById(i);
        if(!tarjetas_bloquedas[i]){
            tarjetabloqueada.disabled = false;
        }
    }
}

// bloqueartarjetas_rival()

//funcion principal
bloqueartodo()

function destapar(id){
    var frame = document.querySelector(".frame169");

     // Verifica si el elemento fue encontrado
     if (frame) {
        // Cambia el estilo de fondo del elemento
        // border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        frame.style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
        frame.style.borderImageSlice = "1";
        frame.style.background = "#FFFFFF";
    } else {
        console.error("No se encontró ningún elemento con la clase .frame169");
    }

    tarjetasdestapadas++;
    console.log(tarjetasdestapadas);

    if(tarjetasdestapadas == 1){
        // Mostrar el primer numero
        tarjeta1 =document.getElementById(id);// selecciona elemento HTML
        primerresultado = numeros[id] //guarda primer resultadp
        id_primero = id; //guardar id
        // tarjeta1.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas[primerresultado]]}" >`;
        tarjeta1.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas[primerresultado]]}" >`;

        clickaudio.play();

        //Deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasdestapadas ==2){
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoresultado = numeros[id];
        id_segundo = id; // guardar id segundo
        // tarjeta2.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas[segundoresultado]]}" >`;
        tarjeta2.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas[segundoresultado]]}" >`;

        //Deshabilirtar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        // movimientos++;
        // mostrarmovimientos.innerHTML = `Movimientos: ${movimientos}`;


        if(primerresultado == segundoresultado){
            // bloquear tarjetas temporales para ambos jugadores
            tarjetas_bloquedas[id_primero] = true;
            tarjetas_bloquedas[id_segundo] = true;
            console.log(tarjetas_bloquedas)

            tarjetasdestapadas = 0;

            //Aumento aciertos
            aciertos++;
            mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;
            rightaudio.play();

            //prueba

            //MOSTRAR CUADRO DE RESPUESTA
            // crear una varibale que permita cerar el cuadro de respuesta
            const closemodal = document.querySelector('.modal_close');
            // asignar uan imagen al cuadro de respuesta
            console.log("hola" + segundoresultado);
            console.log("verdader posicion " +MostrarRespuestas[segundoresultado] )
            // mostrarmodelo.innerHTML = `<img src="${ImagenesFetch1[MostrarRespuestas[segundoresultado]]}" >`;
            mostrarmodelo.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch1[MostrarRespuestas[segundoresultado]]}" >`;
            mostrarmodelo.disabled = true;
        
            // mostrarmodelo.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w500&id=11qs7jY8srAPXd2bqzytExSa9cmDroB0Q">`;
            //asignar titulo
            // titulo = "Ejemplo poner titulo :)";
            mostrartitulo.innerHTML = `${TituloFetch1[MostrarRespuestas[segundoresultado]]}`;
            //asignar descripcion
            // descripción = "Eejemplo descripción"
            mostrardescripcion.innerHTML = `${descripcionFetch1[MostrarRespuestas[segundoresultado]]}`;



            //permite mostrar el resultado
            const modal = document.querySelector('.modal');
            modal.classList.add('modal--show');


            // Función para cerrar el modal al hacer clic en el enlace de "Cerrar"
            if(aciertos == 12){
                closemodal.addEventListener('click', function() {
                    modal.classList.remove('modal--show');
                    window.location.href = "ganador.html?team1=" + encodeURIComponent(team1);
                });
            }
            else{
                closemodal.addEventListener('click', function() {
                    modal.classList.remove('modal--show');
                    // window.location.href = "ganador.html?team1";
                });
            }
            
            //modal.innerHTML = `<img src="./Imagenes/${segundoresultado}.png" alt="">`;
            //fin de prueba
            //******************************************************** */
            //LUGAR EN DONDE PODRAS REALIZAR EL MENU DE GANADOR
            if(aciertos == 12){
                winaudio.play();
                clearInterval(tiemporegresivo);
                mostraraciertos.innerHTML = `Aciertos: ${aciertos} :)`;
                // window.location.href = "ganador.html?team1";
                // mostrartiempo.innerHTML = `Fantastico solo demoraste ${timerinicial - timer} segundos`;
                // mostrarmovimientos.innerHTML = `Movimientos: ${movimientos} :)`;
            }
            //minuto 44:11
            bloqueartarjetas_jugador2();

        }else{
            //agregar diseño de css en javascript
            frame.style.borderImage = "linear-gradient(to bottom right, #AFEEEE 0%, #E0FFFF 25%, #B0E0E6 50%, #87CEFA 75%, #ADD8E6 100%)";
            frame.style.borderImageSlice = "1";
            frame.style.background = "linear-gradient(160.65deg, rgba(75, 183, 230, 0) 0.74%, rgba(75, 183, 230, 0.6) 50%, rgba(75, 183, 230, 0) 102.03%)";
            
            document.querySelector(".frame170").style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
            document.querySelector(".frame170").style.borderImageSlice = "1";
            document.querySelector(".frame170").style.background = "#FFFFFF";

            wrongaudio.play();
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = `${etiquetasA[tarjeta1.id]}`;
                tarjeta2.innerHTML = `${etiquetasA[tarjeta2.id]}`;
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasdestapadas = 0; 

                bloqueartarjetas_jugador1();
                desbloqueartarjetas_jugador2();
            },800);
        }



    }
}


// Función para obtener un arreglo con "cantidad" valores aleatorios de rango 0 a "tamanoArreglo" tamaño
//tamanoArreglo: tamaño de un arreglo
function obtenerValoresAleatorios(tamanoArreglo, cantidad) {
    // Creamos un arreglo con números crecientes
  const posicionesRespuesta = [];

  for (let i = 0; i < tamanoArreglo; i++) {
    posicionesRespuesta.push(i);
  }
  // Usamos el método sort para mezclar el arreglo de forma aleatoria
  const arregloMezclado = posicionesRespuesta.sort(() => Math.random() - 0.5);
  
  // Tomamos los primeros 'cantidad' elementos del arreglo mezclado
  return arregloMezclado.slice(0, cantidad);
}

// Función para cargar los datos de manera síncronaa
function cargarDatos() {
    // Crear una nueva instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
  
    // Abrir una conexión síncrona
    xhr.open('GET', './Texto/Respuestas.txt', false);
    xhr.send();
  
    // Verificar si la solicitud fue exitosa (status 200)
    if (xhr.status === 200) {
      const contenidoTxt = xhr.responseText;
  
      // Dividir el contenido del archivo por líneas y almacenarlo en el arreglo
      const lineas = contenidoTxt.split('\n');
      lineas.forEach(linea => {
      // Verificar si la línea no está vacía
      if (linea.trim() !== '') {
          const [titulo, descripcion] = linea.split(':');
          titulos.push(titulo.trim());
          descripciones.push(descripcion.trim());
      }
      });
  
  
      // console.log(titulos);
      // console.log(descripciones);
    } else {
      console.error('Error al cargar los datos. Código de estado:', xhr.status);
    }
  }

  function recargarPagina() {
    location.reload();
}

function cargarDatosFetch() {
    let url = 'https://docs.google.com/spreadsheets/d/1qmCUikHtGJq3y7QyJUOytKPYqffK2PEy8B-fX-2lY-k/gviz/tq?';

    return fetch(url)
        .then(res => res.text())
        .then(rep => {
            const data = JSON.parse(rep.substr(47).slice(0, -2));
            let dataVectorA = [];
            let dataVectorB = [];
            let dataVectorC = [];

            data.table.rows.forEach((main) => {
                main.c.forEach((ele, index) => {
                    if (index === 1) {
                        dataVectorA.push(ele.v);
                    } else if (index === 2) {
                        dataVectorB.push(ele.v);
                    } else if (index === 3) {
                        dataVectorC.push(ele.v);
                    }
                });
            });

            // Guardar los datos en el localStorage
            localStorage.setItem('dataVectorA', JSON.stringify(dataVectorA));
            localStorage.setItem('dataVectorB', JSON.stringify(dataVectorB));
            localStorage.setItem('dataVectorC', JSON.stringify(dataVectorC));

            // Asignar los datos a las variables globales
            window.dataVectorA = dataVectorA;
            window.dataVectorB = dataVectorB;
            window.dataVectorC = dataVectorC;
            console.log("OLAP")
            console.log(dataVectorA);

            return { dataVectorA, dataVectorB, dataVectorC };
        });
}