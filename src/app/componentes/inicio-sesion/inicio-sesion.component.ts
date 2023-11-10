import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Realizar la validación antes de mostrar el mensaje de "Iniciando sesión"
    if (this.validateForm()) {
      // Mostrar un mensaje de "Iniciando sesión" al hacer clic en el botón
      alert("Iniciando sesión...");

      // Agregar la lógica para enviar la solicitud al servidor para autenticar al usuario.
      // Por ejemplo: this.authService.login(this.email, this.password);
    }
  }

  validateForm(): boolean {
    // Validar el formato del correo electrónico usando una expresión regular
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(this.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }

    if (this.password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    return true;
  }
}
