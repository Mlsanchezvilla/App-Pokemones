export default function validation (inputs) {

const errors = {};
const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const regexNumber = /^(?=.*\d).{8,}$/;

//validacion username
if (!regexEmail.test(inputs.username)){
    errors.username= "Debe ingresar un correo electronico"
}

if (!inputs.username){
    errors.username = "El usuario no puede estar vacio"

}

if (!inputs.username.length > 35) {
    errors.username = "Debe tener menos de 35 caracteres"
}

//validacion password
if (!regexNumber.test(inputs.username)){
    errors.password ="La contraseña debe tener al menos un numero"


}

if(!regexPassword.test(inputs.password)){
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres"

}

return errors;
}