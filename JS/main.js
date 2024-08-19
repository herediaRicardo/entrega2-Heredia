/*
¿Que tengo que hacer?

• Formulario y validaciones
1- Crear un alert con un saludo "Bienvenido la pagina Noiser"
2- Crear un prompt con las siguientes opciones: 
   - ¿Queres registarte? 1
         -Pasar a estar logueado
   - ¿Queres loguearte? 2
         - Una vez logueado, poder subir publicaicones en portfolio
   - ¿Solo quieres navegar en la página? 3
         - Acá puedo navegar entre los tipos de trabajo
   - Salir

--------------------------------------------------------------------------
//Si quiero registrarme, hacer lo siguiente...//
Elegir opcion Registrarme
Mediante prompt, que el usuario mediante la entrada escriba su nombre, mail, direccion, clave, telefono...
Creo un while hasta que valide que sea el mail tenga un @
-Crear validaciones para los siguientes parametros:
•Mail tiene que tener un arroba si o si, sino, tirar un error de alert y volver atras.
•El telefono si o si tiene que tener que ser de numero, si es string, no validarlo, mostrar un alert y volver atrás.
//acá podría aplicar un ciclo while, si ninguno de estos están validados, volver a realiza el ciclo de registro. //Debo mostrar si o si un CANCELAR, como opción.

-Una vez todo registrado y validado, realizar un alert que diga que ya estoy registrado, si todo está correcto y ya estoy registrado, entrar a la opción de poder elegir que tipo de trabajos quiero ver...

--------------------------------------------------------------------------
//Si quiero loguearme//
Elegir opcion Loguearme
Mediante prompt escribo mail, mediante otro prompt escribo la clave.
-Una vez logueado, mediante un alert("has iniciado sesión con exito")
-Desde acá se puede navegar... y elegir que tipo de trabajo ver.

--------------------------------------------------------------------------
//Solo quiero navegar en la pagina//
Elegir opcion de navegar libremente y elegir que tipo de trabajo quiero ver
*/


let nombre;
let edad;
let email;
let tresD = "-Droide Star Wars \n-RPG \n-Escorpión mécanico";
let fotografia = "-Hamburguesa \n-Afeitadora \n-Bar Sherlock";
let motionGraphic = "-Ministerio de la Ciudad \n-Infografía Greenpeace";
let web = "-Landing Page para YPF \n-Api Lollapalloza \n-Fixture Mundial Qatar 2022";



// function validarEmail(email){  
//     const emailCheck = "@";
//     return emailCheck.test(email);
// }

function registrarse(){
    nombre = prompt("Escriba su nombre de usuario");
    email = prompt("Escriba su mail");
    clave = prompt("Escriba su clave \n (No mas de 7 caracteres)");          
    
    alert("¡Excelente, te has registrado! \n \n" + "Usuario Creado:  " + nombre + "\nEMail registrado: " + email + "\nClave Registrada: " + clave); 
}

function loguearse(){
    nombre = prompt("Escriba su nombre de usuario");
    clave = prompt("Escriba su clave");    
    alert("Perfecto, te has logueado correctamente " + nombre);
}

function navegar(){
    
    const portfolio = parseFloat(prompt("¿Que trabajos queres ver? Elige una opción \n 1 - 3D \n 2 - Fotografía \n 3 - Motion Graphic \n 4 - Desarrollo Web\n \n Otras opciones\n 5 - Registrarse\n 6 - Loguearse\n 7 - Salir"));
    
    if(portfolio === 1){
        alert("Te mostramos los trabajos 3D que realizamos: \n" + tresD);
        navegar()
    }else if(portfolio === 2){
        alert("Te mostramos los trabajos de Fotografía que realizamos: \n" + tresD);
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
    }
}

function bienvenido(){  

const inicio = parseFloat(prompt("¿Hola, como estás? Elige una opción \n 1 - Registrarse \n 2 - Loguearse \n 3 - Solo quiero navegar \n 4 - Salir"));

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
     bienvenido()
    }
}

alert("Bienvenido a la página Noiser Creative");

bienvenido()

while(inicio !== 4){
    if(inicio === 1){
        registrarse();
        alert("Navegar en la pagina");    
        navegar();
    }else if(inicio === 2){
        loguearse();
        navegar();
    }else if(inicio === 3){
        navegar();
    }
    if(inicio === 4){
        inicio = 4;
    }
}

