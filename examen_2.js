//CONTADOR DE CLICKS
let btn1 = document.querySelector('#clickbtn');
let showclicks = document.querySelector('#showdata');
let counter = 0;

function printClick() {
    counter++;
    console.log("You clicked the button!!!")
    showclicks.innerHTML = "Esta pagina le gusta a " + counter + " Personas";
}

btn1.addEventListener('click', printClick);
// RELOJ
const $tiempo=document.querySelector('.tiempo'),
$fecha= document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    anio= f.getFullYear(),
    diaSemana=f.getDay();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let timeString= f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;

    let semana=['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    let showSemana= (semana[diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`
}
setInterval(() =>{
    Relojdigital()
},1000);

function cambiarImagen1(){
    var img= document.getElementById('image1');
    img.src='aeropuerto2.jpg';
}
function cambiarImagen2(){
    var img= document.getElementById('image2');
    img.src='licoreria2.jpg';
}
function cambiarImagen3(){
    var img= document.getElementById('image3');
    img.src='emisarios2.jpeg';
}
function cambiarImagen4(){
    var img= document.getElementById('image4');
    img.src='traslados2.jpg';
}