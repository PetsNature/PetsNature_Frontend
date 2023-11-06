import { Component, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.css']
})
export class VentanaComponent {
  readonly authenticationService = inject(AuthenticationService)

  get Name() {
    return this.authenticationService.authenticatedUser.value?.nombre ?? 'Invitado'
  }
}
