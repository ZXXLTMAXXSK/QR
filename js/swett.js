function mostrarAlerta() {
    Swal.fire({
        title: 'FINAL',
        text: 'Ingresa la contraseña para Finalizar este Juego:',
        input: 'password',
        inputPlaceholder: ':Contraseña Final',
        allowOutsideClick: false,
        allowEscapeKey: false, 
        allowEnterKey: false, 
        stopKeydownPropagation: false,
        confirmButtonText: 'INGRESAR', 
        footer: '14/2/2025',
        customClass: { 
            popup: 'ventana', 
            footer: 'footer-alert',
            confirmButton: 'btn-acept',
        },
        preConfirm: (inputValue) => {
            if (inputValue === '1122244444') {
                return true;
            } else {
                Swal.showValidationMessage('Contraseña incorrecta, inténtalo nuevamente.');
                return false;
            }
        }
    });
}
mostrarAlerta();