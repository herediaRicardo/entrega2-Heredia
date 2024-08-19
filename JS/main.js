
document.addEventListener("DOMContentLoaded", function(){   

let nombre;
let edad;
let email;
let tresD = "-Droide Star Wars \n-RPG \n-Escorpión mécanico";
let fotografia = "-Hamburguesa \n-Afeitadora \n-Bar Sherlock";
let motionGraphic = "-Ministerio de la Ciudad \n-Infografía Greenpeace";
let web = "-Landing Page para YPF \n-Api Lollapalloza \n-Fixture Mundial Qatar 2022";

function registrarse(){
    nombre = prompt("Escriba un nombre de usuario");  
    if(nombre == null || nombre.length == 0){
        alert("Escoge un nombre de usuario correcto");
        registrarse();
    }
    email = prompt("Escriba su mail");
    if(email == null || email.length == 0){
        alert("Escriba un mail correcto");
        registrarse();
    }
    edad = prompt("Escriba su Edad");
    if(isNaN(edad)){
        alert("Escoge una edad correcta");
        registrarse();
    }
    clave = prompt("Escriba su clave \n (No mas de 7 caracteres)"); 
    if(clave == null || clave.length == 0){
        alert("Escriba una clave correcta");
        registrarse();
    };  
    alert("¡Excelente, te has registrado! \n \n" + "Usuario Creado:  " + nombre + "\nEmail registrado: " + email + "\nEdad: " + edad +"\nClave Registrada: " + clave); 
    //La clave solo aparece para que se vea su funcionalidad.
    navegar();
};

function loguearse(){
    nombre = prompt("Escriba su nombre de usuario");
    clave = prompt("Escriba su clave");    
    alert("Perfecto, te has logueado correctamente " + nombre);
    navegar();
};

function navegar(){    
    const portfolio = parseFloat(prompt("¿Que trabajos queres ver? Elige una opción \n 1 - 3D \n 2 - Fotografía \n 3 - Motion Graphic \n 4 - Desarrollo Web\n \n Otras opciones\n 5 - Registrarse\n 6 - Loguearse\n 7 - Salir"));    
    if(portfolio === 1){
        alert("Te mostramos los trabajos 3D que realizamos: \n" + tresD);
        navegar()
    }else if(portfolio === 2){
        alert("Te mostramos los trabajos de Fotografía que realizamos: \n" + fotografia);
        navegar()
    }else if(portfolio === 3){
        alert("Te mostramos los trabajos Motion Graphics que realizamos: \n" + motionGraphic);
        navegar()
    }else if(portfolio === 4){
        alert("Te mostramos los trabajos de Desarrollo que realizamos: \n" + web)
        navegar()
    }else if(portfolio === 5){
        registrarse()
    }else if(portfolio === 6){
        loguearse()
    }else if(portfolio === 7){
        inicio = 4;
    }else{
        alert("No has escogido ningun numero")
        navegar()
    };
};

function bienvenido(){  
let inicio = parseFloat(prompt("¿Hola, como estás? Elige una opción \n 1 - Registrarse \n 2 - Loguearse \n 3 - Solo quiero navegar \n 4 - Salir"));
    if(inicio === 1){
        registrarse();
        alert("Navegar en la pagina");    
        navegar();
    }else if(inicio === 2){
        loguearse();
        navegar();
    }else if(inicio === 3){
        navegar();
    }else if(inicio === 4){
      inicio = 4;
    }else{
     alert("No has escogido ningun numero")
     bienvenido();
    };
};

alert("Bienvenido a la página Noiser Creative");
bienvenido();

while(inicio !== 4){
    if(inicio === 1){
        registrarse();
        alert("Navegar en la pagina");    
    }else if(inicio === 2){
        loguearse();
    }else if(inicio === 3){
        navegar();
    }
    if(inicio === 4){
        inicio = 4;
    }
}     
})



