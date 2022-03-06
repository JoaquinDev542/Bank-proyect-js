// Algoritmo
    // Nuestra necesidad principal es validar un usuario y contraseña y poder depositar o retirar dinero.
    // Los datos de entrada serán el nombre de usuario, la contraseña y el dinero a depositar o retirar.
    // Los datos de salida serán si el valor del usuario/contraseña son correctos y el dinero que queda en nuestro banco.

// PseudoCodigo

    // (Almacenar Datos)
        // Crear Variable userName = "";
        // Crear Variable password = "";
        // Crear Variable availableMoney = "";


    // (Función Confirmar Creación Cuenta)
        // Crear Variable confirmCreateAccount y escribir "¿Quieres crear una cuenta?";

        // Si (confirmCreateAccount === true) {
            // Imprimir "Usted ya puede crearse una cuenta";
        // } deLoContrario {
            // Imprimir "Usted ha decidido no crearse una cuenta"
        // }

// Si la respuesta es true, que el programa siga compilando, de lo contrario que termine ahí.


    // (Función Crear Cuenta)
        // Si (confirmCreateAccount === true) {
            // Almacenar en userName y Escribir "Por favor, coloque un nombre de usuario";
            // Almacenar en password y Escribir "Por favor, coloque una contraseña";
            // Imprimir "Usted se ha registrado correctamente";
        // }

// Llamar la función dentro de la función.


    // (Función Iniciar Sesión)
        // Crear Variable loginMessage y Escribir "Si desea iniciar sesión, confirmelo con la opción Ok"

        // Si (loginMessage === true) {
            // Imprimir "Usted puede iniciar sesión";
        // } deLocontrario {
            // Imprimir "Usted ha decidido no iniciar sesión";
        // }

// Si la respuesta es true, que el programa siga compilando, de lo contrario que termine ahí.


    // (Función Validar Cuenta)
        // Si (loginMessage === true) {
            // Crear Variable validateUser y Escribir "Coloque su nombre de usuario";
            // Crear Variable validatePassword y Escribir "Coloque su contraseña";
        // } 

        // Mientras (validateUser === userName && validatePassword === password) {
            // Imprimir `Hola ${userName}, usted se ha registrado de manera correcta`;

            // Si (validateUser != userName && validatePassword != password) {
                // Imprimir "Su usuario y/o contraseña son incorrectos, por favor intentelo de nuevo";
            // }
        // } 

        
