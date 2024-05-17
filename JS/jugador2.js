//inicializacion de variables
let mundial = "La vida es todo lo que necesito"
let tarjetasdestapadas2 = 0;
let tarjeta12 = null;
let tarjeta22 = null;
let primerresultado2 = null;
let segundoresultado2 = null;
// let movimientos2 = 0;
let aciertos2 = 0;
let temporizador2 = false;
let timer2 = 70;
let timerinicial2 = 70;
let tiemporegresivo2 = null;
let etiquetasB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];

//sonidos
let winaudio2 = new Audio('./Sonido/ganar.wav');
let loseaudio2 = new Audio('./Sonido/perder.wav');
let clickaudio2 = new Audio('./Sonido/click.wav');
let rightaudio2 = new Audio('./Sonido/right.wav');
let wrongaudio2 = new Audio('./Sonido/wrong.wav');

//aputnando a documento html
// let mostrarmovimientos2 = document.getElementById('movimientos2');
let mostraraciertos2 = document.getElementById('aciertos2');
let mostrartiempo2 = document.getElementById('t-restantes'); 
let mostrarmodelo2 = document.getElementById('modales')

//carta de respuesta
let mostrartitulo2 = document.getElementById("titulo_respuesta");
let mostrardescripcion2 = document.getElementById("descripcion_respuesta");
let titulo2 = null;
let descripción2 = null;

// Obtener la URL actual
const urlParams1 = new URLSearchParams(window.location.search);
// Obtener el valor del parámetro team1 y team2
const team2 = urlParams1.get('team2');
console.log('Equipo 2:', team2);

let equipoElement2 = document.getElementById("team-name2");
equipoElement2.textContent = `EQUIPO ${team2}`;

cargarDatosFetch()
// caragr datos desde local
// console.log("Holi")
// Recuperar los datos del localStorage como variables globales (en caso de que ya estén almacenados)
window.dataVectorA = JSON.parse(localStorage.getItem('dataVectorA')) || [];
window.dataVectorB = JSON.parse(localStorage.getItem('dataVectorB')) || [];
window.dataVectorC = JSON.parse(localStorage.getItem('dataVectorC')) || [];

//crear auxiliares de los vectores fetch
const TituloFetch2 = dataVectorA
const descripcionFetch2 = dataVectorB
// const ImagenesFetch2 = dataVectorC


//cargar y recortar enlaces para vincular imagenes
let ImagenesFetch2 = [];
for (let i = 0; i < dataVectorC.length; i++) {
    const link = dataVectorC[i];
    if (link === null || typeof link !== 'string') {
        ImagenesFetch2.push(String(link)); // Tratar el valor nulo o no string como texto
    } else {
        const regex = /\/d\/([^/]+)\//;
        const match = link.match(regex);
        if (match && match.length > 1) {
            ImagenesFetch2.push(match[1]); // Devolver la parte deseada del enlace
        } else {
            ImagenesFetch2.push(link); // Retornar el enlace original si no se puede encontrar la parte deseada
        }
    }
}
console.log("wow")
console.log(ImagenesFetch2);


// Declara los arrays fuera de la función para que sean globales
// const titulos2 = [];
// const descripciones2 = [];

// Llamar a la función para cargar datos de manera síncrona
// cargarDatos2();
// console.log(titulos2);
// console.log(descripciones2);
console.log(TituloFetch2.length)
console.log('titi')


//obtenr posiciones de respuestas a usar
// Creamos un nuevo arreglo con 12 valores aleatorios del arreglo original
const MostrarRespuestas2 = obtenerValoresAleatorios2(TituloFetch2.length, 12); //proabando
// console.log(numeros[MostrarRespuestas[id]])
console.log(MostrarRespuestas2)
let numeros2 = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]; 
//arreglo duplicado y combinado
// let numeros = MostrarRespuestas.flatMap(valor => [valor, valor]);

numeros2 = numeros2.sort(()=>{return Math.random()-0.5});
console.log(numeros2)
console.log("NUMERO  " + numeros2[2]) 
console.log(MostrarRespuestas2[numeros2[8]])
console.log(TituloFetch2[MostrarRespuestas2[numeros2[8]]])
console.log(descripcionFetch2[MostrarRespuestas2[numeros2[8]]])


//funcion principal
function destapar2(id){
    var frame2 = document.querySelector(".frame170");
    // Verifica si el elemento fue encontrado
    if (frame2) {
        // Cambia el estilo de fondo del elemento
        frame2.style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
        frame2.style.borderImageSlice = "1";
        frame2.style.background = "#FFFFFF";
    } else {
        console.error("No se encontró ningún elemento con la clase .frame169");
    }

    id_original = id - 25;

    tarjetasdestapadas2++;
    console.log(tarjetasdestapadas2);

    if(tarjetasdestapadas2 == 1){
        // Mostrar el primer numero
        tarjeta12 =document.getElementById(id);// selecciona elemento HTML
        primerresultado2 = numeros2[id_original] //guarda primer resultadp
        id_primero = id; 
        // tarjeta12.innerHTML = `<img src="./Imagenes/${MostrarRespuestas2[primerresultado2]}.png" alt="">`;
        // tarjeta12.innerHTML = `<img src="${ImagenesFetch2[MostrarRespuestas2[primerresultado2]]}" >`;
        tarjeta12.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch2[MostrarRespuestas2[primerresultado2]]}" >`;

        clickaudio2.play();

        //Deshabilitar primer boton
        tarjeta12.disabled = true;
        console.log("LA VICTIMA " + primerresultado2)
        console.log("LA VICTIMA " + MostrarRespuestas2[primerresultado2])
    }else if(tarjetasdestapadas2 ==2){
        //mostrar segundo numero
        tarjeta22 = document.getElementById(id);
        segundoresultado2 = numeros2[id_original];
        id_segundo = id; 
        // tarjeta22.innerHTML = `<img src="./Imagenes/${MostrarRespuestas2[segundoresultado2]}.png" alt="">`;
        // tarjeta22.innerHTML = `<img src="${ImagenesFetch2[MostrarRespuestas2[segundoresultado2]]}">`;
        tarjeta22.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch2[MostrarRespuestas2[segundoresultado2]]}">`;

        //Deshabilirtar segundo boton
        tarjeta22.disabled = true;

        //incrementar movimientos
        // movimientos2++;
        // mostrarmovimientos2.innerHTML = `Movimientos: ${movimientos2}`;

        if(primerresultado2 == segundoresultado2){
             // bloquear tarjetas temporales para ambos jugadores
             tarjetas_bloquedas[id_primero] = true;
             tarjetas_bloquedas[id_segundo] = true;
             console.log(tarjetas_bloquedas)

            tarjetasdestapadas2 = 0;

            //Aumento aciertos
            aciertos2++;
            mostraraciertos2.innerHTML = `Aciertos: ${aciertos2}`;
            rightaudio2.play();

            //prueba

            //MOSTRAR CUADRO DE RESPUESTA
            // crear una varibale que permita cerar el cuadro de respuesta
            const closemodal2 = document.querySelector('.modal_close');
            // asignar uan imagen al cuadro de respuesta
            console.log("hola" + segundoresultado2);
            console.log("verdader posicion " +MostrarRespuestas2[segundoresultado2] )
            // mostrarmodelo2.innerHTML = `<img src="./Imagenes/${MostrarRespuestas2[segundoresultado2]}.png" alt="">`;
            // mostrarmodelo2.innerHTML = `<img src="${ImagenesFetch2[MostrarRespuestas2[segundoresultado2]]}" >`;
            mostrarmodelo2.innerHTML = `<img src="https://drive.google.com/thumbnail?sz=w&id=${ImagenesFetch2[MostrarRespuestas2[segundoresultado2]]}" >`;
            mostrarmodelo2.disabled = true;
            //asignar titulo
            // titulo = "Ejemplo poner titulo :)";
            mostrartitulo2.innerHTML = `${TituloFetch2[MostrarRespuestas2[segundoresultado2]]}`;
            //asignar descripcion
            // descripción = "Eejemplo descripción"
            mostrardescripcion2.innerHTML = `${descripcionFetch2[MostrarRespuestas2[segundoresultado2]]}`;



            //permite mostrar el resultado
            const modal2 = document.querySelector('.modal');
            modal2.classList.add('modal--show');


            // // Función para cerrar el modal al hacer clic en el enlace de "Cerrar"
            // closemodal2.addEventListener('click', function() {
            //     modal2.classList.remove('modal--show');
            // });
            
                        // Función para cerrar el modal al hacer clic en el enlace de "Cerrar"
            if(aciertos2 == 12){
                closemodal2.addEventListener('click', function() {
                    modal2.classList.remove('modal--show');
                    window.location.href = "ganador2.html?team2=" + encodeURIComponent(team2);
                });
            }
            else{
                closemodal2.addEventListener('click', function() {
                    modal2.classList.remove('modal--show');
                    // window.location.href = "ganador2.html?team2=" + encodeURIComponent(team2);
                    // window.location.href = "ganador.html?team1";
                });
            }
            //modal.innerHTML = `<img src="./Imagenes/${segundoresultado}.png" alt="">`;
            //fin de prueba

            if(aciertos2 == 12){
                winaudio2.play();
                clearInterval(tiemporegresivo2);
                mostraraciertos2.innerHTML = `Aciertos: ${aciertos2} :)`;
                // mostrartiempo.innerHTML = `Fantastico solo demoraste ${timerinicial - timer} segundos`;
                // mostrarmovimientos2.innerHTML = `Movimientos: ${movimientos2} :)`;
            }
            //minuto 44:11
            bloqueartarjetas_jugador1();
            
        }else{
            // agregar diseño ende javascript
            frame2.style.borderImage = "linear-gradient(to bottom right, #AFEEEE 0%, #E0FFFF 25%, #B0E0E6 50%, #87CEFA 75%, #ADD8E6 100%)";
            frame2.style.borderImageSlice = "1";
            frame2.style.background = "linear-gradient(160.65deg, rgba(75, 183, 230, 0) 0.74%, rgba(75, 183, 230, 0.6) 50%, rgba(75, 183, 230, 0) 102.03%)";

            document.querySelector(".frame169").style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
            document.querySelector(".frame169").style.borderImageSlice = "1";
            document.querySelector(".frame169").style.background = "#FFFFFF";

            wrongaudio2.play();
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta12.innerHTML = `${etiquetasB[tarjeta12.id - 25]}`;
                tarjeta22.innerHTML = `${etiquetasB[tarjeta22.id - 25]}`;
                tarjeta12.disabled = false;
                tarjeta22.disabled = false;
                tarjetasdestapadas2 = 0;
                bloqueartarjetas_jugador2();
                desbloqueartarjetas_jugador1();
            },800);
        }
    }
}




function obtenerValoresAleatorios2(tamanoArreglo, cantidad) {
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


// Función para cargar los datos de manera síncrona
function cargarDatos2() {
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
          const [titulo2, descripcion2] = linea.split(':');
          titulos2.push(titulo2.trim());
          descripcionFetch2.push(descripcion2.trim());
      }
      });
  
    } else {
      console.error('Error al cargar los datos. Código de estado:', xhr.status);
    }
  }

  function recargarPagina2() {
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

          return { dataVectorA, dataVectorB, dataVectorC };
      });
}