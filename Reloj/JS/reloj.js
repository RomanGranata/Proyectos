
function clock(){


const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let hoy = new Date();
let hora = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let dia = hoy.getDate();
let mes = month[hoy.getMonth()];
let anio = hoy.getFullYear();

    hora = (hora < 9) ? "0" + hora : hora;
    minutos = (minutos < 9) ? "0" + minutos : minutos;
    segundos = (segundos < 9) ? "0" + segundos : segundos;


    let tiempo = hora + " : " + minutos + " : " + segundos ;
    let fecha = dia + " de " + mes + " del " + anio ; 


    let hrRotation = ((hora % 12) * 180) / 6;
    let mnRotation = (minutos * 180)/30; 
    let sgRotation = (segundos*180)/30;



    document.getElementById("digital").innerHTML = tiempo;
    document.getElementById("digital").textContent = tiempo;

    document.getElementById("fecha-reloj").innerHTML = fecha;
    document.getElementById("fecha-reloj").textContent = fecha;
    
    document.querySelector('#horaAnalogica').style.transform = "rotate("+hrRotation+ "deg)";
    document.querySelector('#minutosAnalogicos').style.transform = "rotate("+mnRotation+ "deg)";
    document.querySelector('#segundosAnalogicos').style.transform = "rotate("+sgRotation+ "deg)";



    setTimeout(clock,1000);

}   

clock()










