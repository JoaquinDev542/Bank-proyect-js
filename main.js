// Algoritmo
    // Nuestra necesidad principal es validar un usuario y contraseña y poder depositar o retirar dinero.
    // Los datos de entrada serán el nombre de usuario, la contraseña y el dinero a depositar o retirar.
    // Los datos de salida serán si el valor del usuario/contraseña son correctos y el dinero que queda en nuestro banco.


// Código
let userName = "";
let password = "";
let availableMoney = undefined;
let depositMoney = "";
let withdrawMoney = undefined;

const functionConfirmCreateAccount = function () {
    let confirmCreateAccount = confirm("¿Quieres crear una cuenta?");

    if(confirmCreateAccount === true) {
        console.log("Usted ya puede crearse una cuenta");
        functionCreateAccount();
        functionLogin();

    } else {
        console.log("Usted ha decidido no crearse una cuenta");
    }
}



const functionCreateAccount = function () {
    userName = prompt("Por favor, coloque su nombre de usuario");
    password = prompt("Por favor, coloque una contraseña");
    console.log("Usted se ha registrado correctamente");
}

const functionLogin = function () {
    let loginMessage = confirm("Si desea iniciar sesión, confirmelo con la opción OK");

    if(loginMessage === true) {
        console.log("Usted puede iniciar sesión");
        functionValidateAccount();
    } else {
        console.log("Usted ha decidido no iniciar sesión");
    }
} 

const functionValidateAccount = function() {
    let validateUser = prompt("Coloque su nombre de usuario");
    let validatePassword = prompt("Coloque su contraseña");

    if(validateUser === userName && validatePassword === password) {
        console.log(`Hola ${userName}, usted ha iniciado sesión correctamente`);
    } else {
        console.warn("Su usuario y/o contraseña es incorrectos, por favor, intentelo de nuevo"); 

    }

}


functionConfirmCreateAccount();
