//Desde los inputs, crear validaciones en inicio sesión
//Mostrar cartel de bienvenida
//Registrar cuenta - Mostrar cartel de registrado
//Una vez realizados, envíar a la pagina principal
//Pagina Portfolio
//Con arrays, mostrar cada trabajo.
//También en la página de contacto

document.addEventListener("DOMContentLoaded", function(){   
let nombre;
let edad;
let email;
let trabajos = [
{año: 2024, trabajo: "Droide Star Wars", tipo: "3D"},
{año: 2022, trabajo: "RPG", tipo: "3D"},
{año: 2022, trabajo: "Escorpión Mécanico", tipo: "3D"},
{año: 2023, trabajo: "Hamburguesa McDonalds", tipo: "fotografia"},
{año: 2024, trabajo: "Afeitadora", tipo: "fotografia"},
{año: 2023, trabajo: "Bar Sherlock", tipo: "fotografia"},
{año: 2023, trabajo: "Ministerio de la ciudad", tipo: "motion graphic"},
{año: 2022, trabajo: "Infografía Greenpeace", tipo: "motion graphic"},
{año: 2022, trabajo: "Infografía estación espacial", tipo: "motion graphic"},
{año: 2024, trabajo: "Landing Page YPF", tipo: "motion graphic"},
{año: 2023, trabajo: "Lollapalloza", tipo: "web"},
{año: 2023, trabajo: "Fixture Mundial 2022", tipo: "web"}
];
let tresD = trabajos.filter(e => e.tipo === "3D");
let motionGraphic = trabajos.filter(e => e.tipo === "Motion Graphic");
let web = trabajos.filter(e => e.tipo === "web");
let fotografia = trabajos.filter(e => e.tipo === "fotografia");

function mensajeAlert(mensaje){
    alert(mensaje);
}

function registrarse(){

    nombre = prompt("Escriba un nombre de usuario");  
    if(nombre == null || nombre.length == 0){
        let nombreIncorrecto = "Escriba un nombre correcto"
        mensajeAlert(nombreIncorrecto); //Acá habría que corregir estos, también podemos declarar la variable con su mensaje.
        registrarse();
    }
    email = prompt("Escriba su mail");
    if(email == null || email.length == 0){
        let mailIncorrecto = "Escriba un mail correcto"
        mensajeAlert(mailIncorrecto);
        registrarse();
    }2
    edad = prompt("Escriba su Edad");
    if(isNaN(edad)){
        let edadIncorrecta = "Escoge una edad correcta"
        mensajeAlert(edadIncorrecta);
        registrarse();
    }
    clave = prompt("Escriba su clave \n (No mas de 7 caracteres)"); 
    if(clave == null || clave.length == 0){
        let claveIncorrecta = "Escriba una clave correcta";
        mensajeAlert(claveIncorrecta);
        registrarse();
    };  

    let teHasRegistrado = "¡Excelente, te has registrado! \n \n" + "Usuario Creado:  " + nombre + "\nEmail registrado: " + email + "\nEdad: " + edad +"\nClave Registrada: " + clave;
    mensajeAlert(teHasRegistrado);
    
    //La clave solo aparece para que se vea su funcionalidad.
    navegar();
};

function loguearse(){
    nombre = prompt("Escriba su nombre de usuario");
    clave = prompt("Escriba su clave");    
    mensajeAlert("Perfecto, te has logueado correctamente " + nombre)
    navegar();
};

function navegar(){    

    let salir = false;
    while(!salir){

    const portfolio = parseFloat(prompt("¿Que trabajos queres ver? Elige una opción \n 1 - 3D \n 2 - Fotografía \n 3 - Motion Graphic \n 4 - Desarrollo Web \n 5 - Todo\n \n Otras opciones\n 6 - Registrarse\n 7 - Loguearse\n 8 - Salir"));  

    switch (portfolio){
        case 1:
            tresD.forEach(e => {
                mensajeAlert(`Año: ${e.año}\nTrabajo: ${e.trabajo}\nTipo: ${e.tipo}`);
              });           
            navegar();
          break;
        case 2:
            fotografia.forEach(e => {
                mensajeAlert(`Año: ${e.año}\nTrabajo: ${e.trabajo}\nTipo: ${e.tipo}`);
              }); 
            navegar();
          break;
        case 3:
            web.forEach(e => {
                mensajeAlert(`Año: ${e.año}\nTrabajo: ${e.trabajo}\nTipo: ${e.tipo}`);
              });
            navegar();
          break;
        case 4:
            motionGraphic.forEach(e => {
                mensajeAlert(`Año: ${e.año}\nTrabajo: ${e.trabajo}\nTipo: ${e.tipo}`);
              }); 
            navegar();
          break;
        case 5:
            trabajos.forEach(e => {
                mensajeAlert("`Año: ${e.año}\nTrabajo: ${e.trabajo}\nTipo: ${e.tipo}`");
              });   
            navegar();
          break;
        case 6:
            registrarse();
          break;
        case 7:
            loguearse();
          break;
        case 8:
            salir = true;
          break;
        default:
            mensajeAlert("Atención, no has elegido ningún número");
          break;
    }
  }
};

function bienvenido(){  
let inicio = parseFloat(prompt("¿Hola, como estás? Elige una opción \n 1 - Registrarse \n 2 - Loguearse \n 3 - Solo quiero navegar \n 4 - Salir"));

    switch (inicio){
        case 1:
            registrarse();
            mensajeAlert("Navegar en la pagina");
            navegar();
        break;
        case 2:
            loguearse();
            navegar();
        break;
        case 3:
            navegar();   
            break;
        case 4:
            inicio = 4;
            break;
        default:
            mensajeAlert("No has escogido ningun numero")
            bienvenido(); 
            break;             
  }
};

alert("Bienvenido a la página Noiser Creative");
bienvenido();

while(inicio !== 4){
    if(inicio === 1){
        registrarse();
        mensajeAlert("Navegar en la pagina");    
    }else if(inicio === 2){
        loguearse();
    }else if(inicio === 3){
        navegar();
    }

    if(inicio === 4){
        inicio = 4;
    }
}   

}) //termina el DomContentLoader



