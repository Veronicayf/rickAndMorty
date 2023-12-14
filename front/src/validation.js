//corresponde fuera de la carpeta componentes

export default (data) => { // lo que se quiere validar del estado local
    let errors = {};

    //email validation

    if (!data.email.includes('@')) {
        errors.e1 = 'Ingrese un email valido'
    }
    if (!data.email) {
        errors.e2 = 'No puede estar vacio'
    }
    if (data.email.length > 35) {
        errors.e3 = 'exeso de caracteres'
    }


    //password validation

    if (!/\d/.test(data.password)) { // valida que sea un passwor (rebada de internet) (regular expression)
        errors.p1 = 'Debe tener al menos un numero'
    }
    if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = 'Longitud incorrecta'
    }

    return errors;

}