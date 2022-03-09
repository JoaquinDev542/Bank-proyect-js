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

    let validateUser = "";
    let validatePassword = "";
        
        while(validateUser != userName && validatePassword != password) {
            
            validateUser = prompt("Coloque su nombre de usuario");
            validatePassword = prompt("Coloque su contraseña");
            
            if(validateUser === userName && validatePassword === password) {
                console.log(`Hola ${userName}, usted ha iniciado sesión correctamente`);
                functionWhatWannaMake();
            } else {
                console.warn("Su usuario y/o contraseña es incorrecta, por favor, intentelo de nuevo"); 
            }
        }
}
    // Completar while


const functionWhatWannaMake = function() {
    let whatWannaMakeAlert = alert("¿Que desea hacer?");
    let wantDepositMoney = confirm("¿Desea depositar dinero?");

    if(wantDepositMoney === true) {
        functionDepositMoney();
    } else {
        let wantWithdrawMoney = confirm("¿Desea retirar dinero?");

        if(wantWithdrawMoney === true) {
            functionWithdrawMoney();
        } else {
            console.log("Usted ha decidido no ejecutar ninguna acción");
        }
    }
}

    // whatWannaMakeAlert = alert("¿Quiere repetir algún proceso?");

    // while(whatWannaMakeAlert != true) {
        // functionWhatWannaMake();

        // if(whatWannaMakeAlert === true) {
            // console.log("Usted no quiere repetir ningún proceso");
        // }
    // } 

    // Repetir bucle


// Funcion bucle ingresar-retirar dinero
// const functionDepositAndWithdraw = function () 
    

const functionDepositMoney = function() {
    depositMoney = prompt("Indique la cantidad de dinero que quiere depositar");
    let depositMoneyNumber =  Number(depositMoney);
    
    availableMoney = 0;
    availableMoney = availableMoney + depositMoneyNumber;

    console.log(`Usted ha ingresado ${depositMoneyNumber}`);
    console.log(`Su dinero total es ${availableMoney}`);
};

const functionWithdrawMoney = function() {
    withdrawMoney = prompt("Indique la cantidad de dinero a retirar");
    withdrawMoney = Number(withdrawMoney);

    if(withdrawMoney > availableMoney) {
        console.warn(`La cantidad a retirar (${withdrawMoney}) es mayor al disponible total (${availableMoney})`);
    } else {
        console.log(`La cantidad a retirar (${withdrawMoney}) ha sido retirada`);
        console.log(`Su saldo actual es de (${availableMoney - withdrawMoney})`);
    }
}
// Arreglar functionDepositMoney / functionWithdrawMoney tipo Number

functionConfirmCreateAccount();
