// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mensaje = document.getElementById('mensaje');

    // Usuarios predefinidos para demostración
    const usuarios = {
        'admin': 'admin123',
        'usuario': 'password',
        'demo': 'demo123'
    };

    // Manejar el envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío normal del formulario

        // Obtener los valores del formulario
        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;

        // Validar campos vacíos
        if (!usuario || !password) {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }

        // Validar credenciales
        if (usuarios[usuario] && usuarios[usuario] === password) {
            mostrarMensaje('¡Inicio de sesión exitoso! Bienvenido, ' + usuario + '.', 'exito');
            
            // Simular redirección después de 2 segundos
            setTimeout(function() {
                mostrarMensaje('Redirigiendo al panel principal...', 'info');
                // Aquí podrías redirigir a otra página:
                // window.location.href = 'dashboard.html';
            }, 2000);
        } else {
            mostrarMensaje('Usuario o contraseña incorrectos. Intenta de nuevo.', 'error');
        }
    });

    // Función para mostrar mensajes
    function mostrarMensaje(texto, tipo) {
        mensaje.textContent = texto;
        mensaje.className = 'mensaje ' + tipo;
        
        // Ocultar el mensaje después de 5 segundos (excepto para mensajes de éxito)
        if (tipo !== 'exito') {
            setTimeout(function() {
                mensaje.style.display = 'none';
                mensaje.className = 'mensaje';
            }, 5000);
        }
    }

    // Agregar efecto de tecla Enter en los campos de entrada
    document.getElementById('usuario').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('password').focus();
        }
    });

    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
});