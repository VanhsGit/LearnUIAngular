import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConnectServiceAmplify';
    
  constructor(public authenticator: AuthenticatorService) {
 
  }
}
