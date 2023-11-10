import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.validateForm()) {
      // Agregar la lógica para manejar el registro
      // Por ejemplo, puedes enviar una solicitud al servidor para crear una cuenta.

      // Simulación de registro exitoso
      alert("¡Registro exitoso! Puedes iniciar sesión ahora.");

      // Puedes redirigir al usuario a la página de inicio de sesión o hacer otras acciones necesarias.
    }
  }

  validateForm(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (this.name.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }

    if (!this.email.match(emailRegex)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }

    if (this.username.trim() === "") {
      alert("Por favor, ingresa tu nombre de usuario.");
      return false;
    }

    if (this.password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    if (this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, verifica.");
      return false;
    }

    // Resto de la validación (si es necesario) aquí

    // Si la validación pasa, el formulario se enviará
    return true;
  }
}
