//# Corrige el bug de validacion de email

function validarEmail(email) {
    if (!email) {
        return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}













