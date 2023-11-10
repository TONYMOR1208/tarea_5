import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recu-contra',
  templateUrl: './recu-contra.component.html',
  styleUrls: ['./recu-contra.component.css']
})
export class RecuContraComponent {
  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('passwordRecoveryForm') passwordRecoveryForm: NgForm | undefined;
  email: string = '';
  alertClosed: boolean = true;

  onSubmit() {
    if (this.validateForm()) {
      if (this.alertClosed) {
        // Simulación de envío de correo con nueva contraseña
        alert("¡Revise su correo! Su nueva contraseña ha sido enviada.");

        // Cerrar el alert después de un breve retraso (por ejemplo, 1 segundo)
        setTimeout(() => {
          this.alertClosed = false;
          // Aquí normalmente enviarías un correo real con la nueva contraseña
          this.passwordRecoveryForm?.ngSubmit.emit();
        }, 1000);
      }
    }
  }

  validateForm(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = this.emailInput?.nativeElement.value;

    if (!emailRegex.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }

    return true;
  }
}
